// funções
// criar um elemento dentro da página
function createElement(elementTag, elementProperties, elementParent) {
  const element = document.createElement(elementTag);
  const parent = document.querySelector(elementParent);
  for (const property in elementProperties) {
    element[property] = elementProperties[property];
  }
  parent.appendChild(element);
}

// criar os inputs das opções de destino preferido
function createDestinyInputs(inputValues) {
  for (const inputValue of inputValues) {
    // declarar propriedades dos elementos que serão criados
    // input radio
    const inputRadioProperties = {
      type: "radio",
      name: "opcoes",
      id: inputValue.toLowerCase(),
      value: inputValue.toLowerCase(),
    };
    // input label
    const inputLabelProperties = {
      htmlFor: inputValue.toLowerCase(),
      innerText: inputValue,
    };
    // criar os elementos
    // input radio
    createElement("input", inputRadioProperties, "#destiny-options-container");
    // label para o input radio
    createElement("label", inputLabelProperties, "#destiny-options-container");
  }
}

// função para validar os inputs de texto
function validateInput(minLength, maxLength, inputSelector) {
  const inputTooltip = document.querySelector(
    `${inputSelector}-container .tooltip`
  );
  const input = document.querySelector(inputSelector);
  if (input.value.length < minLength || input.value.length > maxLength) {
    inputTooltip.classList.add("visible");
    input.classList.add("invalid");
    input.focus();
    return false;
  }
  return true;
}

function resetValidation() {
  const invalidInputs = document.querySelectorAll(".invalid");
  for (const invalidInput of invalidInputs) {
    invalidInput.classList.remove("invalid");
  }
}

// função para tratar o envio do formulário
function handleFormSubmit(event) {
  // previnir comportamento padrão do envio
  event.preventDefault();
  // realizar validação dos dados antes de prosseguir e retornar alerta ao usuário caso o campo não esteja dentro do range de caracteres esperado
  resetValidation();
  // validação nome - min: 10, máx: 40 caracteres
  if (!validateInput(10, 40, "#full-name")) {
    return alert("Dados inválidos");
  }
  // validação email - min: 10, máx: 50 caracteres
  if (!validateInput(10, 50, "#email")) {
    return alert("Dados inválidos");
  }
  // validação da resposta - min: 0, máx: 500 caracteres
  if (!validateInput(0, 500, "#reply")) {
    return alert("Dados inválidos");
  }
  // verificar se o usuário aceitou a divulgação de suas fotos em futuras divulgações do concurso
  if (!checkboxPhotos.checked) {
    checkboxPhotosContainer.classList.add("invalid");
    return alert(
      "É necessário aceitar os termos de compartilhamento de imagens para prosseguir!"
    );
  }
  // todas as verificações passaram, exibir mensagem informando que o  formulário foi enviado com sucesso
  header.style.display = "none";
  form.style.display = "none";
  messageFormSuccessfull.style.display = "flex";
}

function toggleTooltipVisibility(tooltipParentElement, newVisibilityState) {
  const tooltip = document.querySelector(`${tooltipParentElement} .tooltip`);
  if (newVisibilityState) {
    tooltip.classList.add("visible");
  } else {
    tooltip.classList.remove("visible");
  }
}

function resetTooltipVisibility() {
  const visibleTooltips = document.querySelectorAll(".tooltip.visible");
  for (const visibleTooltip of visibleTooltips) {
    visibleTooltip.classList.remove("visible");
  }
}

function handleMouseEnterInput(event) {
  resetTooltipVisibility();
  let elementContainer = `#${event.target.id}-container`;
  if (event.target.id.includes("container")) {
    elementContainer = `#${event.target.id}`;
  }
  toggleTooltipVisibility(elementContainer, true);
}

function handleMouseLeaveInput(event) {
  resetTooltipVisibility();
  let elementContainer = `#${event.target.id}-container`;
  if (event.target.id.includes("container")) {
    elementContainer = `#${event.target.id}`;
  }
  toggleTooltipVisibility(elementContainer, false);
}

// constantes para acessar os elementos
const header = document.querySelector("header");
const form = document.querySelector("form");
const checkboxPhotosContainer = document.getElementById(
  "agree-photos-container"
);
const messageFormSuccessfull = document.getElementById("success-message");
// inputs
const fullNameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const replyInput = document.getElementById("reply");
// checkboxes
const checkboxPhotos = document.getElementById("agree-photos");

// chamar funções ao terminar de carregar a página
window.onload = function () {
  // criar inputs das opções de destino preferido
  createDestinyInputs(["Cidade", "Campo", "Praia", "Montanhas"]);
  // adicionar eventListeners
  // adicionar eventListener ao form
  form.addEventListener("submit", handleFormSubmit);
  // adicionar eventListeners ao input full-name
  fullNameInput.addEventListener("mouseenter", handleMouseEnterInput);
  fullNameInput.addEventListener("mouseleave", handleMouseLeaveInput);
  // adicionar eventListeners ao input email
  emailInput.addEventListener("mouseenter", handleMouseEnterInput);
  emailInput.addEventListener("mouseleave", handleMouseLeaveInput);
  // adicionar eventListeners ao input resposta
  replyInput.addEventListener("mouseenter", handleMouseEnterInput);
  replyInput.addEventListener("mouseleave", handleMouseLeaveInput);
  //
  checkboxPhotosContainer.addEventListener("mouseenter", handleMouseEnterInput);
  checkboxPhotosContainer.addEventListener("mouseleave", handleMouseLeaveInput);
};
