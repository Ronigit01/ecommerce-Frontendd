import React from 'react'

function Category() {
  return (
    <div>
        <div className="container">
         <div className="category">
            <p style={{color:"purple",fontWeight:"bold"}}>Popular <span style={{color:"grey"}}>Catagories</span></p>

            <div className="card-list">
                <div className="card">
                    <img src="./images/bag.png" alt="" />
                    <p>Lady's Bag</p>
                </div>
                <div className="card">
                    <img src="./images/kurti.png" alt="" />
                    <p>Lady's Bag</p>
                </div>
                <div className="card">
                    <img src="./images/dress.png" alt="" />
                    <p>Lady's Bag</p>
                </div>
                <div className="card">
                    <img src="./images/cap.png" alt="" />
                    <p>Lady's Bag</p>
                </div>
                <div className="card">
                    <img src="./images/pant.png" alt="" />
                    <p>Lady's Bag</p>
                </div>
                <div className="card">
                    <img src="./images/sew.png" alt="" />
                    <p>Lady's Bag</p>
                </div>
                <div className="card">
                    <img src="./images/pilloww.png" alt="" />
                    <p>Lady's Bag</p>
                </div>
                
            
            </div>
         </div>
        </div>
    </div>
  )
}

export default Category
