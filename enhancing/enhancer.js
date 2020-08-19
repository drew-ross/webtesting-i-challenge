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
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
