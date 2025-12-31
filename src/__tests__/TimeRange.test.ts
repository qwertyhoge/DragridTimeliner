import { TimeRange } from "@/types/TimeRange";
import { isValidTimeRange } from "@/utils/validateTimeRange";
import { describe, it, expect } from "vitest";

describe("TimeRange", () => {
  describe("Validation of start and end", () => {
    it("should return true if start is less than end", () => {
      const validRange: TimeRange = { start: 0, end: 100, name: "test" };
      expect(isValidTimeRange(validRange)).toBe(true);
    });

    it("should return false if start is greater than end", () => {
      const inverseRange: TimeRange = { start: 100, end: 0, name: "test" };
      expect(isValidTimeRange(inverseRange)).toBe(false);
    });

    it("should return false if start is equal to end", () => {
      const zeroWidthRange: TimeRange = { start: 100, end: 100, name: "test" };
      expect(isValidTimeRange(zeroWidthRange)).toBe(false);
    });

    // NOTE: Combination of this and start < end rule covers negative end value
    it("should return false if start is negative", () => {
      const negativeStartRange: TimeRange = {
        start: -100,
        end: 100,
        name: "test",
      };
      expect(isValidTimeRange(negativeStartRange)).toBe(false);
    });
  });

  describe("Validation of name", () => {
    it("should return true if name is not empty", () => {
      const validNameRange: TimeRange = { start: 0, end: 100, name: "test" };
      expect(isValidTimeRange(validNameRange)).toBe(true);
    });

    it("should allow empty name", () => {
      const emptyNameRange: TimeRange = { start: 0, end: 100, name: "" };
      expect(isValidTimeRange(emptyNameRange)).toBe(true);
    });
  });

  describe("Validation of color", () => {
    it("should allow valid color", () => {
      const validColorRange: TimeRange = {
        start: 0,
        end: 100,
        name: "test",
        color: "#ff0000",
      };
      expect(isValidTimeRange(validColorRange)).toBe(true);
      expect(validColorRange.color).toBe("#ff0000");
    });

    it("should allow color not specified", () => {
      const emptyColorRange: TimeRange = { start: 0, end: 100, name: "test" };
      expect(isValidTimeRange(emptyColorRange)).toBe(true);
      expect(emptyColorRange.color).toBeUndefined();
    });
  });
});
