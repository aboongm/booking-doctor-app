import Navbar from './Nav/NavBar';

const Header = () => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(event.target);
  // };

  // const handleSearchIcon = (event) => {
  //   const searchForm = document.getElementById('searchForm');
  //   const searchIcon = document.getElementById('searchIcon');
  //   const navLinks = document.getElementById('navLinks');
  //   searchForm.classList.remove('d-none');
  //   searchIcon.classList.add('d-none');
  //   navLinks.classList.add('d-none');
  //   console.log(searchForm);
  // };

  // const content = (
  //   <div className="container mx-auto border bg-gray d-flex align-items-center justify-content-center">
  //     <div className="border flex-grow-1">logo</div>
  //     <div className="d-flex align-items-center justify-content-between">
  //       <div>
  //         <form
  //           className="search-form  d-none mr-lg d-flex align-items-center justify-content-center"
  //           onSubmit={handleSubmit}
  //           id="searchForm"
  //         >
  //           <label className="search-form sr-only" htmlFor="search-term">
  //             Search
  //           </label>
  //           <div className="search-form__wrapper d-flex">
  //             <input
  //               type="search"
  //               className="search-form__field"
  //               placeholder="Search…"
  //               value=""
  //               name="search-term"
  //               id="search-term"
  //             />
  //             <input
  //               type="submit"
  //               className="btn btn-outline-blue "
  //               value="Find"
  //             />
  //           </div>
  //         </form>
  //       </div>
  //       <div
  //         className="border d-flex align-items-center text-black"
  //         id="navLinks"
  //       >
  //         <p className="mx-0 mb-0 mt-1 px-3 pt-2 pb-3 h6">What We Treat</p>
  //         <p className="mx-0 mb-0 mt-1 px-3 pt-2 pb-3 h6">Solutions</p>
  //         <p className="mx-0 mb-0 mt-1 px-3 pt-2 pb-3 h6">Medicare</p>
  //         <p className="mx-0 mb-0 mt-1 px-3 pt-2 pb-3 h6">About Us</p>
  //       </div>
  //       <div className="px-4" id="searchIcon" onClick={handleSearchIcon}>
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           width="24"
  //           height="24"
  //           fill="currentColor"
  //           class="bi bi-search"
  //           viewBox="0 0 16 16"
  //         >
  //           <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
  //         </svg>
  //       </div>
  //       <Navbar />
  //     </div>
  //   </div>
  // );
  const content = (
    <nav className="">
      <div className="max-w-5xl mx-auto py-4 px-3">
        <div className="flex justify-between items-center">
          <div>
            <a href="#">
              <img
                width="200"
                src="data:image/png;base64,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"
                alt=""                
              ></img>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-10 font-medium text-[#044c7c]">
            <div>
              <a href="#" className="flex items-center space-x-3">
                <p>What We Treat</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="4"
                  stroke="#EEAB56"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="flat"
                    stroke-linejoin="flat"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
            </div>
            <div>
              <a href="#">Solutions</a>
            </div>
            <div>
              <a href="#">Medicare</a>
            </div>
            <div>
              <a className="flex items-center space-x-3" href="#">
                <p>About Us</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="4"
                  stroke="#EEAB56"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="flat"
                    stroke-linejoin="flat"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
            </div>
            <div>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 text-[#004A7D] "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </a>
            </div>
            <div>
              <a href="#">Sign in</a>
            </div>
            <div class="bg-[#044C7C] text-white text-extrabold p-3">
              <a href="#">Register</a>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <div class="md:hidden flex items-center px-3">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="#044C7C"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="square"
                  stroke-linejoin="square"
                  d="M3.75 2h16M3.75 9h16m-16 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
  return content;
};

export default Header;
