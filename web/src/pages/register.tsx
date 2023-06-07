export default function Register() {
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <img
          className='mx-auto h-10 w-auto'
          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
          alt='Your Company'
        />
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight '>
          Register to create an account
        </h2>
      </div>
      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-6' action='#' method='POST'>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium leading-6 '
            >
              Name
            </label>
            <div className='mt-2'>
              <input
                id='name'
                name='name'
                type='name'
                autoComplete='name'
                required
                className='input input-bordered w-full'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 '
            >
              Email address
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='input input-bordered w-full'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium leading-6 '
            >
              Password
            </label>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='password'
                required
                className='input input-bordered w-full'
              />
            </div>
          </div>
          <div>
            <button className='btn btn-primary w-full' type='submit'>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
