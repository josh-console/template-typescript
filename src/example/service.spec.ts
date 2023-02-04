import { sum } from "~example";

describe("Example service", () => {
    it("Sums any provided numbers", () => {
        expect(sum(1, 2, 3)).toBe(6);
        expect(sum()).toBe(0);
    });
    it("Sums negative numbers", () => {
        expect(sum(1, 2, -1, -2)).toBe(0);
        expect(sum(-1, -2, -3)).toBe(-6);
    });
});
