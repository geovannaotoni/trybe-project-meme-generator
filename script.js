const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

// Função para inserir o texto no container do meme
const insertText = () => {
  const text = inputText.value;
  memeText.innerHTML = text;
};
inputText.addEventListener('keyup', insertText);

// Função para inserir a imagem no container do meme
// Fonte https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
const inputImage = document.getElementById('meme-insert');
const img = document.getElementById('meme-image');

const insertImage = () => {
  const file = inputImage.files[0];
  if (file) {
    img.src = URL.createObjectURL(file);
  }
};
inputImage.addEventListener('change', insertImage);

// Função para alterar a cor da moldura do meme
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const memeContainer = document.getElementById('meme-image-container');

const standartStyle = '1px solid black';
fireButton.addEventListener('click', () => {
  if (memeContainer.style.border === '3px dashed rgb(255, 0, 0)') {
    memeContainer.style.border = standartStyle;
  } else {
    memeContainer.style.border = '3px dashed rgb(255, 0, 0)';
  }
});

waterButton.addEventListener('click', () => {
  if (memeContainer.style.border === '5px double rgb(0, 0, 255)') {
    memeContainer.style.border = standartStyle;
  } else {
    memeContainer.style.border = '5px double rgb(0, 0, 255)';
  }
});

earthButton.addEventListener('click', () => {
  if (memeContainer.style.border === '6px groove rgb(0, 128, 0)') {
    memeContainer.style.border = standartStyle;
  } else {
    memeContainer.style.border = '6px groove rgb(0, 128, 0)';
  }
});

// Função para adicionar as imagens dos memes
const imagem1 = document.getElementById('meme-1');
const imagem2 = document.getElementById('meme-2');
const imagem3 = document.getElementById('meme-3');
const imagem4 = document.getElementById('meme-4');

const insertImageMeme = (event) => {
  img.src = event.target.src;
};

imagem1.addEventListener('click', insertImageMeme);
imagem2.addEventListener('click', insertImageMeme);
imagem3.addEventListener('click', insertImageMeme);
imagem4.addEventListener('click', insertImageMeme);
