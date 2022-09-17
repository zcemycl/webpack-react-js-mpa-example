import renderer from 'react-test-renderer';
import App from '../App';

describe('testing App', () => {
    it("renders without crashing", () => {
        renderer.create(<App/>)
    })
})