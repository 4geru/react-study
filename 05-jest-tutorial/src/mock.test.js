// reference: https://jestjs.io/docs/ja/mock-functions

describe('mock', () => {
  const forEach = (items, callback) => {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }

  const mockCallback = jest.fn(x => 42 + x);
  forEach([0, 1], mockCallback);
  test('example', () => {
    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);

    // === original ===
    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[1].value).toBe(43);
  });
});

describe('.mock property', () => {
  describe('function', () => {
    test('function', () => {
      const someMockFunction = jest.fn( (x, y) => { return x * y });
      someMockFunction(1, 2);
      // function はちょうど 1 回だけ呼ばれた
      expect(someMockFunction.mock.calls.length).toBe(1);
      // 関数の 1 回目の呼び出しの 1 番目の引数は 'first arg' だった
      expect(someMockFunction.mock.calls[0][0]).toBe(1);
      // 関数の 1 回目の呼び出しの 2 番目の引数は 'second arg' だった
      expect(someMockFunction.mock.calls[0][1]).toBe(2);
      // 関数の 1 回目の呼び出しの返り値は 'return value' だった
      expect(someMockFunction.mock.results[0].value).toBe(2);
      // original
      someMockFunction(3, 4);
      expect(someMockFunction.mock.calls.length).toBe(2);
      expect(someMockFunction.mock.calls[1][0]).toBe(3);
      expect(someMockFunction.mock.calls[1][1]).toBe(4);
      expect(someMockFunction.mock.results[1].value).toBe(12);
    });

    test('instances', () => {
      const someMockFunction = jest.fn(function Person(name){ this.name = name; });
      new someMockFunction('4geru');
      // この関数はちょうど 2 回インスタンス化された
      expect(someMockFunction.mock.instances.length).toBe(1);
      // この関数の 1 回目のインスタンス化で返されたインスタンスは、
      // `name` プロパティを持っており、その値は 'test' であった
      expect(someMockFunction.mock.instances[0].name).toEqual('4geru');

    })
  });
});


describe('mock return value', () => {
  const myMock = jest.fn();

  beforeEach(() => {
    myMock
    .mockReturnValueOnce(10)
    .mockReturnValueOnce('x')
    .mockReturnValue(true);
  });

  test('example', () => {
    // The mock function is called twice
    expect(myMock()).toBe(10);
    expect(myMock()).toBe('x');
    expect(myMock()).toBe(true);
    expect(myMock()).toBe(true);
  });
});
