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
  let img = ""
  img = (note.trash) ? "recover" : "trash"
  let hidden = el=>{ return (el==false) ? "display-none" : null}
  return `<article class="note ${note.color}">
              <h1 class="note__title">${note.title}</h1>
              <p class="note__text">${note.content}</p>
              <div class="note__buttons flex">
                <div class ="tooltip ${hidden(!note.trash)}"></div>
                <button class="button__delete ${hidden(note.trash)}" data-id=${note.id}><img src="assets/images/trash.svg" alt=""></button>
                <button class="button__trash" data-id=${note.id}><img src="assets/images/${img}.svg" alt=""></button>
              </div>
          </article>`;
}

function renderTooltip(){
  return `
  
    <div class="tooltip-trigger" >
      <svg width="18" height="18"  viewBox="0 0 18 18"  xmlns="http://www.w3.org/2000/svg">
        <path class="form__icon" d="M7.18216 0.177016C3.68755 0.859058 0.871467 3.66809 0.182388 7.15213C-1.11842 13.7264 4.81258 18.6273 9.28104 17.9347C10.7295 17.7097 11.4397 16.0152 10.7752 14.7108C9.96309 13.1147 11.1233 11.2514 12.9163 11.2514H15.7183C16.9769 11.2514 17.9965 10.2108 18 8.95567C17.9824 3.41496 12.9409 -0.944486 7.18216 0.177016ZM3.37465 11.2514C2.75237 11.2514 2.24962 10.7487 2.24962 10.1264C2.24962 9.50412 2.75237 9.00138 3.37465 9.00138C3.99693 9.00138 4.49968 9.50412 4.49968 10.1264C4.49968 10.7487 3.99693 11.2514 3.37465 11.2514ZM4.49968 6.75134C3.8774 6.75134 3.37465 6.2486 3.37465 5.62632C3.37465 5.00405 3.8774 4.5013 4.49968 4.5013C5.12196 4.5013 5.6247 5.00405 5.6247 5.62632C5.6247 6.2486 5.12196 6.75134 4.49968 6.75134ZM8.99979 4.5013C8.37751 4.5013 7.87476 3.99856 7.87476 3.37629C7.87476 2.75401 8.37751 2.25127 8.99979 2.25127C9.62207 2.25127 10.1248 2.75401 10.1248 3.37629C10.1248 3.99856 9.62207 4.5013 8.99979 4.5013ZM13.4999 6.75134C12.8776 6.75134 12.3749 6.2486 12.3749 5.62632C12.3749 5.00405 12.8776 4.5013 13.4999 4.5013C14.1222 4.5013 14.6249 5.00405 14.6249 5.62632C14.6249 6.2486 14.1222 6.75134 13.4999 6.75134Z" fill="#999B9E"/>
      </svg>
    </div>
    <div class="tooltip-content hidden tooltip_note_postion">  
      <a class="color_circle color_circle--white" href="#">white</a>
      <a class="color_circle color_circle--red" href="#">red</a>
      <a class="color_circle color_circle--mustard" href="#">greenyellow</a>
      <a class="color_circle color_circle--yellow" href="#">yellow</a>
      <a class="color_circle color_circle--green" href="#">green</a>
      <a class="color_circle color_circle--hex" href="#">peru</a>
      <a class="color_circle color_circle--light-blue" href="#">lightblue</a>
      <a class="color_circle color_circle--blue" href="#">blue</a>
      <a class="color_circle color_circle--purple" href="#">purple</a>
      <a class="color_circle color_circle--pink" href="#">pink</a>
    </div>
  `
}

function renderList(arr) {
  return `
    ${arr.map((note) => renderListItem(note)).join("")}
  `;
}

function renderEmpty(){
  return `<div class="with-100 text-aling--center">
            <h1 class="no-notes__text">No notes to keep</h1>
          </div>`
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
      tooltip_init();
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

function tooltip_notes() {
  const notes_container = document.querySelector('.notes-container')
  const notes = notes_container.querySelectorAll('.note')
  notes.forEach((note) =>{
    const container = note.querySelector('.note__buttons');
    container.addEventListener('mouseover', e => {
      const tooltip = container.querySelector('.tooltip');
      const trigger = tooltip.querySelector('.tooltip-trigger');
      const content = tooltip.querySelector('.tooltip-content');
      const onMouseLeave = e => {
        if(tooltip === e.target){
          tooltip.removeEventListener('mouseleave', onMouseLeave);
          content.classList.add('hidden');
        }
      }
      if(trigger === e.target){
        content.classList.remove('hidden');
        tooltip.addEventListener('mouseleave', onMouseLeave);
      }
    });

    container.addEventListener('click', e => {
      const triggers = container.querySelectorAll('.tooltip-content a');
      triggers.forEach(trigger => {
        if(trigger === e.target){
          color = trigger.textContent;
          console.log(note)
          note.style.backgroundColor = String(color)
        }
      })
    });
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

function addDeleteButtonFunction(){
  let container = document.querySelector(".notes-container")
  container.addEventListener("click", el =>{
    let buttons = document.querySelectorAll(".button__delete")
    buttons.forEach(button => {
      if(button == el.target){
        deleteNote(button.dataset.id)
      }
    });
  })
}

function tooltip_init(){
  tooltip_notes();
  const notes_container = document.querySelector('.notes-container')
  const notes = notes_container.querySelectorAll('.note')
  notes.forEach((note) => {
    const container = note.querySelector('.note__buttons');
    const content = container.querySelector('.tooltip');
    // console.log(container)
    // console.log(content)
    return content.innerHTML = renderTooltip();
  });
}

function addEventListeners() {
  tooltip();
  new_note();
  addTrashButtonFunction();
  addDeleteButtonFunction();
  tooltip_init();
}

function init() {
  notes(); //on filtes.js
  addFunctionsToSidebar();
  addEventListeners();
}