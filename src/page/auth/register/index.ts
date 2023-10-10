import RegisterEvent from "./register.event";

export default function onRegister() {
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
  const registerEvent = new RegisterEvent();
  registerEvent.onRegisterEvent(userModal);
}
