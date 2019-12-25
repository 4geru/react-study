describe('setup', () => {
  class SampleClass {
    constructor(value) { this.values = [value]; }
    addValue(value) { this.values.push(value); }
    getValue() { return this.values; }
    retValue() { this.values = [] }
  }

  describe('each setup', () => {
    const sampleClass = new SampleClass('ok');
    beforeEach(() => {
      sampleClass.addValue('before');
    });

    afterEach(() => {
      sampleClass.addValue('after');
    });

    test('[original] 1st get value', () => {
      expect(sampleClass.getValue()).toEqual(['ok', 'before']);
    });

    test('[original] 2nd get value', () => {
      expect(sampleClass.getValue()).toEqual(['ok', 'before', 'after', 'before']);
    });
  });

  describe('onetime setup', () => {
    const sampleClass = new SampleClass('ok');

    beforeAll(() => {
      sampleClass.addValue('before');
    });

    afterAll(() => {
      sampleClass.addValue('after');
    });

    test('[original] 1st get value', () => {
      expect(sampleClass.getValue()).toEqual(['ok', 'before']);
    });

    test('[original] 2nd get value', () => {
      expect(sampleClass.getValue()).toEqual(['ok', 'before']);
    });
  });

  describe('scoped setup', () => {
    const sampleClass = new SampleClass('ok');

    beforeAll(() => {
      sampleClass.addValue('before');
    });

    test('[original] get value', () => {
      expect(sampleClass.getValue()).toEqual(['ok', 'before']);
    });

    describe('nested scope', () => {
      beforeAll(() => {
        sampleClass.addValue('nexted before');
      });

      test('[original] get nested value', () => {
        expect(sampleClass.getValue()).toEqual(['ok', 'before', 'nexted before']);
      });
    });
  });
});
