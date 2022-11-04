const str_convert = require('./Exercise17_6_1');

describe("test reverse string function", () => {
    it("result reverse string", () => expect(str_convert('Проверка')).toBe('акреворП'));

});