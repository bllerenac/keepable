function notes(val) {
  const content = document.querySelector(".notes-container");
  let arr = GLOBAL.notes.sort((a, b) => b.createdDate - a.createdDate)
  arr = arr.filter(el => el.trash == false)
  content.innerHTML = renderList(arr);
  if (val != null) {
    makeActive(val)
  }
}

function trash(val) {
  const content = document.querySelector(".notes-container");
  let arr = GLOBAL.notes.sort((a, b) => b.createdDate - a.createdDate)
  arr = arr.filter(el => el.trash == true)
  content.innerHTML = renderList(arr);
  if (val != null) {
    makeActive(val)
  }
}

function makeActive(target){
  let lis = document.querySelectorAll(".active")
  lis.forEach(element => {
    element.classList.remove('active');
  });
  target.classList.add('active')
}
