const MobileMenuModal = ({ toggleModal }: { toggleModal: () => void }) => {
  return (
    <div
      id="modalOuter"
      className="fixed z-10 top-0 left-0 w-full min-h-screen pt-20 px-10"
      onClick={(e) => {
        const target = e.target as HTMLDivElement;
        if (target.id === 'modalOuter' || target.nodeName === 'LI') {
          toggleModal();
        }

        console.log(target.nodeName);
      }}>
      <div className="grid">
        <div
          style={{
            borderBottomWidth: '25px',
            borderLeftWidth: '25px',
            borderLeftColor: 'transparent',
          }}
          className="w-0 h-0 border-neutral-white justify-self-end"></div>
        <div className="bg-neutral-white">
          <ul className="text-center py-14 font-barlow text-neutral-dark-greyish-blue text-xl space-y-5">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuModal;
