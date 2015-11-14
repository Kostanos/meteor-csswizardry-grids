Package.describe({
  name: 'kostanos:meteor-csswizardry-grids',
  version: '0.0.1',
  summary: 'Simple installs https://github.com/csswizardry/csswizardry-grids to your project',
  git: 'https://github.com/Kostanos/meteor-csswizardry-grids.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('fourseven:scss@0.9.6');
  api.addFiles(['csswizardry-grids/csswizardry-grids.scss'], 'client');
});

Package.onTest(function(api) {
});
