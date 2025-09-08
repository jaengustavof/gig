/** @type {import('jest').Config} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "\\.(css|scss|sass)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|svg|webp|avif)$": "<rootDir>/test/__mocks__/fileMock.js",
    },
    globals: {
        "ts-jest": {
            tsconfig: { jsx: "react-jsx" },
        },
    },
    testMatch: ["<rootDir>/src/**/*.test.(ts|tsx)"],
};
