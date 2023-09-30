import { KeyboardArrowDownOutlined, MoreVertOutlined, KeyboardArrowUpOutlined } from '@mui/icons-material';
import './featured.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";


function Featured() {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className='title'>Total Revenue</h1>
            <MoreVertOutlined fontSize='small'/>
        </div>

        <div className="bottom">
            <div className="featuredChart">
                {/* we bulit this progress bar using react-circular-progressbar, we can use canvas too */}
                <CircularProgressbar value={70} text='70%' strokeWidth={5}/>
            </div>

            <p className="title">Total Sales Made Today</p>
            <p className="amount">540$</p>
            <p className="desc">Previous transactions processing. Last Payments may not be included</p>

            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownOutlined />
                        <div className="resultAmount">$5k</div>
                    </div>
                </div>

                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlined />
                        <div className="resultAmount">$54</div>
                    </div>
                </div>

                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlined />
                        <div className="resultAmount">$297k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured