const shortcuts = document.querySelectorAll('.shortcut');
const explorer = document.querySelector('.explorer');
const projects = document.querySelectorAll('.folder');
const files = document.querySelectorAll('.file');
const trashBin = document.querySelector('.recycle-bin');
trashBin.addEventListener('click', (e) => {
        trashBin.classList.add('active');
        e.stopPropagation();
        document.addEventListener('click', () => {
            trashBin.classList.remove('active');
        })
    });

const folder = document.querySelector('.folder-shortcut');
const windowMain = document.querySelector('.window-main');

folder.addEventListener('dblclick', () => {
    if (windowMain.classList.contains('window-hide')) {
        windowMain.classList.remove('window-hide');
    } else {
        windowMain.classList.remove('display-none');
        explorer.classList.add('explorer-active');
    }
});
folder.addEventListener('click', (e) => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        if (windowMain.classList.contains('window-hide')) {
            windowMain.classList.remove('window-hide');
        } else {
            windowMain.classList.remove('display-none');
            explorer.classList.add('explorer-active');
        }
    } else {
        folder.classList.add('active');
        e.stopPropagation();
        document.addEventListener('click', () => {
            folder.classList.remove('active');
        });
    }
    
});

const close = document.querySelector('.close');
close.addEventListener('click', () => {
    windowMain.classList.add('display-none');
    explorer.classList.remove('explorer-active');
    projects.forEach((project) => {
        project.classList.remove('display-none');
    });
    files.forEach((file) => {
        file.classList.add('display-none');
    });
    document.getElementById('topName').textContent = 'Serhii Krakovskyi';
    document.getElementById('leftS').innerHTML = (`<img
    src="./images/folder.png"
    alt=""
    width="18px"
    style="margin: 3px"
  />
  <span
    class="material-symbols-sharp"
    style="font-size: 14px; color: rgb(109, 109, 109)"
  >
    chevron_right
  </span>
  <p style="font-size: 13px">Serhii Krakovskyi</p>`);
});

const back = document.getElementById('back');
back.addEventListener('click', () => {
    projects.forEach((project) => {
        project.classList.remove('display-none');
    });
    files.forEach((file) => {
        file.classList.add('display-none');
    });
    document.getElementById('topName').textContent = 'Serhii Krakovskyi';
    document.getElementById('leftS').innerHTML = (`<img
    src="./images/folder.png"
    alt=""
    width="18px"
    style="margin: 3px"
  />
  <span
    class="material-symbols-sharp"
    style="font-size: 14px; color: rgb(109, 109, 109)"
  >
    chevron_right
  </span>
  <p style="font-size: 13px">Serhii Krakovskyi</p>`);
});

const minimize = document.querySelector('.minimize');
minimize.addEventListener('click', () => {
    windowMain.classList.add('window-hide');
});
explorer.addEventListener('click', () => {
    windowMain.classList.remove('window-hide');
});

const full = document.querySelector('.full');
full.addEventListener('click', () => {
    windowMain.classList.toggle('window-full');
});

projects.forEach((project, index) => {
    project.addEventListener('click', (e) => {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            if (index === 0) {
                handleHtml('Credit Card');
            } else if (index === 1) {
                handleHtml('Collection App');
            } else if (index === 2) {
                handleHtml('Login Page');
            } else if (index === 3) {
                handleHtml('Simon Game');
            }
            projects.forEach((project) => {
                project.classList.add('display-none');
            });
        } else {
            project.classList.add('active-nob');
            e.stopPropagation();
            document.addEventListener('click', () => {
                project.classList.remove('active-nob');
            });
        }
    });
    const handleHtml = (name) => {
        document.getElementById(`pr${index}`).classList.remove('display-none');
        document.getElementById('topName').textContent = name;
        document.getElementById('leftS').innerHTML += (`<span class="material-symbols-sharp" style="font-size: 14px; color: rgb(109, 109, 109)">chevron_right</span><p class="name-1-l">${name}</p>`);
    }
    project.addEventListener('dblclick', () => {
            if (index === 0) {
                handleHtml('Credit Card');
            } else if (index === 1) {
                handleHtml('Collection App');
            } else if (index === 2) {
                handleHtml('Login Page');
            } else if (index === 3) {
                handleHtml('Simon Game');
            }
            projects.forEach((project) => {
                project.classList.add('display-none');
            });
    });
});

files.forEach((file) => {
    file.addEventListener('click', (e) => {
        file.classList.add('active-nob');
        e.stopPropagation();
        document.addEventListener('click', () => {
            file.classList.remove('active-nob');
        });
    });
});
const min = document.querySelectorAll('.minimize-note');
const file0 = document.getElementById('pr0');
const file1 = document.getElementById('pr1');
const file2 = document.getElementById('pr2');
const file3 = document.getElementById('pr3');

const notepad1 = document.getElementById('notepad1');
const notepad2 = document.getElementById('notepad2');
const notepad3 = document.getElementById('notepad3');
const notepad4 = document.getElementById('notepad4');

const shortcut = document.getElementById('shortcut');
const notepadIcon = document.getElementById('notepad-icon');
const fullNote = document.querySelectorAll('.full-note');
const closeNote = document.querySelectorAll('.close-note');

const showNote = (file, note) => {
    file.addEventListener('dblclick', () => {
        note.classList.remove('display-none');
        windowMain.classList.add('display-none');
        shortcut.classList.add('display-none');
        notepadIcon.classList.remove('display-none');
    });

    file.addEventListener('click', () => {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            note.classList.remove('display-none');
            windowMain.classList.add('display-none');
            shortcut.classList.add('display-none');
            notepadIcon.classList.remove('display-none');
            trashBin.classList.add('display-none');
        }
    });
   
    min.forEach((btn) => {
        btn.addEventListener('click', () => {
            note.classList.add('notepad-hide');
            windowMain.classList.remove('display-none');
            shortcut.classList.remove('display-none');
            trashBin.classList.remove('display-none');
        });
    });
    notepadIcon.addEventListener('click', () => {
        note.classList.remove('notepad-hide');
        windowMain.classList.add('display-none');
        shortcut.classList.add('display-none');
    });
    fullNote.forEach((btn) => {
        btn.addEventListener('click', () => {
            note.classList.toggle('window-full');
        });
    });
    closeNote.forEach((btn) => {
        btn.addEventListener('click', () => {
            note.classList.add('display-none');
            windowMain.classList.remove('display-none');
            shortcut.classList.remove('display-none');
            notepadIcon.classList.add('display-none');
            trashBin.classList.remove('display-none');
        });
    });
}


showNote(file0, notepad1);
showNote(file1, notepad2);
showNote(file2, notepad3);
showNote(file3, notepad4);
