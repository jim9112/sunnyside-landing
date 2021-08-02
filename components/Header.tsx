import Image from 'next/image';
import logo from '../public/images/logo.svg';
import arrow from '../public/images/icon-arrow-down.svg';
import hamburger from '../public/images/icon-hamburger.svg';
import MobileMenuModal from './MobileMenuModal';
import { useState } from 'react';

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    modalOpen ? setModalOpen(false) : setModalOpen(true);
  };

  return (
    <header className="w-full bg-no-repeat bg-cover bg-center bg-mobile-header md:bg-desktop-header pt-8 px-10">
      {modalOpen && <MobileMenuModal toggleModal={toggleModal} />}
      <div className="grid grid-flow-col">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <nav className="">
          <div className="grid grid-flow-col justify-end md:hidden">
            <Image
              className="cursor-pointer"
              src={hamburger}
              alt="hamburger menu"
              onClick={toggleModal}
            />
          </div>
          <ul className="font-barlow text-lg hidden md:grid grid-flow-col justify-end gap-11 text-neutral-white">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className="pt-28 pb-40 md:pb-80 w-full grid place-items-center">
        <h1 className="font-fraunces text-4xl md:text-5xl tracking-widest mb-24 text-neutral-white text-center">
          WE ARE CREATIVES
        </h1>
        <div>
          <Image src={arrow} alt="down arrow" />
        </div>
      </div>
    </header>
  );
};

export default Header;
