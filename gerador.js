function gerarLinkWpp(numero, mensagem) {
    numero = numero.replace('+', '').replace(' ', ''); // remove espaços e sinal de "+" se houver
    mensagem = mensagem.replace(' ', '%20'); // troca espaços por "%20"
    const link = `https://api.whatsapp.com/send?phone=${numero}&text=${mensagem}`;
    return link;
  }
  function gerarLink() {
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;
    const link = gerarLinkWpp(telefone, mensagem);
    window.location.href = link;
  }