import { FaSearch } from 'react-icons/fa';

const Nav = () => {
    return (
        <>
            <div className='logo'>
                <a href="#"> ECommerce</a>
            </div>

            <div className='side-box'>
                <div className='search'>
                    <FaSearch />
                    <input placeholder='Search Food' type='text' />
                </div>
            </div>
        </>
    )
}

export default Nav;