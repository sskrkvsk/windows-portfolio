const shortcuts = document.querySelectorAll('.shortcut');
shortcuts.forEach((shortcut) => {
    shortcut.addEventListener('click', (e) => {
        shortcut.classList.add('active');
        e.stopPropagation();
        document.addEventListener('click', () => {
            shortcut.classList.remove('active');
            document.removeEventListener();
        })
    });
});
const folder = document.querySelector('.folder-shortcut');
const windowMain = document.querySelector('.window-main');
folder.addEventListener('dblclick', () => {
    windowMain.classList.remove('display-none');
});

const close = document.querySelector('.close');
close.addEventListener('click', () => {
    windowMain.classList.add('display-none');
});

const minimize = document.querySelector('.minimize');
minimize.addEventListener('click', () => {
    windowMain.classList.add('window-hide');
});

const full = document.querySelector('.full');
full.addEventListener('click', () => {
    windowMain.classList.add('window-full');
});