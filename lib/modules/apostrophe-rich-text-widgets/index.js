module.exports = {
  // The standard list copied from the module, plus sup and sub
  label: 'Rich Text',
  sanitizeHtml: {
    allowedTags: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a',
                   'ul', 'ol', 'li', 'b', 'i', 'strong', 'em', 'strike',
                   'code', 'hr', 'br', 'div', 'table', 'thead', 'caption',
                   'tbody', 'tr', 'th', 'td', 'pre', 'sup', 'sub'
    ],

    allowedAttributes: {
      'p': ['class'],
      'h3': ['class'],
      // Include the default setting as well, or else links will break
      'a': [ 'href', 'name', 'target' ]
    }
  }
};