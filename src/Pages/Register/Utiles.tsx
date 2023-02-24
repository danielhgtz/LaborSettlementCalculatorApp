import React from "react";

export const OnChangeUsername = (
  e: React.ChangeEvent<HTMLInputElement>,
  setUsername: {
    (value: React.SetStateAction<string>): void;
    (arg0: string): void;
  }
) => {
  if (!/\s/.test(e.target.value)) {
    setUsername(e.target.value);
  } else {
    alert("Username can't contain spaces :(");
    setUsername("");
  }
};

export const OnChangeEmail = (
  e: React.ChangeEvent<HTMLInputElement>,
  setEmail: {
    (value: React.SetStateAction<string>): void;
    (arg0: string): void;
  }
) => {
  if (!/\s/.test(e.target.value)) {
    setEmail(e.target.value);
  } else {
    alert("Email can't contain spaces :(");
    setEmail("");
  }
};

export const OnBlurPassword = (
  password: any,
  setPassword: (arg0: string) => void
) => {
  if (password.length < 8) {
    alert("Password must be between 8-16 characters long");
    setPassword("");
  }
  if (/\s/.test(password)) {
    alert("Password can't contain spaces :(");
    setPassword("");
  }
  if (!/\d/.test(password)) {
    alert("Password must contain at least one number :(");
    setPassword("");
  }
  if (!/[A-Z]/.test(password)) {
    alert("Password must contain at least one capital letter :(");
    setPassword("");
  }
};
