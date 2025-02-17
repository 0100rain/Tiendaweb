import { useState } from "react";
import { Layout } from "../components/Layout";
import { login, logout, loginWithEmail, registerWithEmail } from "../config/auth";
import { useAuth } from "../context/UserContext.jsx";

const Login = () => {
  const { user, setUser } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const loggedInUser = await login();
      setUser(loggedInUser);
    } catch (error) {
      console.error("Error de autenticación:", error);
      setError("Error al iniciar sesión con Google.");
    }
  };

  const handleEmailLogin = async () => {
    try {
      const loggedInUser = await loginWithEmail(email, password);
      setUser(loggedInUser);
      setError(null);
    } catch (error) {
      console.error("Error de autenticación:", error);
      setError("Correo o contraseña incorrectos.");
    }
  };

  const handleRegister = async () => {
    try {
      const registeredUser = await registerWithEmail(name, email, password);
      setUser(registeredUser);
      setError(null);
    } catch (error) {
      console.error("Error de registro:", error);
      setError("No se pudo crear la cuenta. Verifica los datos.");
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div className="container is-flex is-justify-content-center is-align-items-center" style={{ height: "100vh" }}>
        <div className="box has-text-centered">
          <h1 className="title">Iniciar sesión</h1>
          {user ? (
            <div>
              <figure className="image is-128x128 is-inline-block">
                <img className="is-rounded" src={user.photoURL} alt="Avatar" />
              </figure>
              <p className="subtitle">Bienvenido, {user.displayName}</p>
              <button className="button is-danger is-fullwidth" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </div>
          ) : (
            <div>
              <button className="button is-primary is-fullwidth" onClick={handleLogin}>
                <span className="icon">
                  <i className="fab fa-google"></i>
                </span>
                <span>Iniciar sesión con Google</span>
              </button>
              <hr />
              <div className="field">
                <label className="label">Nombre y Apellido</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Ingresa tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Correo electrónico</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="Ingresa tu correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Contraseña</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              {error && <p className="has-text-danger">{error}</p>}
              <button className="button is-link is-fullwidth" onClick={handleEmailLogin}>
                Iniciar sesión con Email
              </button>
              <button className="button is-success is-fullwidth mt-2" onClick={handleRegister}>
                Registrarse
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export { Login };
