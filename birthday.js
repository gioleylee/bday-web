const note = document.querySelector('#birthday-note');
const trigger = document.querySelector('.note-link');
const dialog = document.createElement('dialog');

if (typeof dialog.showModal === 'function') {
  dialog.className = note.className;
  dialog.id = note.id;
  dialog.setAttribute('aria-labelledby', 'note-title');
  dialog.append(...note.children);
  note.replaceWith(dialog);

  const closeLink = dialog.querySelector('.close-note');
  const closeButton = document.createElement('button');
  const title = dialog.querySelector('#note-title');

  closeButton.className = closeLink.className;
  closeButton.type = 'button';
  closeButton.setAttribute('aria-label', closeLink.getAttribute('aria-label'));
  closeButton.textContent = closeLink.textContent;
  closeLink.replaceWith(closeButton);

  trigger.setAttribute('aria-haspopup', 'dialog');
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.showModal();
    title.focus();
  });

  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => trigger.focus());

  if (window.location.hash === '#birthday-note') {
    dialog.showModal();
    title.focus();
  }
}
