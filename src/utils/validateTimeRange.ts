import { TimeRange } from "@/types/TimeRange";

function isValidTimeRange(timeRange: TimeRange): boolean {
  if (timeRange.start >= timeRange.end) {
    return false;
  }
  if (timeRange.start < 0) {
    return false;
  }

  return true;
}

export { isValidTimeRange };