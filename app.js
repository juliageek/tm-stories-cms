var path = require('path');

const locales = [
  {
    value: 'ro',
    label: 'Română'
  },
  {
    value: 'en',
    label: 'United States'
  }
]

const defaultLocale = 'en';

var apos = require('apostrophe')({
  shortName: 'tm-stories-cms',
  modules: {
    'apostrophe-i18n-static': {
      defaultLocale,
      locales,
      namespaces: true,
      ignoreNamespaces: [ 'apostrophe' ]
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
      // Recommended to save database space. You can still
      // export explicitly between locales
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
    'antiquity': { extend: 'apostrophe-blog' },
    'antiquity-pages': { extend: 'apostrophe-pieces-pages' },
    'medieval': { extend: 'apostrophe-blog' },
    'medieval-pages': { extend: 'apostrophe-pieces-pages' },
    // Content widgets
    'two-panel-widgets': {}
  }
});
