import CodeMirror from '@uiw/react-codemirror'
import { githubDark } from '@uiw/codemirror-theme-github'
import { javascript } from '@codemirror/lang-javascript'
import { Fragment, useState } from 'react'
import Split from 'react-split'
import { toast } from 'react-toastify'
import { Tab } from '@headlessui/react'

import { Challenge } from '../challenges'
import { cn } from '../lib/utils'

export function Editor({ challenge }: { challenge: Challenge }) {
  const [code, setCode] = useState(challenge.starterCode)
  const [result, setResult] = useState<boolean[]>([])
  const [output, setOutput] = useState<boolean[]>([])

  const handleTest = () => {
    const { res, output } = challenge.validator(
      eval(`(${code.replace(/;/g, '')})`),
      challenge.testCases,
      challenge.expectedResults
    )

    setResult(res)
    setOutput(output)

    if (res.includes(false)) {
      toast.error('Test failed')
      return
    }
    toast.success('Test passed')
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
            <div className='h-full px-6 py-2'>
              <Tab.Group>
                <Tab.List className='tabs'>
                  {challenge.testCases.map((_, i) => (
                    <Tab as={Fragment} key={i}>
                      {({ selected }) => (
                        <div
                          className={cn(
                            'tab tab-bordered focus:outline-none focus:ring-0',
                            selected && 'tab-active',
                            result[i] && 'text-success'
                          )}
                        >
                          Case {i + 1}
                        </div>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels>
                  {challenge.testCases.map((testCase, i) => (
                    <Tab.Panel key={i}>
                      <div className='flex gap-2 mt-3'>
                        <span className='font-semibold'>Input :</span>
                        <span>"{testCase}"</span>
                      </div>
                      <div className='py-2 flex gap-2'>
                        <span className='font-semibold'>Expected Output :</span>
                        <pre>{challenge.expectedResults[i].toString()}</pre>
                      </div>
                      <div className='py-2 flex gap-2'>
                        <span className='font-semibold'>Result :</span>
                        {output[i]?.toString() && (
                          <pre>{output[i].toString()}</pre>
                        )}
                      </div>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
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
