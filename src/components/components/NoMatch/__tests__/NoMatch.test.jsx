import NoMatch from '../NoMatch'
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

describe('testing NoMatch Page', () => {
    it("renders without crashing", () => {
        renderer.create(
            <Router>
                <NoMatch/>
            </Router>
        )
    })
})