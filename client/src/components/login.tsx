import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HandleLogin from "../lib/handle_login";
import Input from "../lib/input";
import FormError from "../lib/form_error";

const Login = ({ hide }: { hide: (check: boolean) => void }) => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const FastLogin = () => {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgxOTgxMDM2fQ.5Tpi0kXh7Hv6d7MaB8l8mIrJ8TJ3wz6Q72NOS8Het4g";
    localStorage.setItem("token", token);
    navigate("/home", { replace: true });
  };

  return (
    <div className="w-full h-full p-6 tablet:p-4 flex items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          let form: FormData = new FormData(e.currentTarget);
          HandleLogin({ form, setError, navigate, setLoading });
        }}
        className="max-w-[384px] w-[384px]"
      >
        <h5 className="font-bold text-xl text-white mb-8">
          Welcome Back!
          <br />
          Login To Your Account
        </h5>
        <button
          onClick={(e) => {
            e.preventDefault();
            FastLogin();
          }}
          className="w-full h-12 rounded-[4px] border border-gray-500 text-gray-300 font-bold mb-12"
        >
          Login As A Demo
        </button>
        <Input name="email" placeholder="Enter Email" type="email" />
        {error.includes("email") ? <FormError text={error} /> : ""}

        <Input
          name="password"
          placeholder="Enter Password"
          type="password"
          margin="mt-4"
        />
        {error.includes("password") ? <FormError text={error} /> : ""}

        {!loading ? (
          <button
            type="submit"
            className="bg-gradient1 mt-[48px] w-full h-[48px] font-bold drop-shadow-md rounded-[4px]"
          >
            Join
          </button>
        ) : (
          <div className="bg-gradient1 flex items-center justify-center mt-[48px] w-full h-[48px] font-bold drop-shadow-md rounded-[4px]">
            Loading...
          </div>
        )}

        <p className="mt-[48px] text-center text-white">
          You don't have account?{" "}
          <span
            onClick={() => hide(true)}
            className="text-emerald-400 cursor-pointer"
          >
            Join
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;