import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    


    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => {
                console.log(error);
            });
    }
    return (
        <div className="navbar bg-base-100 text-purple-700 shadow-lg sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/alltoys'>All Toys</Link></li>

                        {user && <><li><Link to='/mytoys'>My Toys</Link></li>
                            <li><Link to='/addatoy'>Add a Toy</Link></li></>}

                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img className='w-20' src="https://i.ibb.co/SJcKndL/logo.png" alt="" /><strong className='text-purple-500'>ToyPlanet</strong></a>
            </div>


            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/alltoys'>All Toys</Link></li>

                    {user && <><li><Link to='/mytoys'>My Toys</Link></li>
                        <li><Link to='/addatoy'>Add a Toy</Link></li></>}

                    <li><Link to='/blogs'>Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end">

                {

                    user ?
                        <span className='text-black flex gap-2'>
                            <img className='w-10 rounded-full' title={user.displayName} src={user.photoURL} alt="" />
                            <button className='btn bg-purple-500 hover:bg-purple-700' onClick={handleLogOut}>
                                Sign Out
                            </button>
                        </span> : <span><Link className='btn bg-purple-500 hover:bg-purple-700' to='/login'>Login</Link></span>
                }
            </div>
        </div>
    );
};

export default Header;