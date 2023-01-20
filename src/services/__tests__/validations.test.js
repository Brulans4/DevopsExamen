const { isEmpty } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

// TODO: Create tests suite for validation function

const { checkGamerTag } = require('./services/validations');

describe("GamerTag", () => {
    test("Less than 8 charachters", () => {
        expect(checkGamerTag("1@")).toBe(false);
    });

    test("One special characyer", () => {
        expect(checkGamerTag("123456789")).toBe(false);
    });

    test("One number", () => {
        expect(checkGamerTag("azertyu@i")).toBe(false);
    });

    test("Valide tag", () => {
        expect(checkGamerTag("@z3Rtyu1Op")).toBe(true);
    });
});