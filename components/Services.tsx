const Services = () => {
  return (
    <div className="md:grid md:grid-cols-2">
      <div className="lg:px-40 bg-mobile-cherry md:bg-desktop-cherry bg-no-repeat bg-cover bg-center pt-96 px-6 pb-12 text-primary-dark-cyan text-center">
        <h1 className="font-fraunces text-3xl mb-7">Graphic Design</h1>
        <p className="font-barlow text-base">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </div>
      <div className="lg:px-40 bg-mobile-orange md:bg-desktop-orange bg-no-repeat bg-cover bg-center pt-96 px-6 pb-12 text-primary-dark-blue text-center">
        <h1 className="font-fraunces text-3xl mb-7">Photography</h1>
        <p className="font-barlow text-base">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </div>
  );
};

export default Services;
