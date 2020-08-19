const enhancer = require('./enhancer.js');
const { success, fail, repair, get } = require('./enhancer');

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

describe('success', () => {
  it('returns an item object with enhancement: += 1, with 20 max, without changing durability', () => {
    const itemA = {
      name: 'Item A',
      durability: 44,
      enhancement: 5
    };
    const itemB = {
      name: 'Item B',
      durability: 55,
      enhancement: 20
    };

    const enhancedA = success(itemA);
    const enhancedB = success(itemB);

    expect(enhancedA.enhancement).toBe(6);
    expect(enhancedB.enhancement).toBe(20);
    expect(enhancedA.durability).toBe(itemA.durability);
    expect(enhancedB.durability).toBe(itemB.durability);
  });
});

describe('fail', () => {
  it('returns an item object with durability: -= 5 if enhancement < 15', () => {
    const itemA = {
      name: 'Item A',
      durability: 50,
      enhancement: 5
    };
    const itemB = {
      name: 'Item B',
      durability: 88,
      enhancement: 14
    };

    const failedItemA = fail(itemA);
    const failedItemB = fail(itemB);

    expect(failedItemA.durability).toBe(45);
    expect(failedItemA.enhancement).toBe(5);
    expect(failedItemB.durability).toBe(83);
    expect(failedItemB.enhancement).toBe(14);
  });

  it('returns an item object with durability: -= 10 if enhancement is 15 or 16', () => {
    const itemA = {
      name: 'Item A',
      durability: 50,
      enhancement: 15
    };
    const itemB = {
      name: 'Item B',
      durability: 88,
      enhancement: 16
    };

    const failedItemA = fail(itemA);
    const failedItemB = fail(itemB);

    expect(failedItemA.durability).toBe(40);
    expect(failedItemA.enhancement).toBe(15);
    expect(failedItemB.durability).toBe(78);
    expect(failedItemB.enhancement).toBe(16);
  });

  it('returns an item object with enhancement: -= 1 if enhancement > 16', () => {
    const itemA = {
      name: 'Item A',
      durability: 50,
      enhancement: 17
    };
    const itemB = {
      name: 'Item B',
      durability: 88,
      enhancement: 19
    };

    const failedItemA = fail(itemA);
    const failedItemB = fail(itemB);

    expect(failedItemA.durability).toBe(50);
    expect(failedItemA.enhancement).toBe(16);
    expect(failedItemB.durability).toBe(88);
    expect(failedItemB.enhancement).toBe(18);
  });

  it('returns the item untouched if durability would be < 0', () => {
    const itemA = {
      name: 'Item A',
      durability: 2,
      enhancement: 3
    };

    const failedItemA = fail(itemA);

    expect(failedItemA.durability).toBe(2);
    expect(failedItemA.enhancement).toBe(3);
  });
});

describe('repair', () => {
  it('returns an item object with durability: 100, without changing enhancement', () => {
    const itemA = {
      name: 'Item A',
      durability: getRandomInt(99),
      enhancement: getRandomInt(20)
    };
    const itemB = {
      name: 'Item B',
      durability: 17,
      enhancement: getRandomInt(20)
    };

    const repairedItemA = repair(itemA);
    const repairedItemB = repair(itemB);

    expect(repairedItemA.durability).toBe(100);
    expect(repairedItemB.durability).toBe(100);
    expect(repairedItemA.enhancement).toBe(itemA.enhancement);
    expect(repairedItemB.enhancement).toBe(itemB.enhancement);
  });
});

describe('get', () => {
  it('returns an item with the enhancement level prefixed to the item name', () => {
    const itemA = {
      name: 'Item A',
      durability: 66,
      enhancement: 17
    };
    const itemB = {
      name: 'Item B',
      durability: 17,
      enhancement: 5
    };

    const prefixedA = get(itemA);
    const prefixedB = get(itemB);

    expect(prefixedA.name).toBe('[+17] Item A');
    expect(prefixedB.name).toBe('[+5] Item B');
  });
  it('returns an item with no change to the name if enhancement is 0', () => {
    const itemA = {
      name: 'Item A',
      durability: 66,
      enhancement: 0
    };

    const prefixedA = get(itemA);

    expect(prefixedA.name).toBe('Item A');
  });
});