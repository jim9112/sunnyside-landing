const MainContent = () => {
  return (
    <div className="md:grid md:grid-cols-2">
      {/* egg image (transform) */}
      <div className="md:order-2 bg-mobile-egg md:bg-desktop-egg md:h-full h-80 w-full bg-no-repeat bg-cover bg-center"></div>
      {/* transform description */}
      <div className="md:order-1 px-6 py-16 lg:px-40 md:py-36 text-center">
        <h1 className="font-fraunces text-3xl mb-6">Transform your brand</h1>
        <p className="text-neutral-dark-greyish-blue font-barlow text-lg mb-8">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <div className="w-max m-auto group">
          <a
            className="relative z-10 px-2 font-fraunces text-neutral-very-dark-blue"
            href="">
            LEARN MORE
          </a>
          {/* color underline */}
          <div className="relative cursor-pointer hover:">
            <span className="absolute z-0 -top-3 block group-hover:bg-opacity-100 bg-primary-yellow rounded-full bg-opacity-20 w-full h-3"></span>
          </div>
        </div>
      </div>
      {/* stand out image */}
      <div className="md:order-3 bg-mobile-glass md:bg-desktop-glass md:h-full h-80 w-full bg-no-repeat bg-cover bg-center"></div>
      {/* stand out description */}
      <div className="md:order-4 px-6 py-16 md:py-36 lg:px-40 text-center">
        <h1 className="font-fraunces text-3xl mb-6">
          Stand out to the right audience
        </h1>
        <p className="text-neutral-dark-greyish-blue font-barlow text-lg mb-8">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <div className="w-max m-auto group">
          <a
            className="relative z-10 px-2 font-fraunces text-neutral-very-dark-blue"
            href="">
            LEARN MORE
          </a>
          {/* color underline */}
          <div className="relative cursor-pointer hover:">
            <span className="absolute z-0 -top-3 block group-hover:bg-opacity-100 bg-primary-soft-red rounded-full bg-opacity-20 w-full h-3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
