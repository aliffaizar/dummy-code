import CodeMirror from '@uiw/react-codemirror'
import { githubDark } from '@uiw/codemirror-theme-github'
import { javascript } from '@codemirror/lang-javascript'
import { useState } from 'react'
import Split from 'react-split'

import { Challenge } from '../challenges'

export function Editor({ challenge }: { challenge: Challenge }) {
  const [code, setCode] = useState(challenge.starterCode)
  const [output, setOutput] = useState<boolean[]>([])

  const handleTest = () => {
    const res = challenge.validator(
      eval(`(${code})`),
      challenge.testCases,
      challenge.expectedResults
    )
    setOutput(res as boolean[])
  }

  return (
    <>
      <div className='overflow-x-hidden relative'>
        <Split
          className='h-[calc(100vh-64px)]'
          direction='vertical'
          sizes={[70, 30]}
          minSize={70}
        >
          <div className='w-full overflow-auto'>
            <CodeMirror
              style={{ fontSize: '16px' }}
              theme={githubDark}
              extensions={[javascript({ typescript: true })]}
              height='950px'
              value={code}
              onChange={(value) => setCode(value)}
            />
          </div>

          <div className='h-full relative overflow-auto'>
            <div className='h-full'></div>
          </div>
        </Split>
        <div className='absolute bottom-0 right-0 p-4'>
          <div className='flex gap-4'>
            <button onClick={handleTest} className='btn btn-sm btn-outline'>
              Run
            </button>
            <button className='btn btn-sm btn-primary'>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}
