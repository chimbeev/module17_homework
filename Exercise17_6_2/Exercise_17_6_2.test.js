const getMonth = require('./Exercise17_6_2');

describe("test getMonth function ", () => {
    it("result of test getMonth 8 function", () => expect(getMonth(8)).toBe('август'));
    it("result of test getMonth 3 function", () => expect(getMonth(3)).toBe('март'));
});



const createAdder = require('./createAdder');

describe("test createAdder function", () => {
    it("result of test createAdder function", () => expect(createAdder(8)).toBe(addA));
    it("result of test aaA 8 + 3 function", () => expect(addA(3)).toBe(11));
    it("result of test aaA 8 + 6 function", () => expect(addA(6)).toBe(14));
});
