import axios from 'axios';
import { get } from 'jquery';
import React, { useState } from 'react'

const App = () => {
    // 
    // https://api.unsplash.com/photos/?client_id=-NX5eksO7ukf8io4sXy2ZvtDeSxw_K1JJksjgM-tEac

    const api = "https://api.unsplash.com/search/photos/";
    const accessKey = "-NX5eksO7ukf8io4sXy2ZvtDeSxw_K1JJksjgM-tEac";
    const [fillterStr, setFillterStr] = useState("Elain");

    // 建立非同步方法, 取得遠端資料
    const getPhotos = async () => {
        // console.log(`${api}?client_id=${accessKey}&query=${filterString}`);
        // 發出請求給遠端API 傳回結果
        const result = await axios.get(`${api}?client_id=${accessKey}&query=${fillterStr}`);
        console.log(result);
    }
    getPhotos();
    return (
        <div>

        </div>
    )
}

export default App