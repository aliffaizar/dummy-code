const starterCode = `// Write a function that returns true if a string is a palindrome
function palindrome(str) {
  // Write your code here
};`

const testCases = ['racecar', 'cat', 'mom']

const expectedResults = [true, false, true]

function validator(
  fn: any,
  testCases: string[],
  expectedResults: boolean[]
): { res: boolean[]; output: boolean[] } {
  try {
    const res: boolean[] = []
    const output: boolean[] = []
    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i])
      output.push(result)
      res.push(result === expectedResults[i])
    }
    return { res, output }
  } catch (error) {
    return { res: [], output: [] }
  }
}

export default {
  starterCode,
  testCases,
  expectedResults,
  validator,
}
