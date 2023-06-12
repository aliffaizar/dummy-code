import { Challenge } from '../types/challenges'

const starterCode = `/**
  * @param {string} roman
  * @return {string}
  */

function romanToInteger(roman) {
  // Write your code here

}`

const instructions = `Given a string \`roman\`, return the integer value of the roman numeral. You can assume the input will be between 1 and 3999.

#### Example 1:
\`\`\`
Input : roman = "III"
Output : 3
\`\`\`

#### Example 2:
\`\`\`
Input : roman = "IV"
Output : 4
\`\`\`

#### Example 3:
\`\`\`
Input : roman = "IX"
Output : 9
\`\`\`

#### Example 4:
\`\`\`
Input : roman = "LVIII"
Output : 58
Explanation : L = 50, V= 5, III = 3.
\`\`\`

#### Example 5:
\`\`\`
Input : roman = "MCMXCIV"
Output : 1994
Explanation : M = 1000, CM = 900, XC = 90 and IV = 4.
\`\`\`

#### Constraints:
- \`1 <= roman.length <= 15\`
- \`roman\` contains only the characters (\`'I', 'V', 'X', 'L', 'C', 'D', 'M'\`).
- It is guaranteed that \`roman\` is a valid roman numeral in the range (\`1 <= roman.length <= 3999\`).
`

const challanges: Challenge = {
  id: 'roman-to-integer',
  title: 'Roman to Integer',
  difficulty: 'Medium',
  starterCode,
  instructions,
  testCases: ['III', 'IV', 'IX', 'LVIII', 'MCMXCIV'],
  testInput: [`"III"`, `"IV"`, `"IX"`, `"LVIII"`, `"MCMXCIV"`],
  expectedResults: [3, 4, 9, 58, 1994],
}

export default challanges
