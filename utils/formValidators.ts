export const validEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const validUsername = (username: string) =>
  /^[a-zA-Z0-9_\.]{3,15}$/.test(username);

export const validPassword = (password: string) =>
  /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,16}$/.test(
    password
  );

export const validPhoneNumber = (phoneNumber: string) =>
  /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phoneNumber);

export const validName = (name: string) =>
  /^[A-Za-z]+(([,.] |[ '-])[A-Za-z]+)*([.,'-]?){2,30}$/.test(name);

export const trimSpace = (value: string) => value.replace(/\s/g, "");
