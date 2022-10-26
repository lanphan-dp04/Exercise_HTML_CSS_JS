import { initCampus } from "./campus.js";


const campusElement = document.querySelector('.js-campus-list');

const renderDataCampus = (element) => {
  const liCampus = document.createElement('li');
  liCampus.classList.add('campus-item','col-lg-4','col-md-6');
  campusElement.appendChild(liCampus);

  const divCampusWrapper = document.createElement('div');
  divCampusWrapper.classList.add('campus-courses-wrapper');
  liCampus.appendChild(divCampusWrapper);

  const divCampusCourses = document.createElement('div');
  divCampusCourses.classList.add('campus-courses');
  divCampusWrapper.appendChild(divCampusCourses);

  const divImage = document.createElement('div');
  divImage.classList.add('course-image');
  divCampusCourses.appendChild(divImage);

  const imageCampus = document.createElement('img');
  imageCampus.src = `${element.image}`;
  imageCampus.alt = `${element.title}`;
  divImage.appendChild(imageCampus);

  const h3Capmus = document.createElement('h3');
  h3Capmus.classList.add('campus-desc','text-bold')
  h3Capmus.textContent = `${element.title}`;
  divCampusCourses.appendChild(h3Capmus);

}

export const renderCampus = () => {
  const campusList = initCampus;
  campusList.map( campus => {
    renderDataCampus(campus);
  })
}
