import operate from '../logic/operate';

describe('Operate tests', () => {
  it('Operate adds two integers', () => {
    const numberOne = 30;
    const numberTwo = 73;

    const result = operate(numberOne, numberTwo, '+');

    expect(result).toBe('103');
  });

  it('substructs from an integer', () => {
    const numberOne = 225;
    const numberTwo = 100;

    const result = operate(numberOne, numberTwo, '-');

    expect(result).toBe('125');
  });

  it('multiplies an integer', () => {
    const numberOne = 225;
    const numberTwo = 2;

    const result = operate(numberOne, numberTwo, 'x');

    expect(result).toBe('450');
  });
});