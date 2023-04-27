const { Shop, Item } = require('../src/gilded_rose');

describe('Gilded Rose', function () {

  it('Aged Brie days should decrease by 1', function () {
    const gildedRose = new Shop([new Item('Aged Brie', 0, 47)]);
    let items = gildedRose.updateQuality();

    expect(items[0].daysToSell).toBe(-1);
  });

  it('Aged Brie should increase quality even after days < 0', function () {
    const gildedRose = new Shop([new Item('Aged Brie', 0, 47)]);
    let items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(48);
  });


  it('Aged Brie should increase quality', function () {
    const gildedRose = new Shop([new Item('Aged Brie', 5, 48)]);
    let items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(49);
  });

  it('Aged Brie quality should not more than 50', function () {
    const gildedRose = new Shop([new Item('Aged Brie', 5, 50)]);
    let items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
  });

  it('Sulfuras days should not change', function () {
    const gildedRose = new Shop([new Item('Sulfuras', 5, 80)]);
    let items = gildedRose.updateQuality();
    expect(items[0].daysToSell).toBe(5);
  });

  it('Sulfuras quality should not change', function () {
    const gildedRose = new Shop([new Item('Sulfuras', 5, 80)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });

  it('Backstage passes days should decrease', function () {
    const gildedRose = new Shop([new Item('Backstage passes', 0, 30)]);
    let items = gildedRose.updateQuality();
    expect(items[0].daysToSell).toBe(-1);
  });

  it('Backstage passes quality 0 after concert', function () {
    const gildedRose = new Shop([new Item('Backstage passes', 0, 30)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it('Backstage passes +3 quality (days 5 or less)', function () {
    const gildedRose = new Shop([new Item('Backstage passes', 4, 30)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(33);
  });

  it('Backstage passes +2 quality (days 10 or less)', function () {
    const gildedRose = new Shop([new Item('Backstage passes', 9, 30)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(32);
  });

  it('Backstage passes +1 quality (days > 10)', function () {
    const gildedRose = new Shop([new Item('Backstage passes', 11, 30)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(31);
  });

  it('Regular items days should decrease', function () {
    const gildedRose = new Shop([new Item('Spaghetti', 0, 30)]);
    let items = gildedRose.updateQuality();
    expect(items[0].daysToSell).toBe(-1);
  });

  it('Regular items quality should decrease by 1', function () {
    const gildedRose = new Shop([new Item('Spaghetti', 11, 30)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(29);
  });

  it('Regular items quality decrease by 2', function () {
    const gildedRose = new Shop([new Item('Spaghetti', 0, 30)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(28);
  });

  it('Regular items quality never be negative', function () {
    const gildedRose = new Shop([new Item('Spaghetti', 0, 1)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});
