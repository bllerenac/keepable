function notes() {
  const content = document.querySelector(".notes-container");
  let arr = GLOBAL.notes.sort((a, b) => b.createdDate - a.createdDate)
  arr = arr.filter(el => el.trash == false)
  content.innerHTML = renderList(arr);
  tooltip_init();
  makeActive("sidebar__note")
}

function trash() {
  const content = document.querySelector(".notes-container");
  let arr = GLOBAL.notes.sort((a, b) => b.createdDate - a.createdDate)
  arr = arr.filter(el => el.trash == true)
  content.innerHTML = renderList(arr);
  tooltip_init();
  makeActive("sidebar__trash")
}

function makeActive(target){
  let lis = document.querySelectorAll(".active")
  let element = document.getElementById(target)
  lis.forEach(element => {
    element.classList.remove('active');
  });
  element.classList.add('active')
}

function init(){
  let notesEl = document.getElementById("sidebar__note")
  let trashEl = document.getElementById("sidebar__trash")
  console.log(notesEl)
  console.log(trashEl)
  notesEl.onclick = notes()
  trashEl.onclick = trash()
}