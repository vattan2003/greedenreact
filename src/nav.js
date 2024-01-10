import Products from "./product"

function Nav() {
  return (

    <nav>
      <h1 className="head">Greeden</h1>

      {/* <div><i class="fa-solid fa-bars" onclick="slide_nav()"></i></div> */}

      <ul className="nav_option">
        <button className="nav_option_btn"><a href="">home</a></button>
        <button className="nav_option_btn"><a href="">product</a></button>
        <button className="nav_option_btn"><a href="">contact</a></button>
      </ul>
    </nav>
  )
}

export default Nav