class Item {
  constructor(name, daysToSell, quality) {
    this.name = name;
    this.daysToSell = daysToSell;
    this.quality = quality;
  }
}

const decreaseDaysToSell = (item) => {
  return item.daysToSell--;
};

const updateUnexpiredGeneralItems = (generalItem) => {
  generalItem.quality -= 1;
};

const updateExpiredGeneralItems = (generalItem) => {
  generalItem.quality < 2
    ? (generalItem.quality = 0)
    : (generalItem.quality -= 2);
};

const updateAgedBrie = (agedBrie) => {
  if (agedBrie.quality < 50) {
    agedBrie.quality++;
  }
  decreaseDaysToSell(agedBrie);
  return agedBrie;
};

const updateGeneralItems = (generalItem) => {
  if (generalItem.daysToSell > 0) {
    updateUnexpiredGeneralItems(generalItem);
  } else {
    updateExpiredGeneralItems(generalItem);
  }
  decreaseDaysToSell(generalItem);
  return generalItem;
};

const updateBackstagePasses = (backstagePasses) => {
  backstagePasses.daysToSell < 1
    ? updateExpiredBackstagePasses(backstagePasses)
    : updateUnexpiredBackstagePasses(backstagePasses);
  decreaseDaysToSell(backstagePasses);
  return backstagePasses;
};

const updateUnexpiredBackstagePasses = (backstagePasses) => {
  backstagePasses.daysToSell < 6
    ? (backstagePasses.quality += 3)
    : backstagePasses.daysToSell < 11
    ? (backstagePasses.quality += 2)
    : backstagePasses.quality++;
};

const updateExpiredBackstagePasses = (backstagePasses) => {
  backstagePasses.quality = 0;
};

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    const itemsUpdated = this.items.map((item) => {
      return item.name == 'Aged Brie'
        ? updateAgedBrie(item)
        : item.name == 'Backstage passes'
        ? updateBackstagePasses(item)
        : item.name != 'Sulfuras'
        ? updateGeneralItems(item)
        : item;
    });
    return itemsUpdated;
  }
}

module.exports = {
  Item,
  Shop,
};
