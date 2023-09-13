import healthBar from '../app';

// test('health status', () => {
//   const healthStatus = healthBar({ name: 'Маг', health: 90 });

//   expect(healthStatus).toBe('healthy');
// });

const heroes = [
  [{ name: 'мечник', health: 10 }, 'critical'],
  [{ name: 'маг', health: 100 }, 'healthy'],
  [{ name: 'лучник', health: 40 }, 'wounded'],
  [{ name: 'ремесленник', health: -1 }, 'Something is wrong'],
];

const handler = test.each(heroes);

handler('testing healthBar function with %s', (hero, expectedhStatus) => {
  const healthStatus = healthBar(hero);
  expect(healthStatus).toBe(expectedhStatus);
});
