const globalConditions: Record<number, string> = {
  2: "thunderstorm",
  3: "drizzle",
  5: "rain",
  6: "snow",
  7: "atmosphere",
  8: "clouds"
};

export default (conditionId: number): string => {
  if (conditionId === 800) return "clear";

  const hundred: number = Math.trunc(conditionId / 100);

  return globalConditions[hundred];
};
