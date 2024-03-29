document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('mode-toggle'); //creating an element Id of mode-toggle, this will control the light and dark mode
    const body = document.body

    const currentMode = localStorage.getItem('mode') //this is setting what "mode" (light or dark) will get display in local stoarge

    if (currentMode === 'dark') { //this tells the mode-toggle button that if the current mode is dark, then turn it light
        enableDarkMode();
    } else {
        enableLightMode();
    }

    modeToggle.addEventListener('click', function() {  //this is the click function for the mode-toggle button that allows you to switch it from light to dark
        if (body.classList.contains('dark-mode')) {
            enableLightMode();
        } else { enableDarkMode();
        }
    });

    function enableDarkMode() { //this is the function creating darkMode
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark');
    }

    function enableLightMode() { //this is the function creating my light mode
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('mode', 'light');
    }
});