const areas = require('../helpers/lib/areas.js');

module.exports = {
  label: 'Two Panel',
  skipInitialModal: true,
  extend: 'apostrophe-widgets',
  addFields: [
    {
      name: 'leftPanel',
      label: 'Left Panel',
      contextual: true,
      type: 'area',
      options: {
        widgets: {
          'apostrophe-images': {
            options: {
              limit: 1,
              template: 'background',
              maxSize: [ 700, 350 ],
              aspectRatio: [ 1, 1 ]
            }
          },
          'apostrophe-rich-text': {
            toolbar: [ 'Styles', 'Bold', 'Italic', 'Blockquote' ],
            styles: [
              { name: 'Heading', element: 'h2'},
              { name: 'Subheading', element: 'h3'},
              {
                element: 'p',
                name: 'Paragraph',
                attributes: { class: 'panel-text' }
              },
              {
                element: 'p',
                name: 'Highlighted text',
                attributes: { class: 'highlighted-text' }
              }
            ]
          }
        }
      }
    },
    {
      name: 'rightPanel',
      label: 'Right Panel',
      contextual: true,
      type: 'area',
      options: {
        widgets: {
          'apostrophe-images': {
            options: {
              limit: 1,
              template: 'background',
              maxSize: [ 700, 350 ],
              aspectRatio: [ 1, 1 ]
            }
          },
          'apostrophe-rich-text': {
            toolbar: [ 'Styles', 'Bold', 'Italic', 'Blockquote' ],
            styles: [
              { name: 'Heading', element: 'h2'},
              { name: 'Subheading', element: 'h3'},
              {
                element: 'p',
                name: 'Paragraph',
                attributes: { class: 'panel-text' }
              },
              {
                element: 'p',
                name: 'Highlighted text',
                attributes: { class: 'highlighted-text' }
              }
            ]
          }
        }
      }
    }
  ]
};