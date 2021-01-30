function notes() {
  const content = document.querySelector(".notes-container");
  if (GLOBAL.notes.length == 0){
    content.innerHTML = renderEmpty();
  } else {
    let arr = GLOBAL.notes.sort((a, b) => b.createdDate - a.createdDate)
    arr = arr.filter(el => el.trash == false)
    content.innerHTML = (arr.length != 0) ? renderList(arr) : renderEmpty()
  }
  makeActive("sidebar__note")
}

function trash() {
  const content = document.querySelector(".notes-container");
  if (GLOBAL.notes.length == 0){
    content.innerHTML = renderEmpty();
  } else {
    let arr = GLOBAL.notes.sort((a, b) => b.createdDate - a.createdDate)
    arr = arr.filter(el => el.trash == true)
    content.innerHTML = (arr.length != 0) ? renderList(arr) : renderEmpty()
  }
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
