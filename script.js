const contactButton = document.querySelector('.contact-section .button');

if (contactButton) {
  contactButton.addEventListener('click', () => {
    console.log('Opening email client for a project inquiry.');
  });
}
