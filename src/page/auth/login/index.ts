import LoginEvent from "./login.event";

export default function onLogin() {
  const inputElements = document.querySelectorAll(
    ".input-form"
  ) as NodeListOf<HTMLInputElement>;
  let userModal: { [key: string]: string } = {};
  inputElements.forEach((input) => {
    if (input.name) {
      const { name, value } = input;
      userModal[name] = value;
    }
  });
  const loginEvent = new LoginEvent();
  loginEvent.onLoginEvent(userModal);
}
