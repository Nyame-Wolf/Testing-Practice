const stringLength = require('./stringLength')

test('length of string to equal 6', () => {
    expect(stringLength("string")).toBe(6);
});

test('length of string to equal 0', () => {
    expect(stringLength("")).toBe("string empty");
});

test('length of string to equal more than 10', () => {
    expect(stringLength("newstringtest")).toBe("string is longer than 10 characters");
});