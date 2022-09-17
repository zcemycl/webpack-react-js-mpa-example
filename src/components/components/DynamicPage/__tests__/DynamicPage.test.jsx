import DynamicPage from '../DynamicPage'
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import { act } from 'react-dom/test-utils';

describe('testing DynamicPage Page', () => {
    it("renders without crashing", () => {
        act(() => {
            renderer.create(
                <Router>
                    <DynamicPage/>
                </Router>
            )
        })  
    })
})