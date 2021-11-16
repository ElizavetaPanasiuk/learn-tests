import Posts from './Posts';
import { render, configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({
  adapter: new Adapter()
});

describe('<Posts />', () => {
  let component = shallow(<Posts />);
  let wrapper;

  it('should render include a link', () => {
    wrapper = component.find('.newsList');
    expect(wrapper.length).toBeGreaterThanOrEqual(1);
  });

  it('renders posts', () => {
    expect(toJson(component)).toMatchSnapshot(); // toJSON must be used in new version
  });

  it('renders all nested tags', () => {
    component = render(<Posts />);
    expect(toJson(component)).toMatchSnapshot();
  });
});