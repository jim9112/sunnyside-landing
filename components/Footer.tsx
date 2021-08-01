import Image from 'next/image';
import logo from '../public/images/logo.svg';

const Footer = () => {
  return (
    <div className="bg-primary-moderate-cyan">
      <div>
        <Image src={logo} alt="logo" />
      </div>

      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
    </div>
  );
};

export default Footer;
