// pegando a div com as imagens e clonando em uma constante

const cloneSlide = document.querySelector('.logos-slide').cloneNode(true);


//inserir o cloneSlide dentro da div com a classe logos

document.querySelector('.logos').appendChild(cloneSlide);