import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";

export const useAuth = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          history.push("/home");
          if (res.data) {
          } else {
            alert("ユーザーが見つかりません");
          }
        })
        .catch(() => alert("ログインができません"))
        .finally(() => setLoading(false));
    },
    [history]
  );
  return { login, loading };
};
