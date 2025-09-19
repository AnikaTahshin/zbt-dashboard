import React from "react";
import {socialLogin} from '../app/actions'
const LoginForm = () => {
  return (
    <div className="flex items-center justify-center">
        <div className="flex min-h-full max-w-[50%] flex-col px-6 py-12 lg:px-8 bg-gray-500">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action={socialLogin} className="space-y-6">
          <div>
            <button
              type="submit"
              name="action"
              value="google"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer"
            >
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
