import React from 'react'
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const featured = () => {

const percentage = 70;

  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon className="icon" />
        </div>
        <div className="bottom">
            <div className="featuredchart">
                <CircularProgressbar 
                value={percentage}
                text={`${percentage}%`}
                strokeWidth={5} 
                styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,
                
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                
                    // Text size
                    textSize: '16px',
                
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(94,172,94, ${percentage / 100})`,
                    textColor: '#152f4e',
                    trailColor: '#f0eaeaae',
                    
                  })}

                />
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">KES 4200</p>
            <p className="desc">*Last payments may not be included</p>
            <div className="summary">
                <div className="item">
                    <div className="itemtitle">Target</div>
                    <div className="itemresult positive">
                        <ArrowUpwardIcon className="icon" />
                        <div className="totalresult">
                        KES 50M+
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemtitle">Last week</div>
                    <div className="itemresult negative">
                        <ArrowDownwardIcon className="icon" />
                        <div className="totalresult">
                        KES 100k+
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemtitle">Last month</div>
                    <div className="itemresult positive">
                        <ArrowDownwardIcon className="icon" />
                        <div className="totalresult">
                        KES 200k+
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default featured