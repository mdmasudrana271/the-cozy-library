import { useEffect, useState } from "react";

const useToken = (email) => {
  console.log(email)
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem("bookAccessToken", data.accessToken);
            setToken(data.accessToken);
          }
          console.log(data)
        });
    }
  }, [email]);
  return [token];
};

export default useToken;
