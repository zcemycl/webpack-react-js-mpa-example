import Home from '../Home'
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

describe('testing Home Page', () => {
    it("renders without crashing", () => {
        renderer.create(
            <Router>
                <Home/>
            </Router>
        )
    })
})