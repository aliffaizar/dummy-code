import Split from 'react-split'
import { useParams } from 'react-router-dom'
import Markdown from 'markdown-to-jsx'

import { Editor } from '../components/Editor'
import challenges from '../challenges'
import NotFound from './notFound'

export default function Challenge() {
  const params = useParams<{ id: string }>()
  const challenge = challenges.find((c) => c.id === params.id)

  return (
    <>
      {!challenge ? (
        <NotFound />
      ) : (
        <div className='overflow-hidden w-full'>
          <Split className='split' minSize={0} gutterSize={8}>
            <div className='w-full overflow-y-auto p-6'>
              <div>
                <h3 className='capitalize text-2xl font-semibold'>
                  {challenge.title}
                </h3>
                <div className='prose prose-sm lg:prose-xl max-w-none'>
                  <Markdown>{challenge.instructions}</Markdown>
                </div>
              </div>
            </div>
            <Editor challenge={challenge} />
          </Split>
        </div>
      )}
    </>
  )
}
