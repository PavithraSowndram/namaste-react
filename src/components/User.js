import { useEffect, useState } from "react";

const User = (props) => {
  const { name, location, contact } = props;
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <div>
      <h1>Author name:{name}</h1>
      <h2>Location{location}</h2>
      <h3>Contact{contact}</h3>
      <h4>Count{count}</h4>
    </div>
  );
};
export default User;
