Package.describe({
    summary: "Meteorite package that provides browser detection via bowser.js.",
    version: "1.0.0"
});

Package.on_use(function (api) {

    api.export('BrowserObserver');

    api.use('standard-app-packages');
    api.add_files('bowser.js', ["client"]);
});
