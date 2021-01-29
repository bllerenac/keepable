function changeTrashStatus(id) {
  let note = GLOBAL.notes.find(el => el.id == id)
  note.trash = !note.trash
  if (note.trash){
    notes()
  } else {
    trash()
  }
}