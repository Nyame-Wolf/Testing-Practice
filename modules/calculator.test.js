const Calculator = require('./calculator')

describe('Calculator Addition test', () =>{
    test('adding 2 + 4 should return 6', () =>{
        expect(Calculator.add(2, 4)).toBe(6);
    });

     test('adding 1 + 0 should return 1', () =>{
        expect(Calculator.add(1,0 )).toBe(1);
    });

     test('adding 10 + 4 should return 14', () =>{
        expect(Calculator.add(10, 4)).toBe(14);
    });
})

describe('Calculator Subtraction test', () =>{
    test('subtracting 5 - 4 should return 1', () =>{
        expect(Calculator.subtract(5, 4)).toBe(1);
    });

     test('subtracting -2 - 4 should return 2', () =>{
        expect(Calculator.subtract(-2,-4 )).toBe(2);
    });

     test('subtracting 29 - 10  should return 19', () =>{
        expect(Calculator.subtract(29, 10)).toBe(19);
    });
})

describe('Calculator Multiplication test', () =>{
    test('multuplying 5 * 4 should return 20', () =>{
        expect(Calculator.multiply(5, 4)).toBe(20);
    });

     test('multuplying -2 - 4 should return 2', () =>{
        expect(Calculator.multiply(-2,-4 )).toBe(8);
    });

     test('multuplying 29 - 10  should return 19', () =>{
        expect(Calculator.multiply(29, 10)).toBe(290);
    });
})

describe('Calculator Division test', () =>{
    test('Dividing 16 - 4 should return 4', () =>{
        expect(Calculator.divide(16, 4)).toBe(4);
    });

     test('Dividing -6 -2  should return 3', () =>{
        expect(Calculator.divide(-6,-2 )).toBe(3);
    });

     test('Dividing 45 - 9  should return 5', () =>{
        expect(Calculator.divide(45, 9)).toBe(5);
    });
})
