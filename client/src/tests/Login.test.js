import { render, screen } from '@testing-library/react';
import Login from '../Pages/Login';

global.matchMedia = global.matchMedia || function () {
    return {
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
    };
};

test('Main', () => {
    render(<Login />);
    const pageTitle = screen.getByText(/Log in/);
    expect(pageTitle).toBeInTheDocument();

});

test('Password kontroll', () => {
    render(<Login />);
    const loginControl = screen.getByText(/Password must be at least 6 characters./);
    expect(loginControl).toBeInTheDocument();
});