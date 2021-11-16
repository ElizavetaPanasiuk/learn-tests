import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from "enzyme-to-json";

import Counter from './Counter';

configure({
  adapter: new Adapter()
});

describe('Count component', () => {
  let component = shallow(<Counter />);

  it('should render counter component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  describe('Counter handlers', () => {
    it('should changeout value to plus one', () => {
      const btn = component.find('.plusOneBtn');
      btn.simulate('click');
      expect(toJson(component)).toMatchSnapshot();
      expect(component.state().count).toBe(1);
    })
  })
});
