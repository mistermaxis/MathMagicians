import operate from '../logic/operate';

describe('Operate tests', () => {
    test('Operate adds two integers', () => {
        const numberOne = 30;
        const numberTwo = 73;

        const result = operate(numberOne, numberTwo, '+');

        expect(result).toBe('103');
    });
    
})