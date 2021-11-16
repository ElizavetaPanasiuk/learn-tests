import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Input from './Input';

configure({
  adapter: new Adapter()
});
describe('Test input component', () => {
  it('should call onChange method', () => {
    const mockCallBack = jest.fn();
    const component = shallow(<Input onChange={mockCallBack} />);
    expect(mockCallBack.mock.calls.length).toEqual(0);
    component.find('input').simulate('change');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});