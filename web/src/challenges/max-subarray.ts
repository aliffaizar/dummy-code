import { Challenge } from '../types/challenges'
import { validator } from '../lib/validator-multi-params'

const starterCode = `/**
  * @param {number[], number} arr, length
  * @return {number} 
  */

function maxSubarray(arr, length) {
  // Your code here
  
}`

const instructions = `Given an array of integers \`arr\` and a number \`length\`, find the maximum sum of a subarray of length \`length\`.

**Example 1:**

\`\`\`
Input: arr = [1, 2, 3, 4, 5], length = 2
Output: 9
Explanation: The subarray of length 2 with the maximum sum is [4, 5].
\`\`\`

**Example 2:**

\`\`\`
Input: arr = [1, 2, 3, 4, 5], length = 3
Output: 12
Explanation: The subarray of length 3 with the maximum sum is [3, 4, 5].

**Example 3:**

\`\`\`

Input: arr = [1, 2, 3, 4, 5], length = 5
Output: 15
Explanation: The subarray of length 5 with the maximum sum is [1, 2, 3, 4, 5].
\`\`\`

**Constraints:**

- \`1 <= arr.length <= 100\`
- \`1 <= arr[i] <= 100\`
- \`1 <= length <= arr.length\`
`

const challanges: Challenge = {
  id: 'max-subarray',
  title: 'Max Subarray',
  difficulty: 'Easy',
  starterCode,
  instructions,
  validator,
  testCases: [
    [[1, 2, 3, 4, 5], 2],
    [[1, 2, 3, 4, 5], 3],
    [[1, 2, 3, 4, 5], 5],
  ],
  expectedResults: [9, 12, 15],
  testInput: [
    `[[1, 2, 3, 4, 5], 2]`,
    `[[1, 2, 3, 4, 5], 3]`,
    `[[1, 2, 3, 4, 5], 5]`,
  ],
}

export default challanges
