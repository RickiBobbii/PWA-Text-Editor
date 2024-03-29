const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    
    //Clear prompt
    window.deferredPrompt = null;
});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    //Clear prompt
    window.deferredPrompt = null;

    console.log('App Installed!');
});


