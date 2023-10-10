import onLogin from ".";
import "./login.css";

export default function Login() {
  return (
    <div className="form-container">
      <form>
        <h2>Đăng nhập</h2>
        <hr />
        <label htmlFor="email">Email:</label>
        <input
          className="input-form"
          type="email"
          name="email"
          placeholder="Email"
        />
        <p className="error" id="error-email" />
        <label htmlFor="password">Mật khẩu:</label>
        <input
          className="input-form"
          type="password"
          name="password"
          placeholder="Mật khẩu"
        />
        <p className="error" id="error-password" />
        <div id="btn-form-login">
          <button type="button" onClick={onLogin}>Đăng nhập</button>
        </div>
        <p id="navigation">
          Bạn chưa đăng ký tài khoản?
          <a href="/regisert.html">Đăng ký</a>
        </p>
      </form>
    </div>
  );
}
