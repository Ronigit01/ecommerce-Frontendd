
import React from 'react'

function understand() {
  return (
    <div>
      <h1>hi</h1>
    </div>
  )
}

export default understand

// import React, { useState, useEffect } from 'react';
// import Productdata from './Productdata';
// import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { addtocart } from '../slice/cartslice';
// import toast from 'react-hot-toast';
// import { setSearchTerm } from '../slice/Productslice';
// import Footer from './Footer';



// function ProductPage() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [search, setSearch] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [displayedData, setDisplayedData] = useState(Productdata);
//   const filterdata = useSelector((state) => state.allproducts.filterdata || []);

//   // Updates displayedData whenever search or selectedCategory changes
//   useEffect(() => {
//     let filteredData = Productdata;

//     // Filter by category if selected
//     if (selectedCategory) {
//       filteredData = filteredData.filter((product) => product.category.name === selectedCategory);
//     }

//     // Further filter by search term
//     if (search.trim()) {
//       filteredData = filteredData.filter((product) => 
//         product.title.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     setDisplayedData(filteredData);
//   }, [search, selectedCategory]);

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     dispatch(setSearchTerm(search));  // You may dispatch if needed
//   };

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   const showAllCategories = () => {
//     setSelectedCategory('');
//   };

//   const handleAddToCart = (item) => {
//     dispatch(addtocart(item));
//     toast.success("Item added to your cart");
//   };

//   return (
//     <div>
//       <div className="container">
//         <div className="two-col" style={{ display: "flex", gap: "40px", marginTop: "80px" }}>
//           <div className="category" style={{ cursor: "pointer" }}>
//             <form onSubmit={handleSearchSubmit}>
//               <input 
//                 type="text" 
//                 placeholder="Search products" 
//                 onChange={(e) => setSearch(e.target.value)} 
//               />
//             </form>
//             <p style={{ fontWeight: "bold", fontSize: "16px" }}>Category</p>
//             <div className="category-list">
//               {["Electronics", "Clothes", "Furniture", "Shoes", "Miscellaneous"].map((category) => (
//                 <p key={category} onClick={() => handleCategoryClick(category)} style={{ fontSize: "15px" }}>
//                   {category}
//                 </p>
//               ))}
//               <p onClick={showAllCategories} style={{ fontSize: "15px" }}>See All</p>
//             </div>
//           </div>

//           <div className="product">
//             <div className="container flex content" style={{ flexWrap: "wrap" }}>
//               {displayedData.map((item) => (
//                 <div key={item.id} className="newcard">
//                   <img 
//                     onClick={() => navigate(`/featured/${item.id}`)} 
//                     src={item.images[0]} 
//                     alt={item.title} 
//                   />
//                   <p>{item.title}</p>
//                   <div className="price" style={{ display: "flex" }}>
//                     <p style={{ lineHeight: "0", fontSize: "14px" }}>₹{item.price}.00</p>
//                     <p className="rating" style={{ justifyContent: "flex-end" }}><span>4.3</span></p>
//                   </div>
//                   <button 
//                     className="featurebutton" 
//                     onClick={() => handleAddToCart(item)}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default ProductPage;
