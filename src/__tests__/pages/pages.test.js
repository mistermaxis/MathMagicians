/* eslint-disable no-unused-vars */
/* eslint-disable import/order */

import Home from '../../pages/home.js';
import Calculator from '../../pages/calculator.js';
import Quote from '../../pages/quote';
import renderer from 'react-test-renderer';

describe("Components match the screenshots", () => {
  it("renders Quote", () => {
    const quote = renderer.create(<Quote />).toJSON();
    expect(quote).toMatchSnapshot();
  });
  it("renders Home", () => {
    const home = renderer.create(<Home />).toJSON();
    expect(home).toMatchSnapshot();
  });
  it("renders Calculator", () => {
    const calc = renderer.create(<Calculator />).toJSON();
    expect(calc).toMatchSnapshot();
  });
});
