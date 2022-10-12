const body = document.querySelector("body");
const text = document.querySelector("#texto");

// inputs do usuário
const backgroundColorInput = document.getElementById("background-color");
const textColorInput = document.getElementById("text-color");
const fontSize = document.getElementById("font-size");
const lineHeight = document.getElementById("line-height");
const fontFamily = document.getElementById("font-family");

let textColor = "black";

window.onload = () => {
  // event listeners
  backgroundColorInput.addEventListener(
    "input",
    handleBackgroundColorInputChange
  );
  textColorInput.addEventListener("input", handleTextColorInputChange);
  fontSize.addEventListener("input", handleFontSizeInputChange);
  lineHeight.addEventListener("input", handleLineHeightInputChange);
  fontFamily.addEventListener("input", handleFontFamilyInputChange);

  // event listener para que ao passar o mouse sobre uma tag a, a border-bottom apareça com a mesma cor do texto
  const anchorTags = document.getElementsByTagName("a");

  for (let anchor of anchorTags) {
    anchor.addEventListener("mouseenter", handleAnchorTagMouseEnter);
    anchor.addEventListener("mouseleave", handleAnchorTagMouseLeave);
  }

  // carregar e aplicar a preferências do usuário
  getUserPreferences();
};

// funções dos event listeners
const handleBackgroundColorInputChange = (event) => {
  body.style.backgroundColor = event.target.value;
  // atualizar localStorage com as preferências do usuário
  updateUserPreferences("backgroundColor", event.target.value);
};

const handleTextColorInputChange = (event) => {
  textColor = event.target.value;
  // alterar cor do todo o texto da página
  body.style.color = textColor;
  // alterar cor das tags a
  const anchorTags = document.getElementsByTagName("a");
  for (let anchor of anchorTags) {
    anchor.style.color = textColor;
  }
  // alterar cor dos exemplos de preenchimento
  const examples = document.getElementsByClassName("exemplo-opcao");
  for (let example of examples) {
    example.style.color = textColor;
  }
  // atualizar localStorage com as preferências do usuário
  updateUserPreferences("textColor", textColor);
};

const handleFontSizeInputChange = (event) => {
  let newFontSize = event.target.value;
  // mudar font-size do título do texto
  const title = text.querySelector("h1");
  title.style.fontSize = `calc(${
    newFontSize !== "" ? newFontSize : "16px"
  } * 2)`;
  // mudar font-size dos parágrafos
  for (let paragraph of text.querySelectorAll("p")) {
    paragraph.style.fontSize = newFontSize;
  }
  // atualizar localStorage com as preferências do usuário
  updateUserPreferences("fontSize", newFontSize);
};

const handleLineHeightInputChange = (event) => {
  for (let paragraph of text.querySelectorAll("p")) {
    paragraph.style.lineHeight = event.target.value;
  }
  // atualizar localStorage com as preferências do usuário
  updateUserPreferences("lineHeight", event.target.value);
};

const handleFontFamilyInputChange = (event) => {
  for (let paragraph of text.querySelectorAll("p")) {
    body.style.fontFamily = event.target.value;
  }
  // atualizar localStorage com as preferências do usuário
  updateUserPreferences("fontFamily", event.target.value);
};

const handleAnchorTagMouseEnter = (event) => {
  event.target.style.borderBottom = `2.5px solid ${textColor}`;
};

const handleAnchorTagMouseLeave = (event) => {
  event.target.style.borderBottom = `0px solid ${textColor}`;
};

const getUserPreferences = () => {
  let userPreferences = localStorage.getItem("user-preferences");

  // caso não exista a chave 'user-preferences', criá-la com valores iniciais nulos
  if (!userPreferences) {
    let userPreferences = {
      backgroundColor: null,
      textColor: null,
      fontSize: null,
      lineHeight: null,
      fontFamily: null,
    };
    localStorage.setItem("user-preferences", JSON.stringify(userPreferences));
  } else {
    userPreferences = JSON.parse(userPreferences);

    for (let preference in userPreferences) {
      switch (preference) {
        case "backgroundColor":
          backgroundColorInput.value = userPreferences.backgroundColor;
          // aplicar preferência na página
          handleBackgroundColorInputChange({
            target: { value: userPreferences.backgroundColor },
          });
          break;
        case "textColor":
          textColorInput.value = userPreferences.textColor;
          // aplicar preferência na página
          handleTextColorInputChange({
            target: { value: userPreferences.textColor },
          });
          break;
        case "fontSize":
          fontSize.value = userPreferences.fontSize;
          // aplicar preferência na página
          handleFontSizeInputChange({
            target: { value: userPreferences.fontSize },
          });
          break;
        case "lineHeight":
          lineHeight.value = userPreferences.lineHeight;
          handleLineHeightInputChange({
            target: {
              value: userPreferences.lineHeight,
            },
          });
          break;
        case "fontFamily":
          fontFamily.value = userPreferences.fontFamily;
          handleFontFamilyInputChange({
            target: {
              value: userPreferences.fontFamily,
            },
          });
          break;
        default:
          break;
      }
    }
  }
};

const updateUserPreferences = (userPreference, newPreferenceValue) => {
  let userPreferences = localStorage.getItem("user-preferences");
  if (userPreferences) {
    userPreferences = JSON.parse(userPreferences);
    userPreferences[userPreference] = newPreferenceValue;
    localStorage.setItem("user-preferences", JSON.stringify(userPreferences));
  }
};
