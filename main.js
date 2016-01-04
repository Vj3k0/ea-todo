const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const updater = require('electron-updater');

// Keep reference of main window because of GC
var mainWindow = null;

// Quit when all windows are closed
app.on('window-all-closed', function() {
	app.quit();
});

// When application is ready, create application window
app.on('ready', function() {

	// Updater has checked dependencies and plugins and is ready to start
	updater.on('ready', function() {

		// Create main window
		// Other options available at:
		// http://electron.atom.io/docs/latest/api/browser-window/#new-browserwindow-options
		mainWindow = new BrowserWindow({
			name: "ea-todo",
			width: 400,
			height: 600,
			toolbar: false
		});

		// Target HTML file which will be opened in window
		mainWindow.loadURL('file://' + __dirname + "/app/index.html");

		// Uncomment to use Chrome developer tools
		// mainWindow.webContents.openDevTools({detach:true});

		// Cleanup when window is closed
		mainWindow.on('closed', function() {
			mainWindow = null;
		});

	});

	// This event is fired if your app is not currently valid at startup.
    // The app must be exited immediately and the auto-updater will be run instead.
    // After the auto-update runs the app will be re-run.
	updater.on('update-required', function() {

		app.quit();

	});

	// This event is fired after new versions of plugins have been downloaded and
    // before the app and dependencies are downloaded. Plugins are installed side-by-side
    // so they can be downloaded while the app is running.

    // After the app is restarted it will watch for updates and fire the updated required
    // event when newer versions are available.
	updater.on('update-available', function() {

		if(mainWindow) {
            // Send a message to your view(s)
            mainWindow.webContents.send('update-available');
        }

	});

	// Instead of launching your window right away, start the updater
    // to check to see if the app is valid or not.
    // An app is invalid if any of its dependencies or plugins are missing.
    // In this case the updater will begin a 'full' update. Once updated
    // your app will be re-launched.
	updater.start();

});