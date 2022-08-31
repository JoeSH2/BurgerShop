import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export function useAuth() {
  const { email, token, id, name, phone } = useSelector(
    (state: RootState) => state.user
  );

  return {
    isAuth: !!email,
    email,
    token,
    id,
    name,
    phone,
  };
}
