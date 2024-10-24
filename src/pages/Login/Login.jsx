import { useRef, useEffect } from "react"; // เพิ่ม useEffect
import { Form } from "react-bootstrap";
import { verifyUser } from "../../data/users";
import "./Login.css";

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();

  // ใช้ useEffect เพื่อทำให้ input ไม่โฟกัส
  useEffect(() => {
    if (userRef.current) {
      userRef.current.blur(); // ทำให้ input ไม่ได้รับโฟกัส
    }
  }, []);

  return (
    <div className="login-container">
      <Form>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            id="username"
            placeholder="user"
            style={{ textAlign: "center" }}
            ref={userRef}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            placeholder="pass"
            style={{ textAlign: "center" }}
            ref={passRef}
          />
        </Form.Group>
      </Form>
      <button
        className="btn btn-success mt-3"
        onClick={() => {
          const user = userRef.current.value.trim();
          const pass = passRef.current.value.trim();
          userRef.current.value = "";
          passRef.current.value = "";
          const userInfo = verifyUser(user, pass);
          if (userInfo === null) {
            alert("Wrong username or password");
            userRef.current.focus(); // กลับไปโฟกัสที่ username ถ้าผิด
          } else {
            setToken(userInfo.token);
            setRole(userInfo.role);
          }
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
