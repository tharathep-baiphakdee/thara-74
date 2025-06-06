const popup = document.getElementById('popup');const openBtn = document.getElementById('openPopupBtn');
const closeBtn = document.getElementById('closePopupBtn');

// แสดง popup
openBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});

// ปิด popup
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// คลิกข้างนอก popup เพื่อปิด
window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});