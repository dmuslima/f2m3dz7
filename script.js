const searchInput = document.getElementById('searchInput');
const darkModeBtn = document.getElementById('darkModeBtn');
const kartocki = document.querySelector('.kartocki');
let countries = [];

async function fetchFlags() {
  try {
    const res = await fetch("data (2).json");
    const data = await res.json();
    countries = data;
    generateCards(countries);
  } catch (err) {
    console.error("Ошибка при получении данных:", err);
  }
}

function generateCards(list) {
  kartocki.innerHTML = "";
  list.forEach(country => {
    const card = document.createElement('div');
    card.className = 'box';
    card.innerHTML = `
      <img src="${country.flags.png}" alt="${country.name.common}" class="img">
      <h2 class="h2">${country.name.common}</h2>
    `;
    kartocki.appendChild(card);
  });
}

searchInput.addEventListener('input', () => {
  const value = searchInput.value.toLowerCase();
  const filtered = countries.filter(country =>
    country.name.common.toLowerCase().includes(value)
  );
  generateCards(filtered);
});

darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

fetchFlags();
