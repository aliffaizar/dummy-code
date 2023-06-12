import { Challenge } from '../types/challenges'

const starterCode = `/**
  * @param {number} num
  * @return {string}
  */

function intToRoman(num) {
  // Write your code here

}`

const instructions = `Given an integer \`num\`, return a string representing the integer's roman numeral. You can assume the input will be between 1 and 3999.
#### Example 1:
\`\`\`
Input : num = 3
Output : "III"
\`\`\`
#### Example 2:
\`\`\`
Input : num = 4
Output : "IV"
\`\`\`
#### Example 3:
\`\`\`
Input : num = 9
Output : "IX"
\`\`\`
#### Example 4:
\`\`\`
Input : num = 58
Output : "LVIII"
Explanation : L = 50, V= 5, III = 3.
\`\`\`
#### Example 5:
\`\`\`
Input : num = 1994
Output : "MCMXCIV"
Explanation : M = 1000, CM = 900, XC = 90 and IV = 4.
\`\`\`
#### Constraints:
- \`1 <= num <= 3999\`
`

const challanges: Challenge = {
  id: 'integer-to-roman',
  title: 'Integer to Roman',
  difficulty: 'Medium',
  starterCode,
  instructions,
  testCases: [3, 4, 9, 58, 1994],
  testInput: [3, 4, 9, 58, 1994],
  expectedResults: ['III', 'IV', 'IX', 'LVIII', 'MCMXCIV'],
}

export default challanges
