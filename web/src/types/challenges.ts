export interface Challenge {
  id: string
  title: string
  difficulty: string
  starterCode: string
  instructions: string
  testCases: any[]
  expectedResults: any[]
  testInput: any[]
}
