import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Chart from '../../components/chart/Chart'
import './single.scss'
import TableSection from '../../components/tableSection/Table'

const SinglePage = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="container">
      <Navbar />
      <div className="top">
        <div className="left">
          <div className="editButton">EDIT</div>
          <h1 className="title">Account information</h1>
          <div className="item">
            <img src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="itemimage" />
            <div className="details">
              <h1 className="itemtitle">Jane Doe</h1>
              <div className="detailInfo">
                <span className="key">Email:</span>
                <span className="value">janedoe@gmail.com</span>
              </div>
              <div className="detailInfo">
                <span className="key">Phone number:</span>
                <span className="value">+254 7001245</span>
              </div>
              <div className="detailInfo">
                <span className="key">Address:</span>
                <span className="value">Koinange street</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Chart aspect={12/3} title="User Food Ordering Statistics" />
        </div>
      </div>
      <div className="bottom">
        <div className="title">Users information and transactions</div>
        <TableSection />
      </div>
      </div>
      
    </div>
  )
}

export default SinglePage