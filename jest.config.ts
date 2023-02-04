import { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
    moduleNameMapper: {
        "^~(.*)$": "<rootDir>/src/$1",
    },
    testMatch: ["**/?(*.)+(spec|test).ts"],
    transform: {
        "^.+\\.ts?$": ["ts-jest", { isolatedModules: true }],
    },
};

export default config;
