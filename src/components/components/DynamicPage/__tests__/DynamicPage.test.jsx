import DynamicPage from '../DynamicPage'
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';

describe('testing DynamicPage Page', () => {
    it("renders without crashing", () => {
        renderer.create(
            <DynamicPage/>
        )
    })
})