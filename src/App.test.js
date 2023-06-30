import React from 'react';

describe('React Step 5 Tests', () => {
  const testForIndexBuildFile = require('../build/index.html');

  it('app contains a build folder', () => {
    expect(testForIndexBuildFile).toBe('index.html');
  });
});
