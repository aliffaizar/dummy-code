export function validator(
  fn: any,
  testCases: any[],
  expectedResults: any[]
): { result: any[]; output: any[] } {
  try {
    const res = []
    const output = []
    for (let i = 0; i < testCases.length; i++) {
      const result = fn(...testCases[i])
      res.push(JSON.stringify(result) === JSON.stringify(expectedResults[i]))
      output.push(result)
    }
    return { result: res, output }
  } catch (error) {
    return { result: [], output: [] }
  }
}
