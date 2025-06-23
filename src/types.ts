export type Feed = {
  id: string;
  user: {
    name: string;
    profilePic: string;
    timeAgo: string;
  };
  emoji: string;
  message: string;
};

export type Action = {
  icon: string;
  label: string;
};

export type ModalSize = "sm" | "md" | "lg";

export type AuthDetails = {
  username: string;
  password: string;
  repeatPassword?: string;
};