import Home from '../Home'
import renderer from 'react-test-renderer';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { Suspense , lazy } from 'react'

// const Home = lazy(() => import('../Home'))

describe('testing Home Page', () => {
    it("click twice", async () => {
        const { getByRole } = render(
            <Home/>
        ,{wrapper: Router}
        )

        // act(() => {
        const button = getByRole("button", 
            { name: 'Click Me!!!' });
        expect(button.innerHTML).toBe('Click Me!!!');
        fireEvent.click(button)
        fireEvent.click(button)
        
        const paragraph = screen.getByTestId('numlist');
        expect(paragraph.innerHTML).not.toBe('');
        // })
        

    })
})