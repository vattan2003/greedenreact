import Products from "./product"

function Nav() {
  return (

    <nav>
      <h1 className="head">Greeden</h1>

       

      <ul className="nav_option">
        <button className="nav_option_btn"><a href="">home</a></button>
        <button className="nav_option_btn"><a href="">product</a></button>
        <button className="nav_option_btn"><a href="">contact</a></button>
      </ul>
      <div className="menubar"><i class="fa-solid fa-bars"></i></div>
    </nav>
  )
}

export default Nav