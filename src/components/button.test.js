import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Button from './Button';

configure({
  adapter: new Adapter()
});

describe('Button component', () => {
  it('should call onClick method', () => {
    const mockCallBack = jest.fn();
    const component = shallow(<Button onClick={mockCallBack} />);
    expect(mockCallBack.mock.calls.length).toEqual(0);
    component.find('.btn').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});