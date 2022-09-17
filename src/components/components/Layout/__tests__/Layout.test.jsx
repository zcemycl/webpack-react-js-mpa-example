import Layout from '../Layout'
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

describe('testing Layout Page', () => {
    it("renders without crashing", () => {
        renderer.create(
            <Router>
                <Layout/>
            </Router>
        )
    })
})