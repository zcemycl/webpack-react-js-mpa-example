import About from '../About'
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

describe('testing About Page', () => {
    it("renders without crashing", () => {
        renderer.create(
            <Router>
                <About/>
            </Router>
        )
    })
})