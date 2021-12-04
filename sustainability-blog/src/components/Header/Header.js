import "./header.css";

export const Header = () => {
  return (
    <header>
      <div className="container_12">
        <div className="grid_12">
          <h1>
            <a href="/"></a>
          </h1>
          <div className="slogan">
            The sustainable blog. Share your experience!
          </div>
        </div>
      </div>
      <div className="clear"></div>
      <div className="menu_block">
        <div class="container_12">
          <div class="grid_12">
            <nav class="horizontal-nav full-width horizontalNav-notprocessed">
              <ul class="sf-menu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/products">Products</a>
                </li>
                <li>
                  <a href="/login">Login</a>
                </li>
                <li>
                  <a href="/register">Register</a>
                </li>

                {/* <li><a href="">Welcome, Name </a></li>
								<li><a href="">My Posts</a></li>
								<li><a href="">Logout</a></li> */}
              
			  </ul>
            </nav>
            <div className="clear"></div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </header>
  );
};
