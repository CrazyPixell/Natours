'use strict';
///////////////////////////////// Navigation
////// Old mess!!!

// const navStories = document.getElementById('nav-stories');
// const sectionStories = document.getElementById('stories');
// const navAbout = document.getElementById('nav-about');
// const sectionAbout = document.getElementById('about');
// const navFeatures = document.getElementById('nav-features');
// const sectionFeatures = document.getElementById('features');
// const navTours = document.getElementById('nav-tours');
// const sectionTours = document.getElementById('tours');
// const navBook = document.getElementById('nav-book');
// const sectionBook = document.getElementById('book');

// const navCheck = document.querySelector('.navigation__checkbox');

// const navScroll = function (sectionCoord) {
//   navCheck.checked = false;
//   window.scrollTo({
//     top: sectionCoord.top + window.pageYOffset,
//     left: sectionCoord.left + window.pageXOffset,
//     behavior: 'smooth',
//   });
// };

// navStories.addEventListener('click', function (e) {
//   const sectionStoriesCoord = sectionStories.getBoundingClientRect();
//   navScroll(sectionStoriesCoord);
// });

// navAbout.addEventListener('click', function (e) {
//   const sectionAboutCoord = sectionAbout.getBoundingClientRect();
//   navScroll(sectionAboutCoord);
// });

// navFeatures.addEventListener('click', function (e) {
//   const sectionFeaturesCoord = sectionFeatures.getBoundingClientRect();
//   navScroll(sectionFeaturesCoord);
// });

// navTours.addEventListener('click', function (e) {
//   const sectionToursCoord = sectionTours.getBoundingClientRect();
//   navScroll(sectionToursCoord);
// });

// navBook.addEventListener('click', function (e) {
//   const sectionBookCoord = sectionBook.getBoundingClientRect();
//   navScroll(sectionBookCoord);
// });

/////// New
// const navCheck = document.querySelector('.navigation__checkbox');

// const navLinks = document.querySelectorAll('.navigation__link');
// navLinks.forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const href = link.getAttribute('href');
//     console.log(href);
//     const section = document.querySelector(href);
//     navCheck.checked = false;
//     section.scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

////// Using event delegation

const navList = document.querySelector('.navigation__list');
const navCheck = document.querySelector('#nav-toggle');

navList.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('navigation__link')) {
    const id = e.target.getAttribute('href');
    navCheck.click();
    const section = document.querySelector(id);
    section.scrollIntoView({
      behavior: 'smooth',
    });
  }
});

/////////////////////////////////////
/// Scrolling effect AOS better!

// const allSections = document.querySelectorAll('.section');

// const sectionRotate = function (entries, observer) {
//   const [entry] = entries;
// };

// const sectionObserver = new IntersectionObserver(sectionRotate, {
//   root: null,
//   threshold: 0.3,
// });

// allSections.forEach(section => {
//   sectionObserver.observe(section);
//   section.setAttribute('data-aos', 'fade-up');
// });
