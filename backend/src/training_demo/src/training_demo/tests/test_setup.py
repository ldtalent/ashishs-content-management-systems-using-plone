"""Setup tests for this package."""
from plone import api
from plone.app.testing import setRoles
from plone.app.testing import TEST_USER_ID
from Products.CMFPlone.utils import get_installer
from training_demo.testing import TRAINING_DEMO_INTEGRATION_TESTING

import unittest


class TestSetup(unittest.TestCase):
    """Test that training_demo is properly installed."""

    layer = TRAINING_DEMO_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer["portal"]
        self.setup = self.portal.portal_setup
        self.installer = get_installer(self.portal, self.layer["request"])

    def test_product_installed(self):
        """Test if training_demo is installed."""
        self.assertTrue(self.installer.is_product_installed("training_demo"))

    def test_browserlayer(self):
        """Test that ITRAINING_DEMOLayer is registered."""
        from plone.browserlayer import utils
        from training_demo.interfaces import ITRAINING_DEMOLayer

        self.assertIn(ITRAINING_DEMOLayer, utils.registered_layers())

    def test_latest_version(self):
        """Test latest version of default profile."""
        self.assertEqual(
            self.setup.getLastVersionForProfile("training_demo:default")[0],
            "20230502001",
        )


class TestUninstall(unittest.TestCase):

    layer = TRAINING_DEMO_INTEGRATION_TESTING

    def setUp(self):
        self.portal = self.layer["portal"]
        self.installer = get_installer(self.portal, self.layer["request"])
        roles_before = api.user.get_roles(TEST_USER_ID)
        setRoles(self.portal, TEST_USER_ID, ["Manager"])
        self.installer.uninstall_product("training_demo")
        setRoles(self.portal, TEST_USER_ID, roles_before)

    def test_product_uninstalled(self):
        """Test if training_demo is cleanly uninstalled."""
        self.assertFalse(self.installer.is_product_installed("training_demo"))

    def test_browserlayer_removed(self):
        """Test that ITRAINING_DEMOLayer is removed."""
        from plone.browserlayer import utils
        from training_demo.interfaces import ITRAINING_DEMOLayer

        self.assertNotIn(ITRAINING_DEMOLayer, utils.registered_layers())
