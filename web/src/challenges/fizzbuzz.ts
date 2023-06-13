import { Challenge } from '../types/challenges'
import { validator } from '../lib/validator'

const starterCode = `/**
  * @param {number} number
  * @return {string[]}
  */

function fizzBuzz(number) {
  // Write your code here

}`

const instructions = `Given an integer \`number\`, return an array of strings or numbers from \`1\` to \`number\` with the following restrictions:
- For each number that is a multiple of \`3\`, replace it with \`"Fizz"\`.
- For each number that is a multiple of \`5\`, replace it with \`"Buzz"\`.
- For each number that is a multiple of both \`3\` and \`5\`, replace it with \`"FizzBuzz"\`.
- For all other numbers, just return the number itself.

**Example 1:**

\`\`\`
Input: number = 3
Output: ["1", "2", "Fizz"]
\`\`\`

**Example 2:**

\`\`\`
Input: number = 5
Output: ["1", "2", "Fizz", "4", "Buzz"]
\`\`\`

**Example 3:**

\`\`\`
Input: number = 15
Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
\`\`\`

**Constraints:**

- \`1 <= number <= 100\`
`

const challanges: Challenge = {
  id: 'fizzbuzz',
  title: 'FizzBuzz',
  difficulty: 'Easy',
  starterCode,
  instructions,
  validator,
  testCases: [3, 5, 15],
  testInput: [3, 5, 15],
  expectedResults: [
    ['1', '2', 'Fizz'],
    ['1', '2', 'Fizz', '4', 'Buzz'],
    [
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ],
  ],
}

export default challanges
