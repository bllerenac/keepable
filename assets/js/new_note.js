window.onload = () => {
  init()
}

const GLOBAL =  {
  notes: [
    {
      id: uuidv4(),
      title: "This is the title",
      content: "This is the body for the note.",
      color: "white",
      trash: false,
      date: new Date('2020-10-12')
    },
    {
      id: uuidv4(),
      title: "This is the title",
      content: "This is the body for the note.",
      color: "yellow",
      trash: false,
      date: new Date('2020-10-12')
    },
    {
      id: uuidv4(),
      title: "This is the title",
      content: "This is the body for the note.",
      color: "cyan",
      trash: false,
      date: new Date('2020-10-12')
    },
    {
      id: uuidv4(),
      title: "This is the title",
      content: "This is the body for the note.",
      color: "yellow",
      trash: false,
      date: new Date('2020-10-12')
    },
    {
      id: uuidv4(),
      title: "This is the title",
      content: "This is the body for the note.",
      color: "yellow",
      trash: true,
      date: new Date('2020-10-12')
    },
    {
      id: uuidv4(),
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
                <button class="button__trash" data-id=${note.id}><img src="assets/images/trash.svg" alt=""></button>
              </div>
          </article>`;
}

function renderList(arr) {
  return `
    ${arr.map((note) => renderListItem(note)).join("")}
  `;
}

function new_note(){
  const content = document.querySelector(".center");
  content.addEventListener("submit", (e) => {
    let target = content.querySelector(".form");
    if (target == e.target) {
      e.preventDefault();
      GLOBAL.notes.push({
        id: uuidv4(),
        title: e.target.title.value,
        content: e.target.content.value,
        color: "yellow",
        trash: false,
        date: new Date(),
      });
      console.log("new data");
      const content_n = document.querySelector(".notes-container");
      let arr = GLOBAL.notes.sort((a, b) => b.createdDate - a.createdDate)
      arr = arr.filter(el => el.trash == false)
      content_n.innerHTML = renderList(arr);
    }
  });
}

function addFunctionsToSidebar(){
  let notesEl = document.getElementById("sidebar__note")
  let trashEl = document.getElementById("sidebar__trash")
  notesEl.onclick = notes
  trashEl.onclick = trash
}

function tooltip() {
  const tooltip = document.querySelector('.tooltip');
  tooltip.addEventListener('mouseover', e => {
    const trigger = tooltip.querySelector('.tooltip-trigger');
    const content = tooltip.querySelector('.tooltip-content');
    if(trigger == e.target){
      content.classList.remove('hidden')
    }
  })
  tooltip.addEventListener('mouseleave', e => {
    const content = tooltip.querySelector('.tooltip-content');
    content.classList.add('hidden');
  });
  tooltip.addEventListener('click', e => {
    const triggers = tooltip.querySelectorAll('.tooltip-content a');
    triggers.forEach(trigger => {
      if(trigger == e.target){
        console.log(trigger.textContent);
      }
    })
  })
}

function addTrashButtonFunction(){
  let container = document.querySelector(".notes-container")
  container.addEventListener("click", el =>{
    let buttons = document.querySelectorAll(".button__trash")
    buttons.forEach(button => {
      if(button == el.target){
        changeTrashStatus(button.dataset.id)
      }
    });
  })
}

function addEventListeners() {
  tooltip();
  new_note();
  addTrashButtonFunction();
}

function init() {
  notes(); //on filtes.js
  addFunctionsToSidebar();
  addEventListeners();
}