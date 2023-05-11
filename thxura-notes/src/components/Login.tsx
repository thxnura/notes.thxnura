import React from 'react'

function Login() {
  return (
    <div className=' w-screen h-screen flex items-center justify-center'>
        <div className="max-w-md w-full">
            <div>
                <div className='mb-5'>
                    <h1 className='text-2xl font-bold text-neutral-700'>
                        Welcome Back
                    </h1>

                    <h3 className='text-xs text-neutral-400'>
                        Lorem ipsum dolor sit amet consectetur.
                    </h3>
                </div>

                <div>
                    <form action="/login" method="post">
                        <div className="mt-3">
                            <div>
                                <input type="email" name="email" id="email" placeholder="Email" className="w-full bg-neutral-50 p-2.5 rounded-lg border" />
                            </div>

                            <div className='mt-2'>
                                <input type="password" name="password" id="password" placeholder="Password" className="w-full bg-neutral-50 p-2.5 rounded-lg border " />
                            </div>

                            <div>
                                {/* Reminder me and forget password */}
                                <div className='flex justify-between items-center mt-2 px-2'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" name="remember" id="remember" className='mr-2' />
                                        <label htmlFor="remember" className='text-xs text-neutral-400'>Remember me</label>
                                    </div>

                                    <div>
                                        <a href="http://">
                                            <span className='text-xs text-neutral-400'>Forget Password</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button type="submit" className='w-full bg-indigo-500 font-semibold text-white p-2.5 rounded-lg mt-2'>Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login