function boot() {
	angular.bootstrap(document, ['app'], {
		strictDi: true
	});
}

document.addEventListener('DOMContentLoaded', boot);