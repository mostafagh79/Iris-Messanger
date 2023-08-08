import { useNavigate } from "react-router-dom";
import Button from "../ui/button/Button";
import Paragraph from "../ui/paragraph/Paragraph";
import Input from "./input/Input";
import FloatingLabelInput from "./input/FloatingLabelInput";
import PhoneNumberInput from "./input/PhoneNumberInput";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 justify-center items-center-400 rounded-2xl py-10 px-6 bg-gray-100 dark:bg-gray-700 w-11/12 sm:max-w-[580px] ">
      <header className="mx-auto">
        <Paragraph size="2xl" className="!text-white">
          پیام رسان آیریس
        </Paragraph>
        <Paragraph size="sm" className="!text-cyan-500">
          ورود به حساب کاربری
        </Paragraph>
      </header>

      <PhoneNumberInput />

      <Button
        onClick={() => {
          navigate("/chat");
        }}
        size="lg"
        className="text-white"
      >
        ورود
      </Button>
      <Paragraph className="mx-auto">
        حساب کاربری نداری داداش ؟
        <Button size="sm" variant="link">
          ثبت نام
        </Button>
      </Paragraph>
    </div>
  );
};

export default Login;
