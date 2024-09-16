document.addEventListener('DOMContentLoaded', () => {
  const profilePhoto = document.querySelector('.profile-photo');

  // Simple fade-in animation for profile photo
  profilePhoto.style.opacity = 0;
  setTimeout(() => {
    profilePhoto.style.transition = 'opacity 2s ease';
    profilePhoto.style.opacity = 1;
  }, 500);

  // Skill item hover animation (with slight rotation)
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'rotate(3deg)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'rotate(0deg)';
    });
  });
});
