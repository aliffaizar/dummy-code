import { Challenge } from '../types/challenges'
import { validator } from '../lib/validator'

const starterCode = `/**
  * @param {number[]} numbers
  * @return {boolean}
  */

function containsDuplicate(numbers) {
  // Write your code here

}`

const instructions = `Given an array of integers \`numbers\`, return \`true\` if the array contains any duplicates, and \`false\` if it does not.

**Example 1:**

\`\`\`
Input: numbers = [1, 2, 3, 1]
Output: true
\`\`\`

**Example 2:**

\`\`\`
Input: numbers = [1, 2, 3, 4]
Output: false
\`\`\`

**Example 3:**

\`\`\`
Input: numbers = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
Output: true
\`\`\`

**Constraints:**

- \`1 <= numbers.length <= 10^5\`
- \`-10^9 <= numbers[i] <= 10^9\`
`

const challanges: Challenge = {
  id: 'duplicate-entry',
  title: 'Duplicate Entry',
  difficulty: 'Easy',
  starterCode,
  instructions,
  validator,
  testCases: [
    [1, 2, 3, 1],
    [1, 2, 3, 4],
    [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
  ],
  testInput: [`[1, 2, 3, 1]`, `[1, 2, 3, 4]`, `[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]`],
  expectedResults: [true, false, true],
  // tags: ['Arrays', 'Hash Tables'],
}

export default challanges
