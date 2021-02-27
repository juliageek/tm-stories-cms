$(function() {
  // Start with your project-level client-side javascript here.
  // JQuery and lodash (_) are both included with Apostrophe, so no need to
  // worry about including them on your own.

  $('#nav-icon1').on('click', function() {
    const navIconClassList = $(this).attr('class').split(/\s+/);
    const logoClassList = $('.logo').attr('class').split(/\s+/);
    const pageMenuClassList = $('#page-menu').attr('class');
    const periodsContainerClassList = $('#periods-container').attr('class');
    const bodyClassList = $('body').attr('class');

    navIconClassList.includes('open') ? $(this).removeClass('open') : $(this).addClass('open');
    logoClassList.includes('open') ? $('.logo').removeClass('open') : $('.logo').addClass('open');
    bodyClassList.includes('scroll-disabled') ? $('body').removeClass('scroll-disabled') : $('body').addClass('scroll-disabled');
    pageMenuClassList ? $('#page-menu').removeClass('open') : $('#page-menu').addClass('open');
    periodsContainerClassList ? $('#periods-container').removeClass('open') : $('#periods-container').addClass('open');
  });

  $('.language-button').on('click', function() {
    const languageListClassList = $('.language-list').attr('class').split(/\s+/);
    const arrowIconClassList = $('#arrow-icon').attr('class').split(/\s+/);

    languageListClassList.includes('hidden') ? $('.language-list').removeClass('hidden') : $('.language-list').addClass('hidden');
    if (arrowIconClassList.includes('up')) {
      $('#arrow-icon').removeClass('up');
      $('#arrow-icon').addClass('down');
      $('.arrow-wrapper').removeClass('up');
      $('.arrow-wrapper').addClass('down');
    } else if (arrowIconClassList.includes('down')) {
      $('#arrow-icon').removeClass('down');
      $('#arrow-icon').addClass('up');
      $('.arrow-wrapper').removeClass('down');
      $('.arrow-wrapper').addClass('up');
    }
  });

  const twoPanelArray = $('.two-panel-container').toArray();
  const windowWidth = $(window).width();

  $('.two-panel-container').each(function() {
    const panelHeight = $(this).height();
    const imageContainer = $(this).find('.image-container');
    const image = $(this).find('.image');
    if (windowWidth > 1280) {
      imageContainer.height(panelHeight + 300);
      image.height(panelHeight + 300);
      image.css('background-size', 'cover');
    } else if (windowWidth < 1280 && windowWidth > 768) {
      imageContainer.height(panelHeight + 100);
      image.height(panelHeight + 100);
    } else {
      imageContainer.height(460);
      image.height(400);
    }
  })

  $('#arrow-right').on('mouseenter', function() {
    console.log('the mouse entered arrow-right');
    $('#icon-wrapper-right').removeClass('hidden');
  })

  $('#arrow-right').on('mouseleave', function() {
    console.log('the mouse left arrow-right');
    $('#icon-wrapper-right').addClass('hidden');
  })

  $('#arrow-left').on('mouseenter', function() {
    $('#icon-wrapper-left').removeClass('hidden');
  })

  $('#arrow-left').on('mouseleave', function() {
    $('#icon-wrapper-left').addClass('hidden');
  })
});
