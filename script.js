const input = document.querySelector('#carta-texto');
const botao = document.querySelector('#criar-carta');
const paragrafo = document.querySelector('#carta-gerada');
const paragrafoContador = document.querySelector('#carta-contador');

const classeEstilo = ['newspaper', 'magazine1', 'magazine2'];
const classeTamanho = ['medium', 'big', 'reallybig'];
const classeRotacao = ['rotateleft', 'rotateright'];
const classeInclinacao = ['skewleft', 'skewright'];

// Requisito 3 e 5
function criaSpans(arr) {
  let contador = 0;
  for (let index = 0; index < arr.length; index += 1) {
    contador += 1;
    const spano = document.createElement('span');
    spano.textContent = `${arr[index]}  `;
    spano.classList.add(classeEstilo[(Math.floor(Math.random() * 3))]);
    spano.classList.add(classeTamanho[(Math.floor(Math.random() * 3))]);
    spano.classList.add(classeRotacao[(Math.floor(Math.random() * 2))]);
    spano.classList.add(classeInclinacao[(Math.floor(Math.random() * 2))]);
    paragrafo.appendChild(spano);
  }
  paragrafoContador.innerHTML = '';
  const spanContador = document.createElement('span');
  spanContador.textContent = contador;
  paragrafoContador.appendChild(spanContador);
}

botao.addEventListener('click', () => {
  if (input.value) {
    const arr = input.value.split(' ');
    if (!paragrafo.innerHTML) {
      criaSpans(arr);
    } else if (paragrafo.innerHTML) {
      paragrafo.innerHTML = '  ';
      criaSpans(arr);
    }
  } else {
    paragrafo.textContent = 'Por favor, digite o conteúdo da carta.';
  }
});

// Requisito 17 e 18
paragrafo.addEventListener('click', (event) => {
  const alvo = event.target;
  alvo.className = ' ';
  alvo.classList.add(classeEstilo[(Math.floor(Math.random() * 3))]);
  alvo.classList.add(classeTamanho[(Math.floor(Math.random() * 3))]);
  alvo.classList.add(classeRotacao[(Math.floor(Math.random() * 2))]);
  alvo.classList.add(classeInclinacao[(Math.floor(Math.random() * 2))]);
});
