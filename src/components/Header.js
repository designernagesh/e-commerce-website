import Nav from "./Nav";
import organicPattern from '../images/organic-pattern-1.png';

const Header = () => {
    return (
        <div className="intro">
            <Nav /> 
            <div className='m-text'>
                <img src={organicPattern} alt="image" className="header-image" />
                <h2>Eat <font>Clean</font> and <font>Green</font>. Eat Organic</h2>
                <a className='m-btn' href="#">Products</a>
            </div>
      
        </div>
    )
}

export default Header;