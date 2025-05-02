import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../Image/logo.jpg'

export default function Header({ onCategoryChange, onSearch , clearSearchText}) {

    const cartItems = useSelector((store) => store.cart.items)
    // const [searchText , setSearchText] = useState()
    const [searchInput, setSearchInput] = useState("");
    // const [inputValue , setInputValue] = useState("")

    function onClickSearch() {
        onSearch(searchInput.trim().toLowerCase());
        setSearchInput('')
    }
    function Home(){
        setSearchInput('');
        onCategoryChange('all');
        clearSearchText();
        // window.location.reload();
    }


    // const [category , setCategory] = useState()


    return (
        <div className='header'>
            <img src={logo} className='h-14'></img>
            <ul>
                {/* <Link to={'/'}><li onClick={() => { setSearchInput(''); onCategoryChange('all') }}>HOME</li></Link> */}
                <Link to={'/'}><li onClick={Home}>HOME</li></Link> 
                <Link to={'/'}><li onClick={() => { setSearchInput(''); clearSearchText(); onCategoryChange('all') }}>PRODUCTS</li></Link>
                <Link to={'/'}><li onClick={() => { setSearchInput(''); clearSearchText(); onCategoryChange('beauty') }}>BEAUTY</li>  </Link>
                <Link to={'/'}><li onClick={() => { setSearchInput(''); clearSearchText(); onCategoryChange('fragrances') }}>FRAGRANCES</li></Link>
                <Link to={'/'}><li onClick={() => { setSearchInput(''); clearSearchText();  onCategoryChange('groceries') }}>GROCERIES</li></Link>
            </ul>

            <div className='search1'>
                <div className='search'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                    <input type="text" placeholder='Search for products' className='border-none outline-none'
                         value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)} />

                </div>
                <button onClick={onClickSearch}>Search</button>
            </div>

            <ul>
                {/* <li>Profile</li> */}
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
