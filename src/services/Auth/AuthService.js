import httpClient from "../../util/http-common";

const login = (data) =>
  httpClient.post("/auth/Login", data, {
    headers: {
      "content-type": "application/json",
    },
  });

const AuthService = {
  login,
};

export default AuthService;
