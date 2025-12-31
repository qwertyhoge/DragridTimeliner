function timeToCoordinate(time: number, min: number, max: number, width: number): number {
  if (time < min) {
    throw new RangeError('Time is less than min');
  }
  if (time > max) {
    throw new RangeError('Time is greater than max');
  }
  return (width * (time - min)) / (max - min);
}

function coordinateToTime(x: number, min: number, max: number, width: number): number {
  // Clamp x if it is out of range
  if (x < 0) {
    return min;
  }
  if (x > width) {
    return max;
  }

  return min + (x / width) * (max - min);
}

export { timeToCoordinate, coordinateToTime };