import Split from 'react-split'
import { useParams } from 'react-router-dom'

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
            <div>hello</div>
            <Editor challenge={challenge} />
          </Split>
        </div>
      )}
    </>
  )
}
