import SigninLogo from "../../../assets/log-in-2.svg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation(); // gives access to current path
  const isLoginPage = location.pathname === "/login";
  const isLoggedin = JSON.parse(
    localStorage.getItem("IS_AUTHENTICATED") ?? "false"
  );

  const handleLogout = () => {
    localStorage.setItem("IS_AUTHENTICATED", JSON.stringify(false));
    navigate("/");
  };

  return (
    <div>
      {!isLoggedin && !isLoginPage && (
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 cursor-pointer hover:bg-slate-200 hover:shadow-md rounded py-1.5 px-2"
        >
          {" "}
          Login
          <span>
            <img src={SigninLogo} alt="sign-in icon" />
          </span>
        </button>
      )}

      {isLoggedin && (
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 cursor-pointer hover:bg-slate-200 hover:shadow-md rounded py-1.5 px-2"
        >
          Log-out
        </button>
      )}
      {isLoginPage && (
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer hover:bg-slate-200 hover:shadow-md rounded py-1.5 px-2"
        >
          Back to home
        </button>
      )}
    </div>
  );
};

export default Login;
