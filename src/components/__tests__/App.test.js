import renderer from 'react-test-renderer';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import '@testing-library/jest-dom'

describe('testing App', () => {
    it("renders without crashing", () => {
        render(<App/>)
    })

    test('full app rendering', async () => {
        const { getByText } = render(<App/>)
        const user = userEvent.setup()
        expect(getByText(/Hello World of React and Webpack/i)).toBeInTheDocument()
        await user.click(getByText(/Navigate to Dynamic Page/i))
        expect(getByText(/Dynamic Page/i)).toBeInTheDocument()
    })
})