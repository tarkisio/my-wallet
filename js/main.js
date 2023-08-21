const toggleButton = document.getElementById('button-include-itens');
const inclusionMenu = document.getElementById('menu-include-itens');

  toggleButton.addEventListener('click', () => {
    inclusionMenu.classList.toggle('hidden');
  });