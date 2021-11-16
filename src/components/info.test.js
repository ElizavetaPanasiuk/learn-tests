import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from "enzyme-to-json";
import Info from "./Info";

configure({
  adapter: new Adapter()
});

const componentDidMountSpy =jest.spyOn(Info.prototype, 'componentDidMount')
const componentDidUpdateSpy = jest.spyOn(Info.prototype, 'componentDidUpdate');
const componentWillUnmountSpy = jest.spyOn(Info.prototype, 'componentWillUnmount');

describe('Info component', () => {
  let component;

  beforeEach(() => { 
    jest.spyOn(window, 'addEventListener');
    jest.spyOn(window, 'removeEventListener');
    component = shallow(<Info />);
  });

  afterEach(() => {
    window.addEventListener.mockRestore();
    window.removeEventListener.mockRestore();
  });

  it('should render info component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  describe('Lifecycle methods', () => {
    it('should call componentDidMount at once', () => {
      expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
    });

    it('shouldn\'t call componentDidUnmount when component just mounted', () => {
      expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
      expect(componentWillUnmountSpy).toHaveBeenCalledTimes(0);
    });

    it('should call componentDidUpdate', () => {
      component.setProps();
      expect(componentDidUpdateSpy).toHaveBeenCalledTimes(1);
    })

    it('should call componentWillUnmount', () => {
      component.unmount();
      expect(componentWillUnmountSpy).toHaveBeenCalledTimes(1);
    })
  });
});