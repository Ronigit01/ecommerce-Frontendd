// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { addtocart } from '../slice/cartslice';
// import Footer from './Footer';

// function FilterProducts() {
//     const filterdata = useSelector(state => state.allproducts.filterdata || []); // Ensure filterdata is an array
//     console.log(filterdata)
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const setUser = (item) => {
//         navigate(`/featured/${item.id}`);
//     };

//     const send = (item) => {
//         dispatch(addtocart(item));
//         toast.success("Item added to your cart");
//     };

//     return (
//         <>
//             <div className="container flex content" style={{ flexWrap: "wrap" }}>
//                 {filterdata.length > 0 ? (
//                     filterdata.map((item) => (
//                         <div key={item.id} className="newcard">
//                             <img 
//                                 onClick={() => setUser(item)} 
//                                 src={item.images && item.images.length > 0 ? item.images[0] : 'fallback-image-url.jpg'} 
//                                 alt={item.title} 
//                             />
//                             <p>{item.title}</p>
//                             <div className="price" style={{ display: "flex" }}>
//                                 <p style={{ lineHeight: "0", fontSize: "14px" }}>₹{item.price}.00</p>
//                                 <p className="rating" style={{ justifyContent: "flex-end" }}><span>4.3</span></p>
//                             </div>
//                             <button className="featurebutton" onClick={() => send(item)}>Add to Cart</button>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No products found.</p>
                
//             </div>
           
//         </>
//     );
// }

// export default FilterProducts;
