module.exports = {
  label: 'Antiquity Page',
  name: 'antiquity-pages',
  filters: {
    // Grab our ancestor pages, with two levels of subpages
    // We usually want children of the current page, too
    children: true
  }
};