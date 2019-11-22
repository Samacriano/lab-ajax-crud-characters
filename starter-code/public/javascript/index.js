const charactersAPI = new APIHandler('http://localhost:8000');
window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()
    charactersAPI.getFullList()
      .then(list => {
        console.log(list.data);
      })
  });

  //fetching all characters 
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()
    id = searchItem.value
    charactersAPI.getOneRegister(id)
      .then(people => {
        console.log(people)
      })
  });

//deleting characters from the database
  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    let id = document.querySelector("#deleteCartoon").value
    charactersAPI.deleteOneRegister(id)
  });

  //Edit characters 
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    let id = document.querySelector("#edit-character-form [name=chr-id]");
    let editCharacter =
    {
      name: newName.value,
      occupation: newOcupation.value,
      cartoon: newCartoon.checked,
      weapon: newWeapon.value
    }
    charactersAPI.updateOneRegister(id, editCharacter)
    .then(sama => {
      console.log(sama.data);
    })

//Creating new characters
  });
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    let newCharacter =
    {
      name: newName.value,
      occupation: newOcupation.value,
      cartoon: newCartoon.checked,
      weapon: newWeapon.value
    }
    charactersAPI.createOneRegister(newCharacter)
    .then(sama => {
      console.log(sama.data);
    })
  });
});