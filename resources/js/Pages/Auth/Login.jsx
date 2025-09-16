import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { motion } from "framer-motion";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-indigo-700 to-indigo-500 relative overflow-hidden">
                {/* Floating circles animation */}
                <motion.div
                    className="absolute w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                    animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 8 }}
                />
                <motion.div
                    className="absolute w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 top-40 right-20"
                    animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 10 }}
                />

                {/* Card Login */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-10 w-full max-w-md text-white"
                >
                    <h1 className="text-3xl font-bold text-center mb-6 text-indigo-200">
                        Welcome Back 👋
                    </h1>
                    <p className="text-center text-sm text-indigo-100 mb-8">
                        Please login to continue
                    </p>

                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-400 text-center">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-6">
                        {/* Email */}
                        <div>
                            <InputLabel
                                htmlFor="email"
                                value="Email"
                                className="text-indigo-200"
                            />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full rounded-lg bg-white/20 border-none text-white placeholder-gray-300 focus:ring-2 focus:ring-indigo-400"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                placeholder="you@example.com"
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2 text-pink-300"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <InputLabel
                                htmlFor="password"
                                value="Password"
                                className="text-indigo-200"
                            />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full rounded-lg bg-white/20 border-none text-white placeholder-gray-300 focus:ring-2 focus:ring-indigo-400"
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                placeholder="********"
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2 text-pink-300"
                            />
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="ms-2 text-sm text-indigo-100">
                                    Remember me
                                </span>
                            </label>

                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="text-sm text-indigo-200 hover:text-white transition"
                                >
                                    Forgot password?
                                </Link>
                            )}
                        </div>

                        {/* Button */}
                        <PrimaryButton
                            className="w-full justify-center bg-indigo-600 hover:bg-indigo-500 transition text-white py-3 rounded-lg text-lg font-semibold shadow-md"
                            disabled={processing}
                        >
                            Log in
                        </PrimaryButton>
                    </form>
                </motion.div>
            </div>
        </>
    );
}
