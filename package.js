

Package.describe({
  summary: "Twitter API Client"
});

Npm.depends({twit: "1.1.7"});

Package.on_use(function (api) {
  api.add_files("main.js", "server");
});
