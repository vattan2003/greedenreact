
import one from "./assets/images/plant 1.webp"
import two from "./assets/images/plant 2.webp"
import three from "./assets/images/plant 3.avif"
import four from "./assets/images/plant.jpg"
import five from "./assets/images/pot7.webp"
import six from "./assets/images/pot8.webp"

function Products() {
    return(
        <div className="product">
           
      <section className="sec1">
        <div className="card-div">
       
            <img className="product_card"  src={one}></img>
            <p>Rose plant</p>
            <p> ₹299(<del> ₹499</del>)</p>
        </div>
        <div className="card-div">
            <img className="product_card"  src={two}></img>
            <p> Sun Flower plant</p>
            <p >₹399(<del> ₹549</del>)</p>
        </div>
        <div className="card-div" >
            <img className="product_card" src={three}></img>
            <p> Flower plant</p>
            <p >₹399(<del> ₹619</del>)</p>
        </div>
        </section>
        <section className="sec2">
        <div className="card-div">
            <img  className="product_card" src={four}></img>
            <p> Flower plant</p>
            <p >₹399(<del> ₹619</del>)</p>
        </div>
        <div className="card-div">
            <img  className="product_card" src={five}></img>
            <p> Flower plant</p>
            <p >₹399(<del> ₹619</del>)</p>
        </div>
        <div className="card-div">
            <img  className="product_card" src={six}></img>
            <p> Flower plant</p>
            <p >₹399(<del> ₹619</del>)</p>
        </div>
        </section>
    </div>
    )
}
export default Products







