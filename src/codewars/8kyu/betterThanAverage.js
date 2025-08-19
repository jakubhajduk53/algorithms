function betterThanAverage(classPoints, yourPoints) {
  return (
    classPoints.reduce((a, c) => a + c, 0) / classPoints.length < yourPoints
  );
}
