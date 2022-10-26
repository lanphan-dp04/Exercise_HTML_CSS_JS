import { initQuestion } from "./question.js";



const questionElement = document.querySelector('.js-question-list');

const renderDataQuestion = (element) => {
  const liQuestion = document.createElement('li');
  liQuestion.classList.add('question-item', `question-${element.id}`);
  questionElement.appendChild(liQuestion);

  const divQestionHeader = document.createElement('div');
  divQestionHeader.classList.add('question-item-header');
  liQuestion.appendChild(divQestionHeader);

  const spanIcon = document.createElement('span');
  spanIcon.classList.add('question-icon')
  divQestionHeader.appendChild(spanIcon);

  const h4QuestionTitle = document.createElement('h4');
  h4QuestionTitle.classList.add('question-title','text-bold');
  h4QuestionTitle.textContent = `${element.title}`;
  divQestionHeader.appendChild(h4QuestionTitle)

  const pQuestionDesc = document.createElement('p');
  pQuestionDesc.classList.add('question-desc','text-regular');
  pQuestionDesc.textContent = `${element.desc}`;
  liQuestion.appendChild(pQuestionDesc);
}

export const renderQuestion = () => {
  const questionList = initQuestion;
  questionList.map( question => {
    renderDataQuestion(question);
  })
}

renderQuestion();

const concernElement = document.querySelectorAll('.question-item');

const renderActive = (id) => {
  let concernValue = document.querySelector(`.question-${id}`);
  concernElement.forEach((element) => {
    if (element.classList.contains("question-active")) {
      element.classList.remove("question-active");
    }
    concernValue.classList.add("question-active");
  });
};
const checkRenderActive = (id) => {
  let concernValue = document.querySelector(`.question-${id}`);
  if (concernValue.classList.contains("question-active")) {
    return concernValue.classList.remove("question-active");
  }
  renderActive(id);
};

export const handleRenderActive = async() => {
  const questionList = initQuestion;
  for( let i = 0; i < questionList.length; i++) {
    const question = await concernElement[i];
    question.addEventListener('click', function(e) {
      checkRenderActive(i);
    })
  }
}

