const capitalize = require('./capitalize')

test('Capitalize string', () =>{
    expect(capitalize('string')).toBe("String")
})