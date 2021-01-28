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

function renderListItem(note) {
  return `<li class="content__item">
  <div class="content__detail">
    <h3>${note.title}</h3>
    <p>${note.content}</p>
  </div>
</li>`;
}

function renderList() {
  GLOBAL.notes.sort((a, b) => b.createdDate - a.createdDate);
  return `
  <h2>Notes Global</h2>
  <ul class="content__list">
    ${GLOBAL.notes.map((note) => renderListItem(note)).join("")}
  </ul>
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