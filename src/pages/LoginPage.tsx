import { useState } from "react";
import UserAuthModal from "../shared/components/UserAuthModal";

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <UserAuthModal
        isOpen={isOpen}
        onClose={handleClose}
        isSignInSignUpPage={true}
      />
    </div>
  );
};

export default LoginPage;
