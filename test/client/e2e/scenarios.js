'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('Quantum Ventura app', function() {

  browser.get('index.html');

  it('should automatically redirect to /home.template.html when user is not authenticated', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/home.template.html");
  });

});