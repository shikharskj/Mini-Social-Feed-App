import { useState, type ChangeEvent } from "react";
import Modal from "../Modal";
import LoginIcon from "../../../assets/log-in-2.svg";
import { userAuthHandler } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import type { AuthDetails } from "../../../types";

type UserAuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  isSignInSignUpPage?: boolean;
};

type InputFieldProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = ({ label, ...props }: InputFieldProps) => (
  <div className="w-full text-start text-[14px] font-bold">
    <label className="block mb-1">{label}</label>
    <input
      className="w-full py-2 px-4 rounded border-none bg-slate-100 outline-none font-light"
      {...props}
    />
  </div>
);

const UserAuthModal = ({
  isOpen,
  onClose,
  isSignInSignUpPage = false,
}: UserAuthModalProps) => {
  const [isSignUpMode, setIsSignUpMode] = useState<boolean>(false);
  const [loginDetails, setLoginDetails] = useState<AuthDetails>({
    username: "",
    password: "",
    repeatPassword: "",
  });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginDetails((prev) => ({ ...prev, [name]: value }));
  };

  const resetError = () => setError("");

  const toggleMode = () => {
    setIsSignUpMode((prev) => !prev);
    resetError();
  };

  const handleSubmit = () => {
    // setting isAuthenticated to true in localStorage
    const { success, message } = userAuthHandler(loginDetails, isSignUpMode);
    if (success) {
      onClose();
      resetError();
      if (isSignInSignUpPage) {
        navigate("/"); // navigate to feeds home page if we were on login-page
      }
    } else {
      setError(message);
    }
  };

  console.log("path = ", window.location.pathname);

  const isSubmitDisabled = isSignUpMode
    ? !(
        loginDetails.username &&
        loginDetails.password &&
        loginDetails.repeatPassword
      )
    : !(loginDetails.username && loginDetails.password);

  const content = (
    <div className="w-full space-y-4 mb-10">
      <div className="flex flex-col justify-center items-center mb-12">
        <div className="mb-5 p-2.5 pr-3.5 bg-slate-100 rounded-full">
          <img src={LoginIcon} alt="login-icon" />
        </div>
        <div className="text-[20px] font-bold">
          {isSignUpMode ? "Create an account" : "Sign in to continue"}
        </div>
        <div className="text-[14px] text-slate-500">
          {isSignUpMode
            ? "Create an account to access all the features on this app"
            : "Sign in to access all the features on this app"}
        </div>
      </div>

      <InputField
        label="Email or Username"
        name="username"
        value={loginDetails.username}
        onChange={onInputChange}
        onFocus={resetError}
        placeholder="Enter your email or username"
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        value={loginDetails.password}
        onChange={onInputChange}
        onFocus={resetError}
        placeholder="Enter your password"
      />
      {isSignUpMode && (
        <InputField
          label="Repeat Password"
          name="repeatPassword"
          type="password"
          value={loginDetails.repeatPassword}
          onChange={onInputChange}
          onFocus={resetError}
          placeholder="Re-enter your password"
        />
      )}

      {error && (
        <div className="mt-2 w-full text-[12px] rounded px-5 text-red-600">
          {error}
        </div>
      )}
    </div>
  );

  const footerContent = (
    <div className="text-sm">
      {isSignUpMode ? "Already have an account?" : "Don't have an account?"}
      <button
        onClick={toggleMode}
        className="hover:bg-indigo-200 cursor-pointer rounded py-1 px-2 text-[#5057EA] font-bold ml-1"
      >
        {isSignUpMode ? "Sign In" : "Sign Up"}
      </button>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      submitDisabled={isSubmitDisabled}
      onSubmit={handleSubmit}
      footerContent={footerContent}
      whiteBackgroundLayover={isSignInSignUpPage}
    >
      {content}
    </Modal>
  );
};

export default UserAuthModal;
