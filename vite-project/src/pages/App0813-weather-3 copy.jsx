import { IoUmbrellaOutline } from "react-icons/io5";
import "../css/App0811-weather.css";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  // 存放各縣市資料
  const [citys, setCitys] = useState([]);

  // useEffect Hook => 渲染後，只呼叫一次
  useEffect(() => {
    (async () => {
      // 從 src 讀取 JSON
      const jsonData = await axios.get("./src/json/F-C0032-001.json");

      // 從 JSON 中取出 location 陣列
      const { location } = jsonData.data.cwaopendata.dataset;

      // 更新 state
      setCitys(location);
    })();
  }, []);

  // 卡片元件
  function Card({ city }) {
    return (
      <div className="card">
        {/* 卡片標題 */}
        <div className="card-header">
          {city.locationName}
        </div>

        {/* 卡片內容 */}
        <div className="card-body">
          {city.weatherElement[0].time.map((item, index) => (
            <div className="item" key={index}>
              {/* 日期 */}
              <div className="date">
                {new Date(item.startTime).toLocaleString(undefined, {
                  day: "numeric",
                })}
              </div>

              {/* 時間 */}
              <div className="time">
                {new Date(item.startTime).toLocaleString(undefined, {
                  hour: "numeric",
                  minute: "numeric",
                })}
                <br />~<br />
                {new Date(item.endTime).toLocaleString(undefined, {
                  hour: "numeric",
                  minute: "numeric",
                })}
                <br />
              </div>

              {/* 天氣圖 */}
              <div className="weatherPic">
                <img
                  style={{ width: "95px", height: "95px" }}
                  src={`./weatherIcon/${item.parameter.parameterName}.svg`}
                  alt=""
                />
              </div>

              {/* 天氣名稱 */}
              <div className="weatherName">
                {item.parameter.parameterName}
              </div>

              {/* 降雨率 */}
              <div className="pop">
                <IoUmbrellaOutline />
                {`${city.weatherElement[4].time[index].parameter.parameterName}%`}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* 36小時天氣預報的版型 */}
      <h2>三十六小時天氣預報</h2>

      <div className="cards">
        {citys.map((city) => (
          <Card city={city} key={city.locationName} />
        ))}
      </div>
    </>
  );
};

export default App;



