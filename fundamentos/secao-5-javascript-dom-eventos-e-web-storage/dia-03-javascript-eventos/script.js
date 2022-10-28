function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Parte 1
const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const decemberHolidaysList = [24, 25, 31];
const decemberFridaysList = [4, 11, 18, 25];

//funcão para criar a lista de dias com base na array recebida
function createDaysList(daysList, fridaysList, holidaysList) {
  const appendTo = document.getElementById("days");
  for (let day of daysList) {
    const dayLiElement = document.createElement("li");
    dayLiElement.className = "day";
    dayLiElement.innerText = day;
    dayLiElement.isSelected = false;
    dayLiElement.toggleTaskSelectedStatus = function () {
      this.isSelected = !this.isSelected;
    };
    appendTo.appendChild(dayLiElement);
  }
  addClassToDays(fridaysList, "friday");
  addClassToDays(holidaysList, "holiday");
}

// funcão para adicionar classe 'holiday/friday' para os feriados e sextas-feitas, repectivamente
function addClassToDays(daysList, classToAdd) {
  const elementsWithDayClass = document.getElementsByClassName("day");
  for (let day of daysList) {
    for (let element of elementsWithDayClass) {
      if (parseInt(element.innerText) === day) {
        element.classList.add(classToAdd);
      }
    }
  }
}

createDaysList(decemberDaysList, decemberFridaysList, decemberHolidaysList);

// Parte 2
// função para criar um novo elemento na página
function createElement(tag, props, appendTo) {
  const element = document.createElement(tag);
  const appendToElement = document.querySelector(appendTo);
  for (let prop in props) {
    element[prop] = props[prop];
  }
  appendToElement.appendChild(element);
}

createElement(
  "button",
  {
    innerText: "Feriados",
    id: "btn-holiday",
  },
  ".buttons-container"
);

// Parte 3
const holidaysButton = document.getElementById("btn-holiday");
let holidaysAreHighlighted = false;

holidaysButton.addEventListener("click", handleHolidaysButtonClick);

function handleHolidaysButtonClick() {
  const currentCalendarHolidays =
    document.getElementsByClassName("day holiday");
  let newBackgroundColor = holidaysAreHighlighted
    ? "rgb(238,238,238)"
    : "white";

  for (let holiday of currentCalendarHolidays) {
    holiday.style.backgroundColor = newBackgroundColor;
  }

  holidaysAreHighlighted = !holidaysAreHighlighted;
}

// Parte 4
// Criar botão 'Sexta-feira'
createElement(
  "button",
  {
    innerText: "Sexta-feira",
    id: "btn-friday",
  },
  ".buttons-container"
);

const fridayButton = document.getElementById("btn-friday");
let fridaysInnerTextAreChanged = false;

fridayButton.addEventListener("click", handleFridayButtonClick);

function handleFridayButtonClick() {
  const currentCalendarFridays = document.getElementsByClassName("day friday");

  for (let friday of currentCalendarFridays) {
    if (!fridaysInnerTextAreChanged) {
      friday.originalValue = friday.innerText;
      friday.innerText = "Sextooou o/";
    } else {
      friday.innerText = friday.originalValue;
    }
  }

  fridaysInnerTextAreChanged = !fridaysInnerTextAreChanged;
}

// Parte 6
const currentCalendarDays = document.getElementsByClassName("day");

for (let day of currentCalendarDays) {
  day.addEventListener("mouseenter", handleDayElementMouseEnter);
  day.addEventListener("mouseleave", handleDayElementMouseLeave);
}

function handleDayElementMouseEnter(event) {
  event.target.style.transform = "scale(1.5)";
}

function handleDayElementMouseLeave(event) {
  event.target.style.transform = "scale(1)";
}

// Parte 7
function createTask(task) {
  createElement("span", { innerText: task }, "div.my-tasks");
  addColorLegendToTask("green");
}

createTask("Organizar meu GitHub");

// Parte 8
function addColorLegendToTask(color) {
  createElement(
    "div",
    {
      className: "task",
      style: `background-color: ${color}`,
    },
    "div.my-tasks"
  );
}

// Parte 9
const myTasksList = document.getElementsByClassName("task");

for (let task of myTasksList) {
  task.addEventListener("click", handleTaskColorLegendClick);
  task.isSelected = false;
  task.toggleTaskSelectedStatus = function () {
    this.isSelected = !this.isSelected;
  };
}

function handleTaskColorLegendClick(event) {
  event.target.toggleTaskSelectedStatus();

  if (event.target.isSelected) {
    event.target.classList.add("selected");
  } else {
    event.target.classList.remove("selected");
  }
}

// Parte 10
for (let day of currentCalendarDays) {
  day.addEventListener("click", handleDayElementClick);
}

function checkIfOneTaskIsSelected() {
  const tasksElements = document.getElementsByClassName("task");
  for (let task of tasksElements) {
    if (task.isSelected) {
      return true;
    }
  }
  return false;
}

function handleDayElementClick(event) {
  if (checkIfOneTaskIsSelected()) {
    event.target.toggleTaskSelectedStatus();
    if (event.target.isSelected) {
      event.target.style.color = "green";
    } else {
      event.target.style.color = "rgb(119,119,119)";
    }
  }
}

// Bônus
const addCommitmentButton = document.getElementById("btn-add");
const newCommitmentInput = document.getElementById("task-input");

addCommitmentButton.addEventListener("click", handleAddCommitmentButtonClick);
newCommitmentInput.addEventListener(
  "keypress",
  handleCommitmentInputEnterKeypress
);

function handleAddCommitmentButtonClick(event) {
  if (newCommitmentInput.value.trim() !== "") {
    createElement(
      "span",
      {
        innerText: newCommitmentInput.value.trim(),
      },
      ".my-commitments"
    );
  } else {
    alert("Escreva seu compromisso para adicionar à lista");
  }
}

function handleCommitmentInputEnterKeypress(event) {
  if (event.key === "Enter") {
    handleAddCommitmentButtonClick();
  }
}
