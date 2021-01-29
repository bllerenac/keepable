const GLOBAL =  {
  notes: [
    {
      title: "tittle 01",
      content: "content 01",
      color: "red",
      trash: false,
      date: new Date('2020-10-12')
    },
    {
      title: "tittle 01",
      content: "content 01",
      color: "red",
      trash: false,
      date: new Date('2020-10-12')
    },
    {
      title: "tittle 01",
      content: "content 01",
      color: "red",
      trash: false,
      date: new Date('2020-10-12')
    },
    {
      title: "tittle 01",
      content: "content 01",
      color: "red",
      date: new Date('2020-10-12')
    },
  ],
};

let form = document.getElementById("form");
let form_title = document.getElementById("form--title");
let form_text = document.getElementById("form--text");
let form_color = document.getElementById("form--color");

function renderListItem(note) {
  return `
  <article class="note">
    <h1 class="note__title">${note.title}</h1>
    <p class="note__text">${note.content}</p>
    <div class="note__buttons">
      <button><img src="assets/images/color.svg" alt=""></button>
      <button><img src="assets/images/trash.svg" alt=""></button>
    </div>
  </article>`;
  
}

function renderList() {
  GLOBAL.notes.sort((a, b) => b.createdDate - a.createdDate);
  return `
    ${GLOBAL.notes.map((note) => renderListItem(note)).join("")}
  `;
}

function addEventListeners() {
}

function init() {
  const content = document.querySelector(".new_notes-container");
  content.innerHTML = renderList();
  addEventListeners();
}
init();