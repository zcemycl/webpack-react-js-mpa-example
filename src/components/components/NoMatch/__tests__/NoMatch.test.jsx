import NoMatch from '../NoMatch'
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import { act } from 'react-dom/test-utils';

describe('testing NoMatch Page', () => {
    it("renders without crashing", () => {
        act(() => {
            renderer.create(
                <Router>
                    <NoMatch/>
                </Router>
            )
        })
       
    })
})