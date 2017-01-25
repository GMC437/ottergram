'use strict';

var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function initEvents() {

  var thumbnails = getThumbArray();
  thumbnails.forEach(addThumbClickHandler);

}

function getThumbImage(thumbnail) {
  
  return thumbnail.getAttribute('data-image-url');

}

function getThumbTitle(thumbnail) {

  return thumbnail.getAttribute('data-image-title');

}

function getThumbArray() {

  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);

  return thumbnailArray;

}

function addThumbClickHandler(thumb) {

  thumb.addEventListener('click', function (event) {
    event.preventDefault();
    setThumbDetails(thumb);
  });

}

function setThumbDetails(thumbnail) {

  setDetails(getThumbImage(thumbnail), getThumbTitle(thumbnail));

}

function setDetails(imageUrl, titleText) {

  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;

}

initEvents();
