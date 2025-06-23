export const alertNotImplemented = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem("IS_AUTHENTICATED") || 'false');
  if (isLoggedIn) window.alert("Functionality not implemented! ☹️");
};
