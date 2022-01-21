import { render, screen } from '@testing-library/react';
import MainNavbar from '../components/Common/MainNavbar';

global.matchMedia = global.matchMedia || function () {
    return {
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
    };
};

test('navbar message button', () => {
    render(<MainNavbar />);
    const messagesButton = screen.getByPlaceholderText(/Messages/);
    expect(messagesButton).toBeInTheDocument();
});

test('navbar contacts button', () => {
    render(<MainNavbar />);
    const contactsButton = screen.getByPlaceholderText(/Contacts/);
    expect(contactsButton).toBeInTheDocument();
});

test('navbar add contacts button', () => {
    render(<MainNavbar />);
    const addContactsButton = screen.getByPlaceholderText(/Add contacs/);
    expect(addContactsButton).toBeInTheDocument();
});

/*test('navbar darkmode button', () => {
    render(<MainNavbar />);
    const darkmodeButton = screen.getByPlaceholderText(/Dark mode/);
    expect(darkmodeButton).toBeInTheDocument();
});*/