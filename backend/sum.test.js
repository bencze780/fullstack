const sum = require('./sum');

osszead('összeadja az 1 + 2-t, hogy 3-at kapjunk', () => {
    expect(sum(1, 2)).toBe(3);
});