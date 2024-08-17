import {render, screen} from "@testing-library/react"

import App from "../App"

test("text testing",() => {
    render(<App />);
    const text = screen.getByText(/Learn React/i)
    expect(text).toBeInTheDocument();
})






test("input testing", () => {
    
})