import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full p-8 tablet:p-2  h-full flex-col flex items-center justify-center text-white">
      <h1 className="text-[156px] tablet:text-[48px] phone:text-[36px] leading-[150%] font-bold">
        2<span className="text-emerald-400">0</span>2
      </h1>
      <h1 className="leading-[150%] tablet:text-[36px] phone:text-[20px] text-center font-bold text-[64px]">
        SOMETHING WRONG
        <br />
        JUST HAPPEN
      </h1>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}
        className="mt-[48px] text-black tablet:px-4 tablet:text-sm text-lg tablet:py-2 font-bold  px-[48px] py-[12px] bg-gradient1 rounded-full"
      >
        REFRESH
      </button>
    </div>
  );
};

export default ErrorPage;