function boot() {
	angular.bootstrap(document, ['app'], {
		strictDi: true
	});
}

document.addEventListener('DOMContentLoaded', boot);

const electron = require('electron');
const ipcRenderer = electron.ipcRenderer;

ipcRenderer.on('update-message', function(event, method) {
    console.log(method);
    alert(method);
});