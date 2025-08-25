import React from 'react'

const App = () => {
    return (
        <div>
            <h1>本地端存取資料-Local storage</h1>
            <button onClick={() => {
                // 寫入語法: window.localStorage.setItem('key'.'value')
                // ('key'.'value') 值【一定要是字串】
                window.localStorage.setItem('book1', 'HTML');
                window.localStorage.setItem('book2', 'CSS');
                window.localStorage.setItem('book3', 'React');
            }}>寫入資料</button>

            <button onClick={() => {
                // 取出指定key名稱 => 用console.log
                // console.log(window.localStorage.getItem('book2'));

                // 使用迴圈讀取全部資料 => 用for迴圈
                for (let i = 0; i < window.localStorage.length; i++) {
                    let key = window.localStorage.key(i);
                    console.log(window.localStorage.getItem(key))
                }
            }}>讀取資料</button>

            <button onClick={() => {
                window.localStorage.removeItem("book2");
            }}>刪除指定資料</button>

            <button onClick={() => {
                window.localStorage.clear();
            }}>刪除全部資料</button>
        </div>
    )
}

export default App