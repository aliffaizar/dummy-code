import { Challenge } from '../types/challenges'
import { validator } from '../lib/validator-multi-params'

const starterCode = `/**
  * @param {number[], number} numbers, average
  * @return {boolean}
  */

function averagePair(numbers, average) {
  // Write your code here

}`

const instructions = `Given a sorted array of integers \`numbers\` and a target average \`average\`, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

**Example 1:**

\`\`\`
Input: numbers = [1, 2, 3], average = 2.5
Output: true
Explanation: 2.5 is the average of 2 and 3.
\`\`\`

**Example 2:**

\`\`\`
Input: numbers = [1, 3, 3, 5, 6, 7, 10, 12, 19], average = 8
Output: true
Explanation: 8 is the average of 5 and 12.
\`\`\`


**Constraints:**

- \`1 <= numbers.length <= 10^5\`
- \`-10^4 <= numbers[i] <= 10^4\`
- \`1 <= average <= 10^5\`
`

const challanges: Challenge = {
  id: 'average-pair',
  title: 'Average Pair',
  difficulty: 'Easy',
  starterCode,
  instructions,
  validator,
  testCases: [
    [[1, 2, 3], 2.5],
    [[1, 3, 3, 5, 6, 7, 10, 12, 19], 8],
    [[-1, 0, 3, 4, 5, 6], 4.1],
    [[], 4],
  ],

  testInput: [
    `[[1, 2, 3], 2.5]`,
    `[[1, 3, 3, 5, 6, 7, 10, 12, 19], 8]`,
    `[[-1, 0, 3, 4, 5, 6], 4.1]`,
    `[[], 4]`,
  ],

  expectedResults: [true, true, false, false],
  // tags: ['Arrays', 'Hash Tables'],
}

export default challanges
