import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading/Loading';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    useEffect(() => {
        if (user || googleUser) {
            toast.success("Login Successful", { id: "login" });
            navigate(from, { replace: true });
        }
    }, [user, googleUser, from, navigate]);

    if (errors.email || errors.password) {
        if (errors?.email) {
            toast.error(`${errors.email.message}`, { id: "emailError" });
        }
        if (errors?.password) {
            toast.error(`${errors.password.message}`, { id: "passError" })
        }
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        toast.error(`${error.message}`, { id: "firebaseError" });
    }

    const email = watch("email", "");
    const handleResetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            if (resetError) {
                toast.error(`${resetError.message}`, { id: "resetError" })
            }
            else {
                toast.success("Password reset email sent!", { id: "resetEmailSent" });
            }
        }
        else {
            toast.error("Please provide an email!", { id: "resetEmail" });
        }
    }

    const handleGoogleLogin = () => {
        signInWithGoogle();
        if (googleLoading) {
            return <Loading></Loading>
        }
        if (googleError) {
            toast.error(`${googleError.message}`, { id: "googleError" })
        }
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div class="card w-4/5 max-w-sm bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center font-semibold text-xl">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input {...register("email", {
                                required: "Email is Require", pattern: {
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                    message: "Invalid email"
                                }
                            })} type="email" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: "Password is required", minLength: {
                                    value: 8,
                                    message: "Please use at least 8 character"
                                }
                            })} type="password" placeholder="Your Password" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                <span onClick={handleResetPassword} class="label-text-alt cursor-pointer hover:text-primary">Forgot Password?</span>
                            </label>
                        </div>
                        <input type="submit" class="btn btn-accent w-full max-w-xs" value="Login" />
                    </form>
                    <p className='text-center text-sm'>New to Doctors-portal? <span
                        onClick={() => { navigate("/signup") }} className='text-primary cursor-pointer'>
                        Create new account</span></p>
                    <div class="divider">OR</div>
                    <div>
                        <button onClick={handleGoogleLogin} class="btn btn-outline w-full btn-accent">Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;