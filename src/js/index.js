const characters = document.querySelectorAll('.character')
// console.log(characters)
//-------------------
characters.forEach((character) => {
  character.addEventListener('mouseenter', () => {

      if(window.innerWidth < 450) {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }

    characterSelectionRemove();
    character.classList.add('selected')

    changeSelectedCharacterImage(character);

    const CharacterName = document.getElementById('character_name')
    CharacterName.innerText = character.getAttribute('data-name')
    const CharacterDescription = document.getElementById(
      'character_description'
    )
    CharacterDescription.innerText = character.getAttribute('data-description')
  })
})
function changeSelectedCharacterImage(character) {
  const BigCharacterImage = document.querySelector('.big_character');

  const CharacterId = character.attributes.id.value;
  BigCharacterImage.src = `./src/images/card-${CharacterId}.png`;
}

function characterSelectionRemove() {
  const characterSelected = document.querySelector('.selected');
  characterSelected.classList.remove('selected');
}

