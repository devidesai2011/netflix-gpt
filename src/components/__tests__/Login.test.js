import Login from "../Login"
import { render, screen } from '@testing-library/react';

test('Check is the login component is rendered', () => {
    render(<Login />);
    const loginElement = screen.getByText("Login");
    expect(loginElement).toBeInTheDocument();
})