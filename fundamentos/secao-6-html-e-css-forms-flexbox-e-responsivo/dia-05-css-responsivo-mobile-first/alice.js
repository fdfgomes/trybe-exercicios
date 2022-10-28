// recuperar cards
const chapterCard = document.querySelector(".aside-one.card");
const infomartionCard = document.querySelector(".aside-two.card");

// função para posicionar o elemento .aside-two (card com as informações do livro) na visualização desktop de acordo com o número de capítulos (tamanho) do card chapters
function handleWindowResize() {
  // pegar a largura atual da janela
  const currentWindowWidth = window.screen.width;
  // pegar posição do card chapters na janela
  const chapterWindowPosition = chapterCard.getBoundingClientRect();
  // verificar se a largura atual da janela é maior ou igual a do breakpoint definido no css para visualização desktop
  if (currentWindowWidth >= 1330) {
    // atribuir ao card informatio a propriedade top
    // top = posição do card chapters na janela + altura (height) do card chapters + 24 (esse 24 é o gap padrão que utilizei no container pai desses 2 cards)
    infomartionCard.style.top = `${parseInt(
      chapterWindowPosition.top + chapterWindowPosition.height + 24
    )}px`;
    infomartionCard.style.left = `${parseInt(chapterWindowPosition.left)}px`;
    // infomartionCard.style.width = `${parseInt(chapterWindowPosition.width)}px`;
  }
}

window.onload = function () {
  // chamar a função assim que a página carregar para posicionar o elemento .aside-two, caso o usuário tenha aberto a página no desktop
  handleWindowResize();
  // adicionar eventListener para posicionar o elemento .aside-two corretamente, caso o usuário mude a resolução da tela
  window.addEventListener("resize", handleWindowResize);
};
