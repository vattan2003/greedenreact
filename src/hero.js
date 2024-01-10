import myImage from './assets/images/plant 1.webp';

function Hero() {
    return (
        <div className="hero">
        <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisic</p>
            <h1>Plants for your interior</h1>
            <button className="hero-btn">Shop now</button>
            <button className="hero-btn">Watch
                video</button>
            <p>100+ plant spices|100+clients</p>

        </div>
        <div>
            <img className='hero_img' src={myImage}></img>
        </div>
    </div>
    )
}
export default Hero