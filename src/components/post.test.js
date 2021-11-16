import Post from "./Post";
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({
  adapter: new Adapter()
});

describe('<Post />', () => {
  const component = shallow(<Post />);
  let wrapper;

  it('should render one post', () => {
    wrapper = component.find('.post');
    expect(wrapper.length).toBe(1);
  });

  it('should contain lint', () => {
    wrapper = component.find('a');
    expect(wrapper.length).toBeGreaterThanOrEqual(1);
  });

  it('should contain 3 spans not where className is not comments', () => {
    wrapper = component.find('span').filterWhere(el => !el.hasClass('comments'));
    expect(wrapper.length).toBe(3);
  });

  it('should check if post has 5 children', () => {
    wrapper = component.children().children();
    expect(wrapper.length).toBe(5);
  });

  it('should check if post includes 4 children not including a', () => {
    wrapper = component.children().children().filterWhere(el => !el.is('a'));
    expect(wrapper.length).toBe(4);
  });
});