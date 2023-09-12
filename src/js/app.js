// TODO: write your code here
export default function healthBar(pers) {
  if (pers.health > 50) {
    return 'healthy';
  }
  if (pers.health >= 15) {
    return 'wounded';
  }
  if (pers.health >= 0) {
    return 'critical';
  }
  return 'Something is wrong';
}
