$(function() {
  // Start with your project-level client-side javascript here.
  // JQuery and lodash (_) are both included with Apostrophe, so no need to
  // worry about including them on your own.

  $('#nav-icon1').on('click', function() {
    const navIconClassList = $('#nav-icon1').attr('class').split(/\s+/);
    const logoClassList = $('.logo').attr('class').split(/\s+/);
    const pageMenuClassList = $('#page-menu').attr('class');
    const periodsContainerClassList = $('#periods-container').attr('class');

    navIconClassList.includes('open') ? $('#nav-icon1').removeClass('open') : $('#nav-icon1').addClass('open');
    logoClassList.includes('open') ? $('.logo').removeClass('open') : $('.logo').addClass('open');
    pageMenuClassList ? $('#page-menu').removeClass('open') : $('#page-menu').addClass('open');
    periodsContainerClassList ? $('#periods-container').removeClass('open') : $('#periods-container').addClass('open');
  });

  $('.language-button').on('click', function() {
    const languageListClassList = $('.language-list').attr('class').split(/\s+/);
    languageListClassList.includes('hidden') ? $('.language-list').removeClass('hidden') : $('.language-list').addClass('hidden');
  });

  const twoPanelArray = $('.two-panel-container').toArray();
  const windowWidth = $(window).width();

  $('.two-panel-container').each(function() {
    const panelHeight = $(this).height();
    const imageContainer = $(this).find('.image-container');
    const image = $(this).find('.image');
    if (windowWidth > 1280) {
      imageContainer.height(panelHeight + 300);
      image.css('background-size', 'cover');
    } else {
      image.css('background-size', 'cover');
      imageContainer.height(panelHeight + 200);
    }
  })
});
