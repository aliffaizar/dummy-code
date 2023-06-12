import { Link } from 'react-router-dom'
import challenges from '../challenges'
import { cn } from '../lib/utils'

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='m-4 md:m-6 grid grid-cols-1 gap-4'>
        {challenges.map((challenge) => (
          <Link
            to={`/challenges/${challenge.id}`}
            key={challenge.id}
            className='flex justify-between items-center bg-neutral py-4 px-8 rounded-md shadow-md group'
          >
            <div>
              <h2 className='text-2xl group-hover:text-emerald-500'>
                {challenge.title}
              </h2>

              <p className='flex items-center gap-2 mt-2'>
                <span
                  className={cn(
                    'badge badge-outline rounded px-2 py-1 text-sm',
                    challenge.difficulty.toLowerCase() === 'easy'
                      ? 'badge-success'
                      : challenge.difficulty.toLowerCase() === 'medium'
                      ? 'badge-warning'
                      : 'badge-error'
                  )}
                >
                  {challenge.difficulty}
                </span>
              </p>
            </div>
            <button className='btn btn-primary px-8 '>Start</button>
          </Link>
        ))}
      </div>
    </div>
  )
}
