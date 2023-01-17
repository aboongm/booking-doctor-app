import React from 'react';

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
        <div className="border d-flex align-center">
          <p>Sign in</p>
          <p>Register</p>
        </div>
      </div>
    </div>
  );

  return content;
};

export default Header;
