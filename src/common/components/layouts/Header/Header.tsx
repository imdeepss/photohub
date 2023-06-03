import Link from "next/link";
import { SearchInput } from "../../form";
import { PhotoHubLogo } from "../../icons";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-4 w-full md:py-5 shadow-md md:px-20 gap-2 flex-col md:flex-row">
      <Link href="/">
        <PhotoHubLogo />
      </Link>
      <SearchInput />
    </header>
  );
};

export default Header;
