import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import ProductItem from './Components/ProductItem'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import { Outlet } from 'react-router-dom'

function App() {
  const [category , setCategory] = useState('all');
  const [searchText , setSearchText] = useState('');
  const [searchInput, setSearchInput] = useState('');

  // Main Component
  return (
    <Provider store={appStore}>


     {/* Header Component */}
        <Header onCategoryChange={setCategory}
        setSearchInput={setSearchInput}
          onSearch={(text) => {setSearchText(text)}}
          clearSearchText={() => setSearchText('')}>

        </Header>
     
        <Outlet context={{category, searchText}}></Outlet>

    </Provider>
  )
}

export default App
