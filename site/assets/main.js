// Sibling index fallback for browsers without native sibling-index()
if (!CSS.supports('animation-delay: calc(sibling-index() * 0.1s)')) {
  const bio = document.getElementById('bio');
  if (bio) {
    [...bio.children].forEach((el, index) => {
      el.style.setProperty('--sibling-index', index + 1);
    });
  }
}
