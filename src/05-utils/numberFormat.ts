export const formatPopulation = (population: string) => {
  const messageInit = "Population of";
  if (population !== "unknown" && parseInt(population) >= 1000000) {
    return `${messageInit} ${parseInt(population) / 1000000} M`;
  }
  if (population !== "unknown" && parseInt(population) >= 1000) {
    return `${messageInit} ${parseInt(population) / 1000} K`;
  }
  if (population === "unknown") {
    return "Unknown population";
  }
  return population;
};
