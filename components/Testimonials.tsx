import Image from 'next/image';
import emily from '../public/images/image-emily.jpg';
import thomas from '../public/images/image-thomas.jpg';
import jennie from '../public/images/image-jennie.jpg';
const Testimonials = () => {
  return (
    <div className="px-6 xl:px-36 py-16 text-center">
      <h1 className="text-neutral-greyish-blue md:text-xl">
        CLIENT TESTIMONIALS
      </h1>
      <div className="md:grid md:grid-cols-3 md:gap-7">
        {/* single client testimonial */}
        <div className="grid grid-flow-row place-items-center gap-8 pt-16">
          <div className="rounded-full overflow-hidden w-20 h-20 ">
            <Image src={emily} alt="emily" />
          </div>
          <p className="font-barlow text-neutral-very-dark-grayish-blue text-lg">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div>
            <h4 className="font-fraunces text-lg text-neutral-very-dark-blue mb-2">
              Emily R.
            </h4>
            <h5 className="font-barlow text-sm text-neutral-greyish-blue">
              Marketing Director
            </h5>
          </div>
        </div>

        {/* single client testimonial */}
        {/* thomas */}
        <div className="grid grid-flow-row place-items-center gap-8 pt-16">
          <div className="rounded-full overflow-hidden w-20 h-20 ">
            <Image src={thomas} alt="thomas" />
          </div>
          <p className="font-barlow text-neutral-very-dark-grayish-blue text-lg">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <div>
            <h4 className="font-fraunces text-lg text-neutral-very-dark-blue mb-2">
              Thomas S.
            </h4>
            <h5 className="font-barlow text-sm text-neutral-greyish-blue">
              Chief Operating Officer
            </h5>
          </div>
        </div>

        {/* single client testimonial */}
        {/* emily */}
        <div className="grid grid-flow-row place-items-center gap-8 pt-16">
          <div className="rounded-full overflow-hidden w-20 h-20 ">
            <Image src={jennie} alt="jennie" />
          </div>
          <p className="font-barlow text-neutral-very-dark-grayish-blue text-lg">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <div>
            <h4 className="font-fraunces text-lg text-neutral-very-dark-blue mb-2">
              Jennie F.
            </h4>
            <h5 className="font-barlow text-sm text-neutral-greyish-blue">
              Business Owner
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
