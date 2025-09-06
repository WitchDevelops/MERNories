import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { RateLimitedInfo } from "../components/RateLimitedInfo";

const HomePage = () => {
  const [isRateLimited, setRateLimited] = useState(true);

  return (
    <div data-theme="dracula">
      <Navbar />
      {isRateLimited && <RateLimitedInfo />}
    </div>
  );
};

export default HomePage;
