import palindrome from './palindrome'

export interface Challenge {
  id: string
  title: string
  difficulty: string
  category: string
  starterCode: string
  testCases: string[]
  expectedResults: any[]
  validator: (
    fn: any,
    testCases: string[],
    expectedResults: any[]
  ) => { res: boolean[]; output: boolean[] }
}

export default [
  {
    id: 'palindrome',
    title: 'Palindrome',
    difficulty: 'Easy',
    category: 'String',
    ...palindrome,
  },
]
