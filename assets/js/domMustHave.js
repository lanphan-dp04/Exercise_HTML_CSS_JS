import { intCourses } from "./courses.js";

const courseElement = document.querySelector('.js-categories');

const renderDataCourse = (element) => {
  const liItem = document.createElement('li');
  liItem.classList.add('categories-item','col-lg-4','col-md-6');
  courseElement.appendChild(liItem);

  const aLink = document.createElement('a');
  aLink.classList.add('categories-link');
  liItem.appendChild(aLink);

  const divItemWrapper = document.createElement('div');
  divItemWrapper.classList.add('categories-item-wrapper');
  aLink.appendChild(divItemWrapper);

  const divCategoriesIcon = document.createElement('div');
  divCategoriesIcon.classList.add('categories-icon');
  divItemWrapper.appendChild(divCategoriesIcon);

  const imageIcon = document.createElement('img');
  imageIcon.src = `${element.image}`;
  imageIcon.alt = 'image-icon';
  divCategoriesIcon.appendChild(imageIcon);

  const divCategoriesContent = document.createElement('div');
  divCategoriesContent.classList.add('categories-content');
  divItemWrapper.appendChild(divCategoriesContent);

  const h4ItemTitle =document.createElement('h4');
  h4ItemTitle.classList.add('categories-item-title','categories-text-hover','text-bold');
  h4ItemTitle.textContent = `${element.name}`;
  divCategoriesContent.appendChild(h4ItemTitle);

  const spanCourese = document.createElement('span');
  spanCourese.classList.add('categories-courses','categories-text-hover','text-regular');
  spanCourese.textContent = `${element.desc}`;
  divCategoriesContent.appendChild(spanCourese);
}
export const renderCourses = () => {
  let courseList = intCourses;
  courseList.map(course => {
    renderDataCourse(course)
  })
}
