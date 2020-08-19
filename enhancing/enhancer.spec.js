const enhancer = require('./enhancer.js');
const { success, fail, repair, get } = require('./enhancer');

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

describe('success', () => {
  it('returns an item object with enhancement: += 1, with 20 max', () => {
    const itemA = {
      name: 'Item A',
      durability: getRandomInt(100),
      enhancement: 5
    };
    const itemB = {
      name: 'Item B',
      durability: getRandomInt(100),
      enhancement: 20
    };
  
    expect(itemA.enhancement).toBe(5);
    expect(itemB.enhancement).toBe(20);
    
    const enhancedA = success(itemA);
    const enhancedB = success(itemB);

    expect(enhancedA.enhancement).toBe(6);
    expect(enhancedB.enhancement).toBe(20);    
  })
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

    const repairedItem = repair(item);

    expect(repairedItem.durability).toBe(100);
  });
});

describe('get', () => {

});