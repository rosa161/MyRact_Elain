import './css/App0805-1.css'

function App(){
    // 一般變數
    const dogName="建仔"
    // 類別(屬性)名稱變數
    const myClassName="myClass"
    // 方法 
    function myClick(){
        alert('我是按鈕1')
    }

    return(
       <>
        <div>
            <p style={{color:"red"},{fontSize:"64px"}} className={myClassName}>姓名：{dogName}</p>
            <button type="button" onClick={myClick}>按鈕1</button>
            <button type="button" onClick={()=>{
                alert('我是按鈕2')
            }}>按鈕2</button>
        </div>
       </>
    )
}
export default App;