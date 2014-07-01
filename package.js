Package.describe({
  summary: 'Wrap later.js  api docs at github.com'
});

Npm.depends({
  'later': '1.1.6'
});

Package.on_use(function (api) {
  api.add_files('later.js', 'server');

  api.export('Later', 'server');
});
