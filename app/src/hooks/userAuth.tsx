// React
import { useContext } from "react";

// Contextos
import { AuthContext } from "../contexts/AuthContext";

export function UserAuth() {
  const value = useContext(AuthContext);

  return value;
}