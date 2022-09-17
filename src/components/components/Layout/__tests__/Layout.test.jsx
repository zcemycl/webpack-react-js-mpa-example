import Layout from '../Layout'
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom'


describe('testing Layout Page', () => {
    it("renders without crashing", async () => {
        const { getByText } = render(<Layout children={<p>Hi</p>}/>, {wrapper: Router})
        await waitFor(() => {
            expect(getByText(/Hi/i)).toBeInTheDocument()
        })
    })
})