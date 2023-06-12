import axios from 'axios'
import { useState } from 'react'
import MDEditor from '@uiw/react-md-editor'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const initialForm = {
  title: '',
  difficulty: '',
  instructions: '',
  testCases: '',
  expectedResults: '',
  starterCode: '',
  validator: '',
}

export default function CreateChallenge() {
  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const response = await axios.post('/api/challenges', form)
    if (response.status === 201) {
      setForm(initialForm)
      toast.success('Challenge created successfully')
      navigate('/admin/challenges')
    }
    setLoading(false)
  }

  return (
    <div className='max-w-7xl mx-auto p-6'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div className='flex justify-between items-center gap-6'>
          <input
            type='text'
            placeholder='Titile'
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className='input input-bordered input-primary w-1/2'
          />
          <select
            required
            value={form.difficulty}
            onChange={(e) => setForm({ ...form, difficulty: e.target.value })}
            className='select select-bordered select-primary w-1/2'
          >
            <option value='' disabled>
              -- Select Difficulty --
            </option>
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Hard</option>
          </select>
        </div>
        <MDEditor
          value={form.instructions}
          onChange={(val) => setForm({ ...form, instructions: val || '' })}
          enableScroll={true}
          preview='edit'
          height={400}
        />
        <div className='flex justify-between items-center gap-6'>
          <div className='flex flex-col w-full'>
            <label className='text-base py-2' htmlFor='testCases'>
              Test Cases
            </label>
            <textarea
              id='testCases'
              rows={5}
              placeholder='Test Cases'
              value={form.testCases}
              onChange={(e) => setForm({ ...form, testCases: e.target.value })}
              className='textarea textarea-bordered textarea-primary resize-none'
            />
          </div>
          <div className='flex flex-col w-full'>
            <label className='text-base py-2' htmlFor='expectedResults'>
              Expected Results
            </label>
            <textarea
              id='expectedResults'
              rows={5}
              placeholder='Expected Results'
              value={form.expectedResults}
              onChange={(e) =>
                setForm({ ...form, expectedResults: e.target.value })
              }
              className='textarea textarea-bordered textarea-primary resize-none'
            />
          </div>
        </div>
        <div>
          <label className='text-base py-2'>Starter Code</label>
          <MDEditor
            value={form.starterCode}
            onChange={(val) => setForm({ ...form, starterCode: val || '' })}
            enableScroll={true}
            height={250}
          />
        </div>
        <div>
          <label className='text-base py-2'>Validator</label>
          <MDEditor
            value={form.validator}
            onChange={(val) => setForm({ ...form, validator: val || '' })}
            enableScroll={true}
            height={320}
          />
        </div>
        {loading ? (
          <button disabled className='btn'>
            <span className='loading loading-spinner'></span>
            loading
          </button>
        ) : (
          <button type='submit' className='btn btn-primary mb-8'>
            Create Challenge
          </button>
        )}
      </form>
    </div>
  )
}
