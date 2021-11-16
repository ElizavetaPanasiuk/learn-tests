import { configure, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Title from './Title';

configure({
  adapter: new Adapter()
});

describe('<Title />', () => {
  it('should return component with piped props', () => {
    const component = shallow(<Title />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should return component with default props', () => {
    const component = shallow(<Title title="test title" />);
    expect(toJson(component)).toMatchSnapshot();
  });
});