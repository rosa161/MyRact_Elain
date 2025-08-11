import React from "react";
import { IoUmbrellaOutline } from "react-icons/io5";
import "../css/App0811-weather.css"

const App = () => {
    return (
        <>
            {/* 36小時天氣預報的版型 */}
            <h2>三十六小時天氣預報</h2>
            <div className="cards">
                {/* 取得縣市陣列跑迴圈 */}
                <div className="card">
                    {/* 卡片標題 */}
                    <div className="card-header">台北市</div>
                    {/* 卡片內容 */}
                    <div className="card-body">
                        {/* 取得陣列資料後跑迴圈 */}
                        <div className="item">
                            {/* 卡片內容 */}
                            <div className="card-body">
                                {/* 取得陣列資料後跑迴圈 */}
                                <div className="item">
                                    {/* 日期 */}
                                    <div className="date">
                                        11日
                                    </div>
                                    {/* 時間 */}
                                    <div className="time">
                                        上午6:00<br />
                                        ~<br />
                                        下午6:00<br />
                                    </div>
                                    {/* 天氣圖 */}
                                    <div className="weatherPic">
                                        {/* 天氣圖：使用執行路徑，所以要將圖片放在public資料夾中，才讀得到 */}
                                        <img src="./weatherIcon/晴午後短暫雷陣雨.svg" alt="" />
                                    </div>
                                    {/* 天氣名稱 */}
                                    <div className="weatherName">
                                        晴午後短暫雷陣雨
                                    </div>
                                    {/* 降雨率PoP */}
                                    <div className="pop">
                                        {/* icon */}
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
