import React from 'react'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TableSection from '../../components/tableSection/Table'
import Widget from '../../components/widgets/Widget'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2/1} title="Last 6 months (Revenue)" />
        </div>
        <div className="listContainer">
         <div className="listTitle">Latest transactions</div>
           <TableSection />
        </div>
      </div>
      
    </div>
  )
}

export default Home