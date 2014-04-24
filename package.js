Package.describe({
    summary: "Meteorite package that provides browser detection via bowser.js."
});

Package.on_use(function (api) {

    api.export('BrowserObserver');

    api.use('standard-app-packages');
    api.add_files('bowser.js', ["client"]);
});
