import React from 'react';

const Login = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div class="card w-4/5 max-w-sm bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center font-semibold text-xl">Login</h2>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Your Password" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            <span class="label-text-alt cursor-pointer hover:text-primary">Forgot Password?</span>
                        </label>
                    </div>
                    <input type="submit" class="btn btn-accent w-full max-w-xs" />
                    <p className='text-center text-sm'>New to Doctors-portal? <span className='text-primary'>
                        Create new account</span></p>
                    <div class="divider">OR</div>
                    <div>
                        <button class="btn btn-outline w-full btn-accent">Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;