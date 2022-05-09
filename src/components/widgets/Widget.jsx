import React from 'react'
import './widget.scss'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({type}) => {
  let data;
  //TEMPORARY
  const amount = 100;
  const diff = 20;

   switch (type) {
     case "user":
       data = {
         title: "USERS",
         isMoney: false,
         link: "List of all users",
         icon: <PersonOutlinedIcon className="icon" style={{color: "crimson", backgroundColor: "rgba(255,0,0,0.2"}} />
       };
       break;
       case "orders":
        data = {
          title: "ORDERS",
          isMoney: false,
          link: "View all orders",
          icon: <ShoppingCartOutlinedIcon className="icon" style={{color: "goldenrod", backgroundColor: "rgba(218,165,32,0.2)"}} />
        };
        break;
        case "earnings":
          data = {
            title: "EARNINGS",
            isMoney: true,
            link: "Check the company's net earnings",
            icon: <MonetizationOnOutlinedIcon className="icon" style={{color:"green", backgroundColor: "rgba(0, 128,0,0.2)"}} />
          };
          break;
          case "balance":
            data = {
              title: "BALANCE",
              isMoney: true,
              link: "See balance details",
              icon: <AccountBalanceWalletOutlinedIcon className="icon" style={{color: "purple", backgroundColor:"rgba(128,0,128,0.2)"}} />
            };
            break;
       default:
         break;
   }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "KES"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ArrowUpwardIcon />
          {diff}%
        </div>
          {data.icon}
      </div>

      
    </div>
  )
}

export default Widget