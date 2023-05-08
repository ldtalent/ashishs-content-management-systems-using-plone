/**
 * Add your config changes here.
 * @module config
 * @example
 * export default function applyConfig(config) {
 *   config.settings = {
 *     ...config.settings,
 *     port: 4300,
 *     listBlockTypes: {
 *       ...config.settings.listBlockTypes,
 *       'my-list-item',
 *    }
 * }
 */

// All your imports required for the config here BEFORE this line
import { BannerView, StepsViews, EventListing } from '@package/components';

import heroSVG from '@plone/volto/icons/hero.svg';
import freedomSVG from '@plone/volto/icons/freedom.svg';
import '@plone/volto/config';

export default function applyConfig(config) {
  config.settings = {
    ...config.settings,
    isMultilingual: false,
    supportedLanguages: ['en'],
    defaultLanguage: 'en',
  };
  config.blocks.blocksConfig.banner = {
    id: 'banner',
    title: 'Banner',
    icon: heroSVG,
    group: 'common',
    view: BannerView,
    edit: BannerView,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
  };
  config.blocks.blocksConfig.steps = {
    id: 'steps',
    title: 'Steps',
    icon: freedomSVG,
    group: 'common',
    view: StepsViews,
    edit: StepsViews,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
  };
  config.blocks.blocksConfig.listing.variations = [
    ...config.blocks.blocksConfig.listing.variations,
    {
      id: 'EventListing',
      title: 'Events',
      template: EventListing,
    },
  ];
  return config;
}
