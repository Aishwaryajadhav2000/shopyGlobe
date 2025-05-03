-----------------------------------------------------ShopyGlobe-----------------------------------------------------------

To run Project :
1.	Npm install
2.	Npm run dev
Styling :
1.	CSS
2.	Tailwind
Component Structure: 
1.	 App:The main component. 
2.	Header: Display the navigation menu and shopping cart icon 
3.	Products : Fetch Products from API
4.	ProductList: Displays a list of products. 
5.	 ProductItem: Represents a single product including an “Add to Cart” button. 
6.	ProductDetails: Show detailed information about a selected product. 
7.	Cart: Displays the items added to the cart with options to modify quantities or remove items. 
8.	 CartItem: Represents a single item in the cart. 
9.	NotFound:Display a 404 page for unknown routes.
10.	Checkout : Place the order

Features :
Header :
1.	Click on the icon It will redirect to GitHub Repo.
2.	Cart display the length of product present in cart
3.	Search :
a.	Options On Header will display the product as per category.
b.	Another option will search product by title.
c.	Incorrect input display the error message.

Product List :
1.	Display the list of product from ProductI tems.
2.	Added a button in each ProductI tem to add the product to the cart.
3.	By Clicking on product it will redirect to productDetails and display the details.

Cart :
1.	Added a icon in each CartItem to remove the product from the cart.
2.	If no Products in cart , will display the message and Home redirect.
3.	Clear All can Remove all the products from cart.
4.	Total will show the addition of the products price.
5.	Checkout redirect to order confirmation page

CheckOut :
1.	If no items in cart , will display message to add items
2.	Checkout Form to add address details.
3.	Display product details.
4.	After checkout display message “Place order successfully “
5.	After checkout remove products from cart.

NotFound :
1.	Will display when wrong url

Lazy Loading :
1.	Implement code splitting and lazy loading for components using React.lazy and Suspense.

React Routing: 
1.	Implemented routing using React Router. 
2.	Created routes for Home, Product Detail, Cart, and Checkout pages. 
3.	Use route parameters for product details.































































# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
