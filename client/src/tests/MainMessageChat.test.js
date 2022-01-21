import { render, screen } from '@testing-library/react';
import MainMessageChat from '../components/Common/MainMessageChat';

global.matchMedia = global.matchMedia || function () {
    return {
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
    };
};

test('Sõnumi lahter', () => {
    render(<MainMessageChat />);
    const chatBox = screen.getByPlaceholderText(/Type your message/);
    expect(chatBox).toBeInTheDocument();
});