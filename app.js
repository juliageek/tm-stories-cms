var path = require('path');
var expressCacheOnDemand = require('express-cache-on-demand')();

const locales = [
  {
    value: 'ro',
    label: 'Română'
  },
  {
    value: 'en',
    label: 'English (US)'
  }
]

const defaultLocale = 'ro';

var apos = require('apostrophe')({
  shortName: 'tm-stories-cms',
  modules: {
    settings: {
      alias: 'settings',
      locales: locales.map(locale => ({
        label: locale.label,
        name: locale.value
      }))
    },
    'apostrophe-i18n-static': {
      defaultLocale,
      locales,
      namespaces: true,
      ignoreNamespaces: [ 'apostrophe' ],
      generateAtStartup: false,
      objectNotation: true,
      autoReload: false
    },
    'apostrophe-images': {
      enableAltField: true
    },
    'apostrophe-global': {
      faviconDestinationDir: '/fav/'
    },
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, '/views') },
    'apostrophe-workflow': {
      alias: 'workflow',
      prefixes: {
        'en': '/en',
        'ro': '/ro'
      },
      locales: [{
        name: 'default',
        label: 'Default',
        private: true,
        children: locales.map(locale => ({ label: locale.label, name: locale.value }))
      }],
      replicateAcrossLocales: false
     },
    'apostrophe-workflow-modified-documents': {},
    'helpers': { extend: 'apostrophe-module' },
    'link-widgets': {},
    'page-link-widgets': {},
    'my-theme': {},
    // Blog modules
    'antiquity': { extend: 'apostrophe-blog' },
    'antiquity-pages': { extend: 'apostrophe-pieces-pages' },
    'austrian': { extend: 'apostrophe-blog' },
    'austrian-pages': { extend: 'apostrophe-pieces-pages' },
    'medieval': { extend: 'apostrophe-blog' },
    'medieval-pages': { extend: 'apostrophe-pieces-pages' },
    'modern': { extend: 'apostrophe-blog' },
    'modern-pages': { extend: 'apostrophe-pieces-pages' },
    'otoman': { extend: 'apostrophe-blog' },
    'otoman-pages': { extend: 'apostrophe-pieces-pages' },
    'world-wars': { extend: 'apostrophe-blog' },
    'world-wars-pages': { extend: 'apostrophe-pieces-pages' },
    // Content widgets
    'two-panel-widgets': {},
    'three-panel-widgets': {}
  }
});
