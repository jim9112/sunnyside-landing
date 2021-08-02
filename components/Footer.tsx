import Image from 'next/image';
import logo from '../public/images/logo-dark.svg';
import facebookIcon from '../public/images/icon-facebook.svg';
import instagramIcon from '../public/images/icon-instagram.svg';
import pinterestIcon from '../public/images/icon-pinterest.svg';
import twitterIcon from '../public/images/icon-twitter.svg';

const Footer = () => {
  return (
    <div className="bg-primary-moderate-cyan pt-14 pb-20">
      <div className="w-44 h-9 relative mx-auto mb-10">
        <Image layout="fill" src={logo} alt="logo" />
      </div>

      <ul className="grid grid-flow-col justify-center gap-14 font-barlow text-lg text-primary-dark-cyan mb-20">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <ul className="grid grid-flow-col justify-center gap-7">
        <li>
          <Image src={facebookIcon} alt="Facebook Icon" />
        </li>
        <li>
          <Image src={instagramIcon} alt="Instagram Icon" />
        </li>
        <li>
          <Image src={twitterIcon} alt="Twitter Icon" />
        </li>
        <li>
          <Image src={pinterestIcon} alt="Pinterest Icon" />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
