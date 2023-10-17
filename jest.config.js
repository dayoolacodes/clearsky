module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/$1",
    "@/app/(.*)$": "<rootDir>/$1",
  },
  transformIgnorePatterns: [],
};
