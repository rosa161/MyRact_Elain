import React, { useRef, useState } from 'react'

const App = () => {
    // 建立useRef變數 綁定綠色跟黃色區塊
    const greenRef = useRef(null);
    const yellowRef = useRef(null);

    // 捲動到綠色區塊
    function goToGreen() {
        window.scrollTo({
            top: greenRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    // 捲動到黃色區塊
    function goToYellow() {
        window.scrollTo({
            top: yellowRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <div >
            <h1>useRef-滑動到指定位置</h1>
            <div ref={yellowRef} style={{backgroundColor:'yellow',height:'800px'}}>
                <button onClick={goToGreen}>green</button>
            </div>

            <div ref={greenRef} style={{backgroundColor:'green',height:'800px'}}>
                <button onClick={goToYellow}>yellow</button>
            </div>
        </div>
    )
    }





export default App