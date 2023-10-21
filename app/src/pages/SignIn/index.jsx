import iconUser from "../../assets/img/icon-user.png";

function SignIn() {
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
            <form>
                <div className="input-wrapper">
                <label for="username">Username</label>
                <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label for="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>
      </div>
    );
}
  
  export default SignIn;