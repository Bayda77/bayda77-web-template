module.exports = {
  roots: ["<rootDir>/bin/test"],
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
};
