module.exports = {
  name: 'modern-blog',
  label: 'Article',
  alias: 'modern-blog',
  extend: 'apostrophe-blog',
  contextual: true,
  addFields: [
    {
      name: 'thumbnail',
      label: 'Thumbnail',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      options: {
        limit: 1,
        size: 'full'
      }
    },
    {
      name: 'description',
      label: 'Article description',
      type: 'string',
      textarea: true,
      min: 30,
      max: 150
    }
  ],
  construct: function (self, options) {
    options.arrangeFields = options.arrangeFields.map(group => {
      if (group.name === 'basic') {
        group.fields.push('thumbnail');
        group.fields.push('description');
      }
      return group;
    });
  }
};