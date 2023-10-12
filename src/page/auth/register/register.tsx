import "./register.css";
import RegisterEvent from "./register.event";
export default function Register() {
  return (
    <div className="form-container">
      <form>
        <h2>Đăng ký thành viên</h2>
        <hr />
        <label htmlFor="text">Họ và tên: </label>
        <input
          className="input-form"
          type="text"
          name="fullname"
          placeholder="Họ và tên"
        />
        <p className="error" id="error-fullname" />
        <label htmlFor="email">Email:</label>
        <input
          className="input-form"
          type="email"
          name="email"
          placeholder="Email"
        />
        <p className="error" id="error-email" />
        <label htmlFor="phone">Số điện thoại:</label>
        <input
          className="input-form"
          type="number"
          name="phone"
          placeholder="Số điện thoại"
        />
        <p className="error" id="error-phone" />
        <label htmlFor="password">Mật khẩu:</label>
        <input
          className="input-form"
          type="password"
          name="password"
          placeholder="Mật khẩu"
        />
        <p className="error" id="error-password" />
        <label htmlFor="password">Nhập lại mật khẩu:</label>
        <input
          className="input-form"
          type="password"
          name="repeatPassword"
          placeholder="Nhập lại mật khẩu"
        />
        <p className="error" id="error-repeatPassword" />
        <div id="btn-form-login">
          <button type="button" onClick={handleRegister}>
            Đăng ký
          </button>
        </div>
        <p id="navigation">
          Bạn đã dăng ký tài khoản?
          <a href="/pages/auth/login/index.html">Đăng nhập</a>
        </p>
      </form>
    </div>
  );
}
// lấy dữ liệu từ form
function handleRegister() {
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
  registerEvent.onRegister(userModal);
}
