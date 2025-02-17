import { auth } from "./firebase";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile,GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Proveedor de autenticación con Google
const googleProvider = new GoogleAuthProvider();

// Función para iniciar sesión con Google
const login = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user; // Devuelve el usuario autenticado
  } catch (error) {
    console.error("Error al iniciar sesión con Google:", error);
    throw error;
  }
};

// Función para cerrar sesión
const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    throw error;
  }
};

 const registerWithEmail = async (name, email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  await updateProfile(user, { displayName: name });
  return { uid: user.uid, email: user.email, displayName: name };
};

 const loginWithEmail = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  return { uid: user.uid, email: user.email, displayName: user.displayName };
};



export { login, logout ,registerWithEmail,loginWithEmail}