import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../Image/logo.jpg'

// Header Component
export default function Header({ onCategoryChange, onSearch, clearSearchText }) {

    const cartItems = useSelector((store) => store.cart.items)
    const [searchInput, setSearchInput] = useState("");

    function onClickSearch() {
        console.log(searchInput)

        if (searchInput == '') {
            alert("Please Enter value..");
        } else {
            onSearch(searchInput.trim().toLowerCase());
        }
        // window.location.href("/")
    }
    function Home() {
        setSearchInput('');
        onCategoryChange('all');
        clearSearchText();
    }

    return (
        <div className='header'>
            {/* Logo taken from online sources redirect to git*/}
            <a href="https://github.com/Aishwaryajadhav2000/shopyGlobe" target='blank'>
                <img src={logo} className='h-14'></img>
            </a>
            {/* List display on header to search product by category and cart */}
            <ul>
                {/* <Link to={'/'}><li onClick={() => { setSearchInput(''); onCategoryChange('all') }}>HOME</li></Link> */}
                {/* <Link to={'/'}><li onClick={Home}>HOME</li></Link> */}
                <Link to={'/'}><li onClick={() => { setSearchInput(''); clearSearchText(); onCategoryChange('all') }}>PRODUCTS</li></Link>
                <Link to={'/'}><li onClick={() => { setSearchInput(''); clearSearchText(); onCategoryChange('beauty') }}>BEAUTY</li>  </Link>
                <Link to={'/'}><li onClick={() => { setSearchInput(''); clearSearchText(); onCategoryChange('fragrances') }}>FRAGRANCES</li></Link>
                <Link to={'/'}><li onClick={() => { setSearchInput(''); clearSearchText(); onCategoryChange('groceries') }}>GROCERIES</li></Link>
            </ul>

            {/* Search by title */}
            <div className='search1'>
                <div className='search'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                    <input type="text" placeholder='Search for products' className='border-none outline-none'
                        value={searchInput} name="searchInpt"
                        onChange={(e) => setSearchInput(e.target.value)} />

                </div>
                <Link to={'/'}>
                    <button onClick={onClickSearch}>Search</button>
                </Link>

            </div>

            {/* Cart length display when product add to cart */}

            <ul>
                <Link to={'/cart'}>
                    <li>Cart
                        {
                            cartItems.length !== 0 ? (
                                <b className='text-red-600 p-2'>{cartItems.length}</b>
                            ) : (
                                <p></p>
                            )
                        }
                    </li>
                </Link>

            </ul>



        </div>
    )
}
