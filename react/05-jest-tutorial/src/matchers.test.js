// reference: https://jestjs.io/docs/ja/using-matchers

// ==== object assignment
describe('Object', () => {
  test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

  test('[original] object assignment', () => {
    const data = ['mew'];
    data.push('test')
    expect(data).toEqual(['mew', 'test']);
  });
});

// ==== not method
describe('Not Method', () => {
  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  test('[original] adding positive numbers is not zero', () => {
    const a = 'text';
    expect(a).not.toBe(undefined);
  });
});


// ==== boolean
describe('Boolean', () => {
  test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  test('[original] undefined', () => {
    const z = undefined;
    expect(z).not.toBeNull();
    expect(z).not.toBeDefined();
    expect(z).toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
});

// ==== number
describe('Number', () => {
  test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);         このように書くと、丸め込み誤差が原因で期待通りに動作しない
    expect(value).toBeCloseTo(0.3); // これならば正しく動く
  });

  test('[original] devide floating point numbers', () => {
    const value = 10 / 4;
    expect(value).toBeGreaterThan(2);
    expect(value).toBeGreaterThanOrEqual(2.4);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(2.6);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(2.5);
    expect(value).toEqual(2.5);
  });
});

// ==== string
describe('String', () => {
  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });

  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });

  test('[original] include uppercase', () => {
    expect('ChriStoph').toMatch(/stop/i);
  });

  test('[original] include number', () => {
    expect('html2slim').toMatch(/[1-9]/);
  });
});

// ==== array
describe('Array', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ];

  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
  });

  test('[original] the shopping list dosenot has sushi on it', () => {
    expect(shoppingList).not.toContain('sushi');
    expect(new Set(shoppingList)).not.toContain('sushi');
  });

  test('[original] the shopping list check size', () => {
    expect(shoppingList.length).toBe(5);
    expect(shoppingList.length).toEqual(5);
    expect(new Set(shoppingList).size).toBe(5);
    expect(new Set(shoppingList).size).toEqual(5);
  });
  });

// ==== exception
describe('Exception', () => {
  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
  }

  test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
  });

  test('[original] compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow(/jdk/i);
  });
});