const MainContent = () => {
  return (
    <div>
      {/* egg image (transform) */}
      <div className="bg-mobile-egg h-80 w-full bg-no-repeat bg-cover bg-center"></div>
      {/* transform description */}
      <div className="px-6 py-16 text-center">
        <h1 className="font-fraunces text-3xl mb-6">Transform your brand</h1>
        <p className="text-neutral-dark-greyish-blue font-barlow text-lg mb-8">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <a className="font-fraunces text-neutral-very-dark-blue" href="">
          LEARN MORE
        </a>
      </div>
      {/* stand out image */}
      <div className="bg-mobile-glass h-80 w-full bg-no-repeat bg-cover bg-center"></div>
      {/* stand out description */}
      <div className="px-6 py-16 text-center">
        <h1 className="font-fraunces text-3xl mb-6">
          Stand out to the right audience
        </h1>
        <p className="text-neutral-dark-greyish-blue font-barlow text-lg mb-8">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <a className="font-fraunces text-neutral-very-dark-blue" href="">
          LEARN MORE
        </a>
      </div>
    </div>
  );
};

export default MainContent;
