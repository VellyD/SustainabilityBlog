import "./formData.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import * as authService from "../../services/authService";
import { useContext } from "react/cjs/react.development";

export const Logout = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    authService.logout(user.accessToken).then((res) => {
      logout();
      navigate("/");
    });
  }, [logout, navigate, user.accessToken]);

  return null;
};
