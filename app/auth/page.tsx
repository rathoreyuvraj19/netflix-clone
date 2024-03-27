"use client";
import { useCallback, useState } from "react";
import Input from "../components/Input";
import { register } from "module";

const auth = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img className="h-12" src="/images/logo.png" alt="Logo"></img>
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 px-16 py-16 self-ceter mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
              <h2 className="text-white text-4xl mb-8 font-semibold">
                {variant === "login" ? "Sign In" : "Register"}
              </h2>
              <div className="flex flex-col gap-4">
                {variant === "register" ? (
                  <Input
                    id="username"
                    type="username"
                    label="Username"
                    onChange={(e: any) => {
                      setUsername(e.target.value);
                    }}
                    value={username}
                  ></Input>
                ) : null}

                <Input
                  id="email"
                  type="email"
                  label="Email"
                  onChange={(e: any) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                ></Input>
                <Input
                  id="password"
                  type="password"
                  label="Password"
                  onChange={(e: any) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                ></Input>
              </div>
              <button className="transition bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700">
                {variant === "login" ? "Login" : "Sign Up"}
              </button>
              <p className="text-neutral-500 mt-12 text-center">
                {variant === "login"
                  ? "First time using Netflix?"
                  : "Already Have an Account?"}
                <span
                  onClick={toggleVariant}
                  className="text-white ml-1 hover:underline cursor-pointer"
                >
                  {variant === "login" ? "Create an Account" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default auth;
