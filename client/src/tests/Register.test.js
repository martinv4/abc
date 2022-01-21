import { render, screen } from '@testing-library/react';
import Register from '../Pages/Register';

global.matchMedia = global.matchMedia || function () {
    return {
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
    };
};

test('Main', () => {
    render(<Register />);
    const registerTitle = screen.getByText(/Create your account/);
    expect(registerTitle).toBeInTheDocument();
});

test('Register button', () => {
    render(<Register />);
    const registerButton = screen.getByText(/Sign Up/);
    expect(registerButton).toBeInTheDocument();
});

test('Placeholders', () => {
    render(<Register />);
    const placeholderName = screen.getByPlaceholderText(/Name/);
    const placeholderEmail = screen.getByPlaceholderText(/Email/);
    const placeholderUsername = screen.getByPlaceholderText(/Username/);
    const placeholderAddress = screen.getByPlaceholderText(/Address/);
    const placeholderPassword = screen.getByPlaceholderText(/Password/);
    expect(placeholderName).toBeInTheDocument();
    expect(placeholderEmail).toBeInTheDocument();
    expect(placeholderUsername).toBeInTheDocument();
    expect(placeholderAddress).toBeInTheDocument();
    expect(placeholderPassword).toBeInTheDocument();
});

test('Login button', () => {
    render(<Register />);
    const loginButton = screen.getByText(/here!/);
    expect(loginButton).toBeInTheDocument();
});