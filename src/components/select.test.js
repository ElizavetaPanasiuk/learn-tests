import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Select from './Select';

const props = {
  options: [
    { value: "text_1", label: "Test 1" },
    { value: "text_2", label: "Test 2" },
  ],
  value: 0,
  handleChange: () => {},
};

configure({
  adapter: new Adapter()
});

describe('Select component', () => {
  describe('Has props', () => {
    const component = shallow(<Select {...props} />);
    it('should render select element', () => {
      const select = component.find('select');
      expect(select).toHaveLength(1);
    });
    it('should render 2 options', () => {
      const options = component.find('option');
      expect(options.length).toBe(2);
    });
    it('select should have default value 0', () => {
      const selectDefaultValue = component.find('select').prop('defaultValue');
      expect(selectDefaultValue).toBe(0);
    });
  });

  describe('Has no props', () => {
    const component = shallow(<Select />);
    it('should render placeholder', () => {
      const placeholder = component.find('.placeholder');
      expect(placeholder).toHaveLength(1);
    });
  });
});