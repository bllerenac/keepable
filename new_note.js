const GLOBAL =  {
  notes: [
    {
      title: "This is the title",
      content: "This is the body for the note.",
      color: "#FFFFFF",
      trash: false,
      date: new Date('2020-10-15')
    },
    {
      title: "This is the title",
      content: "This is the body for the note.",
      color: "#FBBC04",
      trash: false,
      date: new Date('2020-10-16')
    },
    {
      title: "This is the title",
      content: "This is the body for the note.",
      color: "#FFF475",
      trash: false,
      date: new Date('2020-10-14')
    },
    {
      title: "This is the title",
      content: "This is the body for the note.",
      color: "#CBF0F8",
      trash: true,
      date: new Date('2020-10-13')
    },
    {
      title: "This is the title",
      content: "This is the body for the note.",
      color: "#F28B82",
      trash: false,
      date: new Date('2020-10-13')
    },
    {
      title: "This is the title",
      content: "This is the body for the note.",
      color: "#A7FFEB",
      trash: false,
      date: new Date('2020-10-13')
    },
  ],
};

function renderListItem(note) {
  if(note.trash == false){
  return `
    <article class="note" style="background-color: ${note.color};">
      <h1 class="note__title">${note.title}</h1>
      <p class="note__text">${note.content}</p>
      <div class="note__buttons">
        <button ><img src="assets/images/color.svg" alt=""></button>
        <button><img src="assets/images/trash.svg" alt=""></button>
      </div>
    </article>`;
  }
}

function renderList() {
  return `
    ${GLOBAL.notes.map((note) => renderListItem(note)).join("")}
  `;
}

function addEventListeners() {
}

function init() {
  const content = document.querySelector(".notes-container");
  content.innerHTML = renderList();
  addEventListeners();
}
init();