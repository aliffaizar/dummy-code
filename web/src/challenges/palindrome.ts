const starterCode = `// Write a function that returns true if a string is a palindrome
function palindrome(str) {
  // Write your code here
};`

const testCases = ['racecar', 'cat', 'mom']

const expectedResults = [true, false, true]

function validator(fn: any, testCases: string[], expectedResults: boolean[]) {
  try {
    const res: boolean[] = []
    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i])
      res.push(result === expectedResults[i])
    }
    return res
  } catch (error: any) {
    return [error.message]
  }
}

export default {
  starterCode,
  testCases,
  expectedResults,
  validator,
}
