import './home.scss';


import {Sidebar, Navbar, Widget, Featured, Chart, ListOfItems} from '../../components';

function Home() {
  return (
    <div className='home'>
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="wedgets">
             <Widget type="user"/>
             <Widget type="order"/>
             <Widget type="earning"/>
             <Widget type="balance"/>
          </div>
          <div className="charts">
            <Featured />
            <Chart aspect={2/1} title={"Last 6 Months (Revenues)"}/>
          </div>

          <div className="listContainer">
            <div className="listTitle">Latest Transaction</div>

            <ListOfItems />
          </div>
        </div>
    </div>
  )
}

export default Home