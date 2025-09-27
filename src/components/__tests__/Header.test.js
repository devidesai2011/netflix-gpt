import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('Should be able to render the header component', () => {
    render(<Header />);
    const headerElement = screen.getByText("Header");
    expect(headerElement).toBeInTheDocument();
});