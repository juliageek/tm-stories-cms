// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  types: [
    {
      name: 'home',
      label: 'Home'
    },
    {
      name: 'about',
      label: 'About'
    },
    {
      name: 'photos',
      label: 'Photo Gallery'
    },
    {
      label: 'Antiquity Index',
      name: 'antiquity-pages'
    },
    {
      label: 'Medieval Index',
      name: 'medieval-pages'
    },
    // Add more page types here, but make sure you create a corresponding
    // template in lib/modules/apostrophe-pages/views/pages!
  ]
};
