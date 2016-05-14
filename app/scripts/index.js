function boot() {
	angular.bootstrap(document, ['app'], {
		strictDi: true
	});
}

document.addEventListener('DOMContentLoaded', boot);

const {ipcRenderer} = require('electron');

ipcRenderer.on('update-message', function(event, method) {
    console.log(method);
    alert(method);
});