module.exports = {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  resetMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!**/**/*.d.ts'],
  coveragePathIgnorePatterns: [
    'node_modules',
    'test-config',
    'interfaces',
    'jestGlobalMocks.ts',
    '.module.ts',
    '.mock.ts',
    '<rootDir>/src/theme/*',
    '<rootDir>/src/configs/*',
    '<rootDir>/src/index.tsx',
    '<rootDir>/src/test/*',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/index.tsx',
    '<rootDir>/src/index.tsx',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '\\.js$': '<rootDir>/node_modules/babel-jest',
  },

  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  setupFilesAfterEnv: ['./src/setupTests.ts'],
};
