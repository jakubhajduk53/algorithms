//https://www.codewars.com/kata/5648b12ce68d9daa6b000099

function number(busStops) {
  return busStops.reduce((people, [enter, leave]) => people + enter - leave, 0);
}
