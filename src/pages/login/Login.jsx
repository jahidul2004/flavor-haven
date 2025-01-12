import React, { useState, useEffect } from "react";
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
    const [captchaText, setCaptchaText] = useState("");

    // ক্যাপচা ইঞ্জিন লোড
    useEffect(() => {
        loadCaptchaEnginge(6); // 6 অক্ষরের ক্যাপচা লোড করবে
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const inputCaptcha = e.target.captchaText.value;

        // ক্যাপচা যাচাই
        if (!validateCaptcha(inputCaptcha)) {
            alert("Invalid captcha! Please try again.");
            return;
        }

        console.log("Login Successful", { email, password });
        alert("Login Successful!");
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Captcha</span>
                            </label>
                            <div className="border p-2 my-2 rounded-lg">
                                <LoadCanvasTemplate />
                            </div>
                            <label className="label">
                                <span className="label-text">Captcha Text</span>
                            </label>
                            <input
                                name="captchaText"
                                type="text"
                                placeholder="Enter captcha text"
                                className="input input-bordered"
                                value={captchaText}
                                onChange={(e) => setCaptchaText(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
