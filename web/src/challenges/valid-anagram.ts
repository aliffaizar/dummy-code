import { Challenge } from '../types/challenges'

const starterCode = `/**
  * @param {string, string} str1, str2
  * @return {boolean}
  */

function isAnagram(str1, str2) {
  // Write your code here

}`

const instructions = `Given two strings \`str1\` and \`str2\`, return \`true\` if \`str1\` and \`str2\` are anagrams of each other, otherwise return \`false\`. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as \`cinema\`, formed from \`iceman\`.
#### Example 1:
\`\`\`
Input : str1 = "anagram", str2 = "nagaram"
Output : true
\`\`\`
#### Example 2:
\`\`\`
Input : str1 = "rat", str2 = "car"
Output : false
\`\`\`
#### Constraints:
- \`1 <= str1.length, str2.length <= 5 * 10^4\`
- \`str1\` and \`str2\` consist of lowercase English letters.
`

const challanges: Challenge = {
  id: 'valid-anagram',
  title: 'Valid Anagram',
  difficulty: 'Medium',
  starterCode,
  instructions,
  testCases: [
    ['anagram', 'nagaram'],
    ['rat', 'car'],
  ],
  testInput: [`"anagram", "nagaram"`, `"rat", "car"`],
  expectedResults: [true, false],
}

export default challanges
