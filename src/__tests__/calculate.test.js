import calculate from "../logic/calculate";

describe("Calculate operations", () => {
  it("Add two integers", () => {
    const testData = { total: 5, next: 7, operation: '+' };

    const testResult = calculate(testData, '=');

    expect(testResult.total).toBe('12');
  });

  it("Substract two integers", () => {
    const testData = { total: 5, next: 7, operation: "-" };

    const testResult = calculate(testData, "=");

    expect(testResult.total).toBe("-2");
  });
});
