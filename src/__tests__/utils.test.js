
import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("returns 7 for the word 'test'", () => {
    const word = "test";
    const result = pointsForWord(word);
    expect(result).toBe(7);
  });
});