from plone.app.contenttypes.testing import PLONE_APP_CONTENTTYPES_FIXTURE
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import applyProfile
from plone.app.testing import FunctionalTesting
from plone.app.testing import IntegrationTesting
from plone.app.testing import PloneSandboxLayer
from plone.testing.zope import WSGI_SERVER_FIXTURE

import training_demo


class TRAINING_DEMOLayer(PloneSandboxLayer):

    defaultBases = (PLONE_APP_CONTENTTYPES_FIXTURE,)

    def setUpZope(self, app, configurationContext):
        # Load any other ZCML that is required for your tests.
        # The z3c.autoinclude feature is disabled in the Plone fixture base
        # layer.
        import plone.restapi

        self.loadZCML(package=plone.restapi)
        self.loadZCML(package=training_demo)

    def setUpPloneSite(self, portal):
        applyProfile(portal, "training_demo:default")
        applyProfile(portal, "training_demo:initial")


TRAINING_DEMO_FIXTURE = TRAINING_DEMOLayer()


TRAINING_DEMO_INTEGRATION_TESTING = IntegrationTesting(
    bases=(TRAINING_DEMO_FIXTURE,),
    name="TRAINING_DEMOLayer:IntegrationTesting",
)


TRAINING_DEMO_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(TRAINING_DEMO_FIXTURE, WSGI_SERVER_FIXTURE),
    name="TRAINING_DEMOLayer:FunctionalTesting",
)


TRAINING_DEMOACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        TRAINING_DEMO_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        WSGI_SERVER_FIXTURE,
    ),
    name="TRAINING_DEMOLayer:AcceptanceTesting",
)
