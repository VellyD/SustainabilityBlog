import "./formData.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";
import * as authService from "../../services/authService";

export const Logout = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthContext();

  useEffect(() => {
    authService.logout(user.accessToken).then((res) => {
      logout();
      navigate("/");
    });
  }, [logout, navigate, user.accessToken]);

  return null;
};
