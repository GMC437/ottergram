'use strict';

var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;

function initEvents() {

  var thumbnails = getThumbArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();

}

function hideDetails() {

  document.body.classList.add(HIDDEN_DETAIL_CLASS);

}

function showDetails() {

  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function () {
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);

}

function addKeyPressHandler() {

  document.body.addEventListener('keyup', function (event){
    event.preventDefault();
    console.log(event.keyCode);
    if (event.keyCode === ESC_KEY) {
      hideDetails();
    }
  });

}

function addThumbClickHandler(thumb) {

  thumb.addEventListener('click', function (event) {
    event.preventDefault();
    setThumbDetails(thumb);
    showDetails();
  });

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
