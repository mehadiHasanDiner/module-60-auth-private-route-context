import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <p>
        This is home{" "}
        {user && <span className="font-bold">{user.displayName}</span>}
      </p>
    </div>
  );
};

export default Home;
