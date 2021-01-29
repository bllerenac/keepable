window.onload = () => {
  init()
}

const GLOBAL =  {
  notes: [
    {
      title: "This is the title",
      content: "This is the body for the note.",
      color: "white",
      trash: false,
      date: new Date('2020-10-12')
    },
    {
      title: "This is the title",
      content: "This is the body for the note.",
      color: "yellow",
      trash: false,
      date: new Date('2020-10-12')
    },
    {
      title: "This is the title",
      content: "This is the body for the note.",
      color: "cyan",
      trash: false,
      date: new Date('2020-10-12')
    },
    {
      title: "This is the title",
      content: "This is the body for the note.",
      color: "yellow",
      trash: false,
      date: new Date('2020-10-12')
    },
    {
      title: "This is the title",
      content: "This is the body for the note.",
      color: "yellow",
      trash: true,
      date: new Date('2020-10-12')
    },
    {
      title: "This is the title",
      content: "This is the body for the note.",
      color: "cyan",
      trash: true,
      date: new Date('2020-10-12')
    },
  ],
};

function renderListItem(note) {
  return `<article class="note ${note.color}">
              <h1 class="note__title">${note.title}</h1>
              <p class="note__text">${note.content}</p>
              <div class="note__buttons">
                <button><img src="assets/images/color.svg" alt=""></button>
                <button><img src="assets/images/trash.svg" alt=""></button>
              </div>
          </article>`;
}

function renderList(arr) {
  return `
    ${arr.map((note) => renderListItem(note)).join("")}
  `;
}

function addEventListeners() {
}

function init() {
  notes()
  addEventListeners();
}