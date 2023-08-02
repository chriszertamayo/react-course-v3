
import heroImg from './assets/hero.svg'

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero-center'>
                <div className='hero-title'>
                    <h1>Contentful CMS</h1>
                    <p>
                        Crucifix keffiyeh Brooklyn knausgaard four dollar toast austin pitchfork tilde. Kitsch flannel meh pop-up ennui. Cray succulents trust fund chicharrones mustache typewriter, hot chicken coloring book flannel seitan tofu hell of bitters vibecession. Roof party big mood cray air plant cupping polaroid kitsch street art glossier heirloom try-hard next level scenester.
                    </p>
                </div>
                <div className="img-container">
                    <img src={heroImg} alt="woman and the browser" />
                </div>
            </div>
        </section>
    )
}

export default Hero
