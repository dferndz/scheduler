const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|gif|ttf|woff|woff2|svg|ico)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    "\\.(css)$": "jest-transform-stub"
  },
  moduleNameMapper: {
    "\\.(css)$": "jest-transform-stub"
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/', '<rootDir>/node_modules/',
  ],
  moduleFileExtensions: [
    'ts', 'tsx', 'js', 'jsx',
  ],
  collectCoverage: true,
};
