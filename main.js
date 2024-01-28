const shortcuts = document.querySelectorAll('.shortcut');
const explorer = document.querySelector('.explorer');
const projects = document.querySelectorAll('.folder');
const files = document.querySelectorAll('.file');
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
    if (windowMain.classList.contains('window-hide')) {
        windowMain.classList.remove('window-hide');
    } else {
        windowMain.classList.remove('display-none');
        explorer.classList.add('explorer-active');
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
        project.classList.add('active-nob');
        e.stopPropagation();
        document.addEventListener('click', () => {
            project.classList.remove('active-nob');
            document.removeEventListener();
        });
    });
    const handleHtml = (name) => {
        document.getElementById(`pr${index}`).classList.remove('display-none');
        document.getElementById('topName').textContent = name;
        document.getElementById('leftS').innerHTML += (`<span class="material-symbols-sharp" style="font-size: 14px; color: rgb(109, 109, 109)">chevron_right</span><p style="font-size: 13px">${name}</p>`);
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
            document.removeEventListener();
        });
    });
});

const noteHtml = () => {
    
}

const file0 = document.getElementById('pr0');
const file1 = document.getElementById('pr1');
const file2 = document.getElementById('pr2');
const file3 = document.getElementById('pr3');
file0.addEventListener('dblclick', () => {
        
});