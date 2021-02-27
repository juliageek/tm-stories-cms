module.exports = {
  name: 'antiquity-blog',
  label: 'Article',
  alias: 'antiquity-blog',
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
    }, {
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