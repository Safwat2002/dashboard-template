import './single.scss'

import {Sidebar, Navbar, Chart, ListOfItems} from '../../components'


function Single() {
  return (
    <div className='single'>
      <Sidebar />

      <div className="singleContainer">
        <Navbar />

        <div className="top">

          
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/3907595/pexels-photo-3907595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="itemImg" />
              
              <div className="details">
                <div className="itemTitle">Jane Doe</div>

                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 1259 1478</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">NewYourk, NewYourk City</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">~USA</span>
                </div>
             
              </div>
            </div>
          </div>


          <div className="right">
            <Chart aspect={2/1} title={"User Spending Last 6 Months"}/>
          </div>
        </div>



        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <ListOfItems />
        </div>

      </div>

    </div>
  )
}

export default Single