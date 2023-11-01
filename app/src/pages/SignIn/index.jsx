import { useDispatch } from "react-redux";
import iconUser from "../../assets/img/icon-user.png";
import { USER_LOGIN, login } from "../../reducers/user.slice";
import { useRef } from "react";
import { useNavigate } from "react-router";

function SignIn() {
  const form = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormLogIn = async (e) => {
    e.preventDefault();
    console.log(e);

    let userID = {
      email: form.current[0].value,
      password: form.current[1].value,
    };
    console.log(userID);
    dispatch(login(userID)).then((result) => {
      if (result.payload) {
        dispatch(USER_LOGIN(result.payload));
        form.current.reset();
        navigate("/user");
      }
    });
  };

  return (
    <div className="display-flex">
      <main className="main bg-dark">
        <section className="sign-in-content">
          <img
            className="sign-in-icon"
            src={iconUser}
            alt="Icone utilisateur"
          />
          <h1>Sign In</h1>
          <form ref={form} onSubmit={(e) => handleFormLogIn(e)}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default SignIn;
