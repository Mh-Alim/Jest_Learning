
import {render, screen} from "@testing-library/react"
import sum from "../TestFiles/sum"


// use function -> actual value
it('add 1+2 to equal 3',() => {
    expect(sum(1,2)).toBe(3);
    expect(sum(4,3)).toBe(7);
})