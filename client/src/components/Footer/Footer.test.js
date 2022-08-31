import {render, screen} from "@testing-library/react";

import Footer from "./Footer";

let currentYear = new Date().getFullYear().toString();
describe('Footer component', () => {
    it('Footer renders', () => {
        render(<Footer />);
        expect(screen.getByText('Price Ticker')).toBeInTheDocument();
    });
    it('Footer should display current year', () => {
        render(<Footer />);
        expect(screen.getByText(`Ⓒ${currentYear}`)).toBeInTheDocument();
    })
})