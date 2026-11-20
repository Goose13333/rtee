const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  themeToggle.textContent = document.body.classList.contains('light-theme')
    ? '🌙 Тёмная тема'
    : '☀️ Светлая тема';
});

const modalData = {
  sun: {
    icon: '☀️',
    title: 'Солнце — сердце системы',
    text: 'Температура на поверхности Солнца достигает 5 500 °C, а в ядре — 15 миллионов градусов. Свет от Солнца долетает до Земли всего за 8 минут и 20 секунд.'
  },
  mars: {
    icon: '🔴',
    title: 'Марс — Красная планета',
    text: 'На Марсе находится потухший вулкан Олимп высотой более 21 километра — он почти в 2,5 раза выше Эвереста. А сутки на Марсе длятся 24 часа 39 минут.'
  },
  saturn: {
    icon: '🪐',
    title: 'Сатурн — властелин колец',
    text: 'Кольца Сатурна состоят из миллиардов кусочков льда и камня. При этом плотность самого Сатурна меньше плотности воды: если бы нашёлся гигантский океан, планета бы в нём плавала.'
  },
  hole: {
    icon: '🕳️',
    title: 'Чёрная дыра — ловушка времени',
    text: 'Вблизи чёрной дыры гравитация настолько огромна, что время там течёт заметно медленнее, чем на Земле. Первую реальную фотографию чёрной дыры учёные получили в 2019 году.'
  }
};

function openModal(key) {
  const data = modalData[key];
  document.getElementById('modalIcon').textContent = data.icon;
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalText').textContent = data.text;
  document.getElementById('modalOverlay').style.display = 'flex';
}

function forceCloseModal() {
  document.getElementById('modalOverlay').style.display = 'none';
}

function closeModal(event) {
  if (event.target.id === 'modalOverlay') {
    forceCloseModal();
  }
}

function calculateWeight() {
  const weight = parseFloat(document.getElementById('earthWeight').value);
  if (!weight || weight <= 0) {
    alert('Введи свой вес в килограммах (например, 60)!');
    return;
  }

  document.getElementById('moonWeight').textContent = (weight * 0.165).toFixed(1) + ' кг';
  document.getElementById('marsWeight').textContent = (weight * 0.38).toFixed(1) + ' кг';
  document.getElementById('jupiterWeight').textContent = (weight * 2.53).toFixed(1) + ' кг';
  document.getElementById('sunWeight').textContent = (weight * 27.9).toFixed(1) + ' кг';
}

function checkQuiz() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');
  const resultBox = document.getElementById('quizResult');

  if (!q1 || !q2 || !q3) {
    resultBox.style.display = 'block';
    resultBox.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
    resultBox.style.color = '#f87171';
    resultBox.textContent = 'Ответь на все 3 вопроса, чтобы узнать результат!';
    return;
  }

  const score = Number(q1.value) + Number(q2.value) + Number(q3.value);
  resultBox.style.display = 'block';
  resultBox.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
  resultBox.style.color = '#4ade80';
  resultBox.textContent = `Твой результат: ${score} из 3! Отличная работа!`;
}
