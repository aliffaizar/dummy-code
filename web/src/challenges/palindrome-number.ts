import { Challenge } from '../types/challenges'

const starterCode = `/**
  * @param {number} num
  * @return {boolean}
  */

function isPalindrome(num) {
  // Write your code here

}`

const instructions = `Given an integer \`number\`, return \`true\` if \`number\` is a palindrome, otherwise return \`false\`. A \`number\` is a palindrome when it reads the same backward as forward.
#### Example 1:
\`\`\`
Input : number = 121
Output : true
\`\`\`
#### Example 2:
\`\`\`
Input : number = -121
Output : true
\`\`\`
#### Example 3:
\`\`\`
Input : number = 10
Output : false
Explanation : Reads 01 from right to left. Therefore it is not a palindrome.
\`\`\`
`

const challanges: Challenge = {
  id: 'palindrome-number',
  title: 'Palindrome Number',
  difficulty: 'Easy',
  starterCode,
  instructions,
  testCases: [121, -122, 10, -101],
  testInput: [121, -122, 10, -101],
  expectedResults: [true, false, false, true],
}

export default challanges
