import React, { useEffect, useState } from 'react'

export default function Products({ category = '', searchText = '' } = {}) {
    const [allProducts, setAllProducts] = useState([]);
    const [error, setError] = useState();
    const [loading , setLoading] = useState(true)

    useEffect(() => {

        const fetchProducts = async () => {
            setLoading(true)
            try {
                // let responseUrl = await fetch('https://dummyjson.com/products');
                let responseUrl = '';

                if (searchText.trim() !== '') {
                    responseUrl = `https://dummyjson.com/products`;
                }else if(!category || category === 'all') {
                 responseUrl = `https://dummyjson.com/products`

                }else{
                    responseUrl = `https://dummyjson.com/products/category/${category}`
                }
                const response = await fetch(responseUrl)
                const data = await response.json();
                setAllProducts(data.products);
            } catch (err) {
                setError('Failed to fetch Products..')
            }
            setLoading(false)
        };

        fetchProducts();

    }, [category, searchText])




    return {
        allProducts, error , loading
    }
}
