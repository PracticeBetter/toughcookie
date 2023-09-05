'use strict';

// Variables

const startCookingBtn = document.querySelector('.__app--button');

const targetval1 = document.querySelector('.target1');
const targetval2 = document.querySelector('.target2');
const targetval3 = document.querySelector('.target3');
const targetval4 = document.querySelector('.target4');
const containerApp = document.querySelector('.__app--col1');
const table = document.querySelector('.tableResult');
const titleSection = document.querySelector('#title-section');
const aboutSection = document.querySelector('#aboutId');
const navBar = document.querySelector('.sticky-nav');

// Event Handlers

startCookingBtn.addEventListener('click', function () {
  const html = `<div class="col text-center __app--col1">
      <form>
        <label for="text" class="form-label">Initial Weight:</label>
        <input
          type="text"
          class="form-control __app--initWtValue"
          placeholder="lbs"
        />
        <button class="btn __app-initalWtButton">Submit</button>
      </form>
    </div>`;

  containerApp.insertAdjacentHTML('beforeend', html);
  table.style.opacity = '1';
  startCookingBtn.style.display = 'none';
  const initalWtButton = document.querySelector('.__app-initalWtButton');

  initalWtButton.addEventListener('click', function (e) {
    e.preventDefault();

    let initWtValue = Number(
      document.querySelector('.__app--initWtValue').value
    );
    const valArray = Array.from({ length: 4 }).map((el, i) => {
      const multiplier = Math.pow(1.05, i + 1); // Calculate the multiplier (105% or 1.05)
      return Math.trunc(initWtValue * multiplier);
    });
    targetval1.textContent = valArray[0];
    targetval2.textContent = valArray[1];
    targetval3.textContent = valArray[2];
    targetval4.textContent = valArray[3];
  });
});

let initialValue = 135;

// const testing = Array.from({ length: 4 }).map((el, i) => {
//   const multiplier = Math.pow(1.05, i + 1); // Calculate the multiplier (105% or 1.05)
//   return Math.trunc(initialValue * multiplier);
// });

// console.log(testing);

// Sticky Navigation Section (Using Intersection Observer API)
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(aboutSection);
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    navBar.classList.add('fixed-top');
    navBar.classLisst.add('transparent-background');
  } else {
    navBar.classList.remove('fixed-top');
    navBar.classList.remove('transparent-background');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: '-70px',
});
headerObserver.observe(titleSection);
// ***Benefits - Tabs Section
// variables
const tabContainer = document.querySelector('.tab-container');
const tabs = document.querySelectorAll('.nav-item');

tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('nav-item');
  if (!clicked) return;
  tabs.forEach(t => t.classList.remove('active'));
});
