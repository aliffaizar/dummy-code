import { Challenge } from '../types/challenges'

const starterCode = `/**
  * @param {string} str
  * @return {boolean}
  */

function isPalindrome(str) {
  // Write your code here
};`

const instructions = `Given a string \`str\`, return \`true\` if \`str\` is a palindrome, otherwise return \`false\`. A \`str\` is a palindrome when it reads the same backward as forward.

#### **Example 1**:

\`\`\`
Input : str = "racecar"
Output : true
\`\`\`
#### **Example 2**:
\`\`\`
Input : str = "abba"
Output : true
\`\`\`
#### ***Example 3***:
\`\`\`
Input: str = "abc"
Output : false
\`\`\`
`

const challanges: Challenge = {
  id: 'palindrome',
  title: 'Palindrome',
  difficulty: 'Easy',
  starterCode,
  instructions,
  testCases: ['racecar', 'abba', 'abc'],
  expectedResults: [true, true, false],
}

export default challanges
