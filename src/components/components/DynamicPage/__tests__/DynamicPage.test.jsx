import DynamicPage from '../DynamicPage'
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

describe('testing DynamicPage Page', () => {
    it("renders without crashing", () => {
        renderer.create(
            <Router>
                <DynamicPage/>
            </Router>
        )
    })
})