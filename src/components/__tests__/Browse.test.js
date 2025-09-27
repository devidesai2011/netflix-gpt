import { render, screen } from "@testing-library/react";
import Browse from "../Browse";

test('Should render browse element on the screen', () => {
    render(<Browse />);
    const browseElement = screen.getByText("Browse");
    expect(browseElement).toBeInTheDocument();

})