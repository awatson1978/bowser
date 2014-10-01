Package.describe({
  name: "awatson1978:bowser",
  summary: "A browser detector",
  version: "0.7.1_1",
  git: "https://github.com/awatson1978/bowser"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.addFiles("build/bowser.js", "client");
  api.export("BrowserObserver", "client");
});

