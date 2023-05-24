module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
  rootDir: './e2e',
  setupFilesAfterEnv: ['./pactum-setup.ts'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      { publicPath: '.html-report', filename: 'e2e.html' },
    ],
    // ["jest-junit", { outputDirectory: ".xml-report", outputName: `e2e.xml` }],
  ],
};
