document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const icon = toggleButton.querySelector('i');
  const currentTheme = localStorage.getItem('theme') || 'dark';

  // تطبيق الوضع الافتراضي (Dark Mode)
  if (currentTheme === 'light') {
    document.body.classList.add('day-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    document.body.classList.remove('day-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }

  // التعامل مع النقر على زر التبديل
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('day-mode');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');

    // حفظ التفضيل في localStorage
    const theme = document.body.classList.contains('day-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
  });
});
