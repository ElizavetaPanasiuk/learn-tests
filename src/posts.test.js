import Posts from './Posts';
import { render, configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({
  adapter: new Adapter()
});

describe('<Posts />', () => {
  const component = shallow(<Posts />);
  let wrapper;

  it('should render include a link', () => {
    wrapper = component.find('.newsList');
    expect(wrapper.length).toBeGreaterThanOrEqual(1);
  });

  it('renders posts', () => {
    console.log(component);
    expect(component).toMatchSnapshot();
  });
});