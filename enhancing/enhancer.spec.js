const enhancer = require('./enhancer.js');
const { success, fail, repair, get } = require('./enhancer');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

describe('success', () => {

});

describe('fail', () => {

});

describe('repair', () => {
  it('returns an item object with durability: 100', () => {
    const item = {
      name: 'Item A',
      durability: getRandomInt(99),
      enhancement: getRandomInt(20)
    };
    expect(item.durability).not.toBe(100);

    const repairedItem = repair(item);

    expect(repairedItem.durability).toBe(100);
  });
});

describe('get', () => {

});