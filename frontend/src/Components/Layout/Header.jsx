import Navbar from './Nav/NavBar';

const Header = () => {
  const content = (
    <div className="container mx-auto border bg-gray d-flex align-center justify-content-center">
      <div className="border flex-grow-1">logo</div>
      <div className="d-flex align-center justify-content-between">
        <div className="border d-flex ">
          <p>What We Treat</p>
          <p>Solutions</p>
          <p>Medicare</p>
          <p>MedicareAbout Us</p>
        </div>
        <div className="border">search</div>
        <Navbar />
      </div>
    </div>
  );

  return content;
};

export default Header;
