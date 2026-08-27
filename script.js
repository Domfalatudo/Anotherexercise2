const precos = {
  1: 5,
  2: 3.5,
  3: 4.8,
  4: 8.9,
  5: 7.32
};

const formatado = valor => valor.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'});

document.getElementById('calcular').onclick = () => {
  const codigo = +document.getElementById('codigo').value;
  const quantidade = +document.getElementById('quantidade').value;
  const resultado = document.getElementById('resultado');

  resultado.className = 'resultado';

  if (!precos[codigo]) {
    resultado.textContent = 'Código inválido. Informe um código de 1 a 5.';
    resultado.classList.add('erro');
    return;
  }

  if (quantidade < 1) {
    resultado.textContent = 'Quantidade inválida. Informe um valor maior que zero.';
    resultado.classList.add('erro');
    return;
  }

  resultado.innerHTML = `
    Código do produto comprado: <strong>${codigo}</strong><br>
    Quantidade comprada: <strong>${quantidade}</strong><br>
    Valor a pagar: <strong>${formatado(precos[codigo] * quantidade)}</strong>
  `;
};