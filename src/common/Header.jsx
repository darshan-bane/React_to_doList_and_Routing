import { Link } from "react-router-dom"


const Header = () => {
    return (
        <>
            <nav>
                <ul>
                    <li> <Link to={'/'}>Home</Link > </li>
                    <li><Link to={'/about-us'}>About</Link></li>
                    <li><Link to={'/blog'}>Blog</Link></li>
                    <li><Link to={'/controlled-component'}>Controlled Component</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Header