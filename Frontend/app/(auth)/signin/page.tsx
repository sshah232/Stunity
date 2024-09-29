"use client";

import { useState, useEffect } from 'react';
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useRouter } from 'next/navigation';

import Link from "next/link";

export default function SignIn() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validUser, setValidUser] = useState(false);
  const [messages, setMessages] = useState('');

  const usernameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const passwordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  
  const Login = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:8000/login", // Update this to your actual API endpoint
      data: {
        username: username,
        password: password,
      },
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      }
    }).then((res) => {
      console.log(res.data);
      if (res.data.username){
        setValidUser(true);
      }
      setMessages(res.data.message)
    })
    .catch((ex) => {
      setValidUser(false);
    });
  };
  useEffect(() => {
    if (validUser) {
      router.push('/'); // Navigate to home or other route
    }
  });

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Welcome back
            </h1>
          </div>
          {/* Contact form */}
          <form onSubmit={Login} className="mx-auto max-w-[400px]">
            <div className="space-y-5">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="Your email"
                  onChange={usernameInput}
                  value={username}
                />
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between gap-3">
                  <label
                    className="block text-sm font-medium text-indigo-200/65"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Link
                    className="text-sm text-gray-600 hover:underline"
                    href="/reset-password"
                  >
                    Forgot?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  className="form-input w-full"
                  placeholder="Your password"
                  value={password}
                  onChange={passwordInput}
                />
              </div>
            </div>
            <div className="mt-6 space-y-5">
              <button className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]">
                Sign In
              </button>
            </div>
            {messages ? (
                <div>{messages}</div>
                    ) : null
                    }<br/><br/><br/><br/>
          </form>
          {/* Bottom link */}
          <div className="mt-6 text-center text-sm text-indigo-200/65">
            Don't you have an account?{" "}
            <Link className="font-medium text-indigo-500" href="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}