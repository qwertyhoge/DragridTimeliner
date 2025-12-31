
import { coordinateToTime, timeToCoordinate } from "@/utils/timeCoordinateMapping";
import { describe, it, expect } from "vitest";

describe("timeCoordinateMapping", () => {
  describe("timeToCoordinate", () => {
    it("should map time 0 to the left edge of the timeline", () => {
      expect(timeToCoordinate(0, 0, 100, 1000)).toBe(0);
    });
    it("should map time 50 to the middle of the timeline when min=0 and max=100", () => {
      expect(timeToCoordinate(50, 0, 100, 1000)).toBe(500);
    });
    it("should map time 100 to the right edge of the timeline", () => {
      expect(timeToCoordinate(100, 0, 100, 1000)).toBe(1000);
    });
    it("should map time 15 to the middle of the timeline when min=10 and max=20", () => {
      expect(timeToCoordinate(15, 10, 20, 1000)).toBe(500);
    });
    it("should throw an error if time is less than min", () => {
      expect(() => timeToCoordinate(-10, 0, 100, 1000)).toThrow(RangeError);
    });
    it("should throw an error if time is greater than max", () => {
      expect(() => timeToCoordinate(110, 0, 100, 1000)).toThrow(RangeError);
    });
  });
  describe("coordinateToTime", () => {
    it("should map the left edge of the timeline to time 0", () => {
      expect(coordinateToTime(0, 0, 100, 1000)).toBe(0);
    });
    it("should map the middle of the timeline to time 50 when min=0 and max=100", () => {
      expect(coordinateToTime(500, 0, 100, 1000)).toBe(50);
    });
    it("should map the right edge of the timeline to time 100 when min=0 and max=100", () => {
      expect(coordinateToTime(1000, 0, 100, 1000)).toBe(100);
    });
    it("should map coordinates less than 0 to time 0", () => {
      expect(coordinateToTime(-10, 0, 100, 1000)).toBe(0);
    });
    it("should map coordinates greater than the width of the timeline to time max", () => {
      expect(coordinateToTime(1100, 0, 100, 1000)).toBe(100);
    });
  });
});