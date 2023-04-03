import { useEffect, useState } from "react";
// Navigations
import NavigationApp from "./NavigationApp";
import NavigationAuth from "./NavigationAuth";
import NavigationParents from "./NavigationParents";
import NavigationCoaches from "./NavigationCoaches";
import NavigationAdmins from "./NavigationAdmins";
// firebase
import { onAuthStateChangedListener, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
// redux
import { selectCurrentUser } from "../store/user/user.selector";
import { useSelector } from "react-redux";
import rols from "../utils/rols";

const NavigationController = () => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser);
  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        setIsUserLogin(true);
      } else {
        setIsUserLogin(false);
      }
    });
    return unSubscribe;
  }, []);
  if (!isUserLogin) {
    return <NavigationAuth />;
  } else if (currentUser.rol === rols.athlete) {
    return <NavigationApp />;
  } else if (currentUser.rol === rols.parent) {
    return <NavigationParents />;
  } else if (currentUser.rol === rols.bossCategoryCoach) {
    return <NavigationCoaches />;
  } else if (currentUser.rol === rols.admin) {
    return <NavigationAdmins />;
  } else {
    // Si no se cumple ninguna de las condiciones anteriores, podrías retornar una pantalla de error o redirigir a la página de inicio de sesión.
    return <NavigationAuth />;
  }
};

export default NavigationController;
