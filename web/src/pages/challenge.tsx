import Split from 'react-split'

import { Editor } from '../components/Editor'

export default function Challenge() {
  return (
    <div className='overflow-hidden'>
      <Split className='split' minSize={0} gutterSize={8}>
        <div>hello</div>
        <div className='overflow-x-hidden relative'>
          <Split
            className='h-[calc(100vh-64px)]'
            direction='vertical'
            sizes={[70, 30]}
            minSize={70}
          >
            <div className='w-full overflow-auto'>
              <Editor />
            </div>

            <div className='h-full relative overflow-auto'>
              <div className='h-full'></div>
            </div>
          </Split>
          <div className='absolute bottom-0 right-0 p-4'>
            <div className='flex gap-4'>
              <button className='btn btn-sm btn-outline'>Run</button>
              <button className='btn btn-sm btn-primary'>Submit</button>
            </div>
          </div>
        </div>
      </Split>
    </div>
  )
}
