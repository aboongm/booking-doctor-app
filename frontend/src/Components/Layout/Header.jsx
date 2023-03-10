import Navbar from './Nav/NavBar';

const Header = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  const handleSearchIcon = (event) => {
    const searchForm = document.getElementById('searchForm');
    const searchIcon = document.getElementById('searchIcon');
    const navLinks = document.getElementById('navLinks');
    searchForm.classList.remove('d-none');
    searchIcon.classList.add('d-none');
    navLinks.classList.add('d-none');
    console.log(searchForm);
  };

  const content = (
    <div className="container mx-auto border bg-gray d-flex align-items-center justify-content-center">
      <div className="border flex-grow-1">logo</div>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <form
            className="search-form  d-none mr-lg d-flex align-items-center justify-content-center"
            onSubmit={handleSubmit}
            id="searchForm"
          >
            <label className="search-form sr-only" htmlFor="search-term">
              Search
            </label>
            <div className="search-form__wrapper d-flex">
              <input
                type="search"
                className="search-form__field"
                placeholder="Search…"
                value=""
                name="search-term"
                id="search-term"
              />
              <input
                type="submit"
                className="btn btn-outline-blue "
                value="Find"
              />
            </div>
          </form>
        </div>
        <div
          className="border d-flex align-items-center text-black"
          id="navLinks"
        >
          <p className="mx-0 mb-0 mt-1 px-3 pt-2 pb-3 h6">What We Treat</p>
          <p className="mx-0 mb-0 mt-1 px-3 pt-2 pb-3 h6">Solutions</p>
          <p className="mx-0 mb-0 mt-1 px-3 pt-2 pb-3 h6">Medicare</p>
          <p className="mx-0 mb-0 mt-1 px-3 pt-2 pb-3 h6">About Us</p>
        </div>
        <div className="px-4" id="searchIcon" onClick={handleSearchIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
        <Navbar />
      </div>
    </div>
  );

  return content;
};

export default Header;
