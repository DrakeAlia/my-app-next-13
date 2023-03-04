import { delay } from "@component/lib/delay";
import HeaderLink from "./HeaderLink";



const Header =  async () => {
  await delay(5000)
  return (
    <header>
      Logo
      <div>
        <HeaderLink />
      </div>
    </header>
  );
};

export default Header;
