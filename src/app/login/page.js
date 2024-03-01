"use client";

import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/lib/actions";

export default function Page() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <div className="w-full h-full flex justify-center items-center overflow-hidden">
      <form className="h-64 px-8 flex flex-col justify-evenly items-center bg-white border border-black rounded-lg" action={dispatch}>
        <div className="flex basis-1/4 justify-center items-center">
          <label className="mr-4" htmlFor="email">
            Email
          </label>
          <input className="border border-black rounded-lg" id="email" name="email" />
        </div>
        <div className="basis-1/4 flex justify-center items-center">
          <label className="mr-4" htmlFor="password">
            Password
          </label>
          <input className="border border-black rounded-lg" id="password" name="password" />
        </div>
        <div className="w-full basis-1/4 flex justify-center items-center">
          <LoginButton />
        </div>
      </form>
      <div className="flex justify-center items-center">
        {errorMessage && (
          <>
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </div>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button className="w-36 py-1 border border-black rounded-lg" aria-disabled={pending}>
      Login
    </button>
  );
}
