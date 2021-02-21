module.exports = {
  name: 'medieval-blog',
  label: 'Article',
  alias: 'medieval-blog',
  extend: 'apostrophe-blog',
  contextual: true,
  addFields: [
    {
      name: 'thumbnail',
      label: 'Thumbnail',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      options: {
        aspectRatio: [ 3, 2 ],
        limit: 1
      }
    }
  ],
  construct: function (self, options) {
    options.arrangeFields = options.arrangeFields.map(group => {
      if (group.name === 'basic') {
        group.fields.push('thumbnail');
      }
      return group;
    });
  }
};