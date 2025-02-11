import Logo from '/movapi-logo.jpg'


const MovAPIeLogo = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative flex items-center">
        <a href="/">
        <img src={Logo} alt="MovAPIe Logo" className="h-30 w-full" />
        </a>
            </div>
          </div>
  );
};

export default MovAPIeLogo;
