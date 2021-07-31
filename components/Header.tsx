import Image from 'next/image';
import logo from '../public/images/logo.svg';

const Header = () => {
  return (
    <header className="w-full h-96 bg-no-repeat bg-fill bg-desktop-header pt-8 px-10">
      <div className="grid grid-flow-col">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <nav className="">
          <ul className="font-barlow text-lg grid grid-flow-col justify-end gap-11 text-neutral-white">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
