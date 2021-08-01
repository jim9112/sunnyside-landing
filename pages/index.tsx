import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ImageGallery from '../components/ImageGallery';
import MainContent from '../components/MainContent';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div>
      <Header />
      <MainContent />
      <Services />
      <Testimonials />
      <ImageGallery />
      <Footer />
    </div>
  );
}
