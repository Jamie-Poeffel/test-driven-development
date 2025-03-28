import { formatDuration } from "./duration";

describe("formatDuration", () => {
    test("formatDuration of 33 tobe 33s", () => {
        expect(formatDuration(33)).toBe("33s");
    });
    test("formatDuration of 123 tobe 2m3s", () => {
        expect(formatDuration(123)).toBe("2m3s");
    });
    test("formatDuration of 500 tobe 8m20s", () => {
        expect(formatDuration(500)).toBe("8m20s");
    });
    test("formatDuration of 3600 tobe 1h", () => {
        expect(formatDuration(3600)).toBe("1h");
    });
    test("formatDuration of 3999 tobe 1h6m30s", () => {
        expect(formatDuration(3999)).toBe("1h6m30s");
    });
    test("formatDuration of 0 tobe 0s", () => {
        expect(formatDuration(0)).toBe("0s");
    });
    test("formatDuration of -10 toThrow Error", () => {
        expect(() => formatDuration(-10)).toThrow("No Negative time possible");
    })
})