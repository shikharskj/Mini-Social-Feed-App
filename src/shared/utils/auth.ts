const getStoredCredentials = () => {
  return JSON.parse(localStorage.getItem("CREDENTIALS") || 'false') || {};
};

const saveCredentials = (credentials: Record<string, string>) => {
  localStorage.setItem("CREDENTIALS", JSON.stringify(credentials));
};

const setAuthState = (state: boolean) => {
  localStorage.setItem("IS_AUTHENTICATED", state ? "true" : "false");
};

const handleSignUp = (loginDetails: {
  username: string;
  password: string;
  repeatPassword?: string;
}) => {
  const { username, password, repeatPassword } = loginDetails;
  const storedCredentials = getStoredCredentials();

  if (!username || !password || !repeatPassword) {
    return {
      success: false,
      message: "All fields are required for sign up.",
    };
  }

  if (password !== repeatPassword) {
    return {
      success: false,
      message: "Password and repeat password should be the same.",
    };
  }

  if (Object.prototype.hasOwnProperty.call(storedCredentials, username)) {
    return {
      success: false,
      message: "Username or email already exists.",
    };
  }

  const updatedCredentials = { ...storedCredentials, [username]: password };
  saveCredentials(updatedCredentials);
  setAuthState(true);

  return {
    success: true,
    message: "Account created successfully. You are now logged in.",
  };
};

const handleLogin = (loginDetails: {
  username: string;
  password: string;
}) => {
  const { username, password } = loginDetails;
  const storedCredentials = getStoredCredentials();

  if (!username || !password) {
    return {
      success: false,
      message: "Username and password are required.",
    };
  }

  const storedPassword = storedCredentials[username];

  if (!storedPassword) {
    setAuthState(false);
    return {
      success: false,
      message: "No account found with this username. Please sign up.",
    };
  }

  if (storedPassword !== password) {
    setAuthState(false);
    return {
      success: false,
      message: "Incorrect password. Please try again.",
    };
  }

  setAuthState(true);
  return {
    success: true,
    message: "Login successful.",
  };
};

export const userAuthHandler = (
  loginDetails: {
    username: string;
    password: string;
    repeatPassword?: string;
  },
  isSignUpMode = false
) => {
  return isSignUpMode
    ? handleSignUp(loginDetails)
    : handleLogin(loginDetails);
};