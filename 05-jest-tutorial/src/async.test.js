describe('Callback', () => {
  const fetchData = (callback) => {
    setTimeout(() => {
      return callback('peanut butter');
    }, 200);
  };

  test('the data is peanut butter', done => {
    const callback = (data) => {
      expect(data).toBe('peanut butter');
      done();
    }
    fetchData(callback);
  });

  // todo write failed case
});

describe('Promise', () => {
  const fetchData = isSuccess => {
    return new Promise((resolve, reject) => {
      const err = new Error('error!');
      const data = 'peanut butter';
      isSuccess ? resolve(data) : reject(err);
    });
  };

  test('the data is peanut butter', () => {
    return fetchData(true).then(data => { expect(data).toBe('peanut butter'); });
  });

  test('[original] the fetch fails with an error', () => {
    return fetchData(false).catch(error => { expect(error).toEqual(new Error('error!')); });
  });

  // reference: https://qiita.com/ef81sp/items/178ed17982b13535ad59
  test('the data is peanut butter', () => {
    return expect(fetchData(true)).resolves.toBe('peanut butter');
  });

  test('the fetch fails with an error', () => {
    return expect(fetchData(false)).rejects.toThrow('error');
  });
});

