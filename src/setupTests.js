import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom';
configure({ adapter: new Adapter() });
