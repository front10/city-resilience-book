module.exports = {
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        "src/app/**/*.js"
      ],
    setupTestFrameworkScriptFile: "<rootDir>/jest/setup.js",
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
        "^(?!.*\\.(js|jsx|json)$)": "<rootDir>/jest/fileTransform.js"
    },
    coverageReporters: ["json", "text", "html"],
  };