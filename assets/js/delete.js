function deleteNote(id){
  let arr = GLOBAL.notes
  let index = arr.findIndex(el => el.id == id)
  console.log(index)
  if (index > -1){
    arr.splice(index, 1);
    trash()
  } else {
    alert("Something went wrong...")
  }
}