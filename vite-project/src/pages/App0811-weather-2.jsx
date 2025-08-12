import React from "react";
import { IoUmbrellaOutline } from "react-icons/io5";
import "../css/App0811-weather.css"
import { useEffect } from "react";
import axios from "axios";

const App = () => {
    console.log(3);
    // 取得標題2的內容
    let
    useEffect(() => {
        (async () => {
            const data = await axios.get('./src/json/F-C0032-001.json');
            console.log(data.data.cwaopendata.dataset);
        })();
    }, []);
    return (

        <>

            <h2>三十六小時天氣預報</h2>
            <div className="cards">
                <div className="card">
                    <div className="card-header">台北市</div>
                    <div className="card-body">
                        <div className="item">
                            <div className="card-body">
                                <div className="item">
                                    <div className="date">
                                        11日
                                    </div>
                                    <div className="time">
                                        上午6:00<br />
                                        ~<br />
                                        下午6:00<br />
                                    </div>
                                    <div className="weatherPic">
                                        <img src="./weatherIcon/晴午後短暫雷陣雨.svg" alt="" />
                                    </div>
                                    <div className="weatherName">
                                        晴午後短暫雷陣雨
                                    </div>
                                    <div className="pop">
                                        <IoUmbrellaOutline />
                                        80%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
