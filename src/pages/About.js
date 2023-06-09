import aboutImage from '../images/organic-about-1.png';

const About = () => {
    return (
        <div className='about'>
            <div className='about-img'>
                <img src={aboutImage} alt="image" />
            </div>
            <div className='about-text'>
                <h3>Fresh Food, Simply <font>Delicious</font></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur, eros a dapibus ullamcorper, arcu purus accumsan nunc, nec imperdiet leo lacus sit amet urna. Etiam eu ornare tellus. Praesent sed neque dapibus, ultrices risus in, convallis turpis. Curabitur ornare mauris in pulvinar viverra. Suspendisse elementum, massa molestie blandit lobortis, erat lectus dignissim enim, vel consectetur magna odio in lacus. Fusce commodo et ex vel scelerisque. </p>
                <a className='m-btn' href="#" style={{marginLeft: '0'}}>Read More</a>
            </div>
        </div>
    )
}

export default About;