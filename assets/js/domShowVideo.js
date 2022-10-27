const divIframe = document.createElement('div');
divIframe.classList.add('iframe-wrapper');

const buttonDelete = document.createElement('button');
buttonDelete.classList.add('btn','btn-delete')
buttonDelete.addEventListener('click', e => {
 handeDeleteShow();
})
divIframe.appendChild(buttonDelete);
const iDelete = document.createElement('i');
iDelete.classList.add('fa','fa-remove');
buttonDelete.appendChild(iDelete);

const iframe = document.createElement('iframe');
iframe.classList.add('iframe')
iframe.style.border = 'block';
iframe.src = 'https://www.youtube.com/embed/mUjhiT0zSKI';
divIframe.appendChild(iframe);


export const handleClickVideo = () => {
  const showElement = document.querySelector('.popup-videos');
  showElement.addEventListener('click', e => {
    const divBgBody = document.createElement('div')
    divBgBody.classList.add('js-bg-body')
  
    document.body.append(divBgBody)
    divIframe.style.display = 'block';
    document.querySelector('.js-container-concern').appendChild(divIframe);
  })
}

const handeDeleteShow = () => {
  divIframe.style.display = 'none';
  divIframe.remove();
  document.querySelector('.js-bg-body').remove();
} 
