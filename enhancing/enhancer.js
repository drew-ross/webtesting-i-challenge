module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const max = 20;
  if (item.enhancement < max) {
    return {
      ...item,
      enhancement: item.enhancement + 1
    };
  } else {
    return item;
  }
}

function fail(item) {
  if (item.durability < 5) {
    return item;
  } else if (item.enhancement < 15) {
    return { ...item, durability: item.durability - 5 };
  } else if (item.enhancement <= 16) {
    return { ...item, durability: item.durability - 10 };
  } else {
    return { ...item, enhancement: item.enhancement - 1 };
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  if (item.enhancement === 0) {
    return item;
  } else {
    return {
      ...item,
      name: `[+${item.enhancement}] ${item.name}`
    };
  }
}
