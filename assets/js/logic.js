document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body

    const currentMode = localStorage.getItem('mode')

    if (currentMode === 'dark') {
        enableDarkMode();
    } else {
        enableLightMode();
    }

    modeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            enableLightMode();
        } else { enableDarkMode();
        }
    });

    function enableDarkMode() {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark');
    }

    function enableLightMode() {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('mode', 'light');
    }
});