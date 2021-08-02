import Image from 'next/image';
import cone from '../public/images/desktop/image-gallery-cone.jpg';
import milkBottles from '../public/images/desktop/image-gallery-milkbottles.jpg';
import orange from '../public/images/desktop/image-gallery-orange.jpg';
import sugarCubes from '../public/images/desktop/image-gallery-sugarcubes.jpg';
const ImageGallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      <div className="relative">
        <Image src={milkBottles} alt="milk bottles" layout="responsive" />
      </div>
      <div className="relative">
        <Image src={orange} alt="orange" layout="responsive" />
      </div>
      <div>
        <Image src={cone} alt="ice cream cone" layout="responsive" />
      </div>
      <div>
        <Image src={sugarCubes} alt="sugar cubes" layout="responsive" />
      </div>
    </div>
  );
};

export default ImageGallery;
