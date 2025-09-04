import React, { useRef, useState } from 'react'

const App = () => {
    // 建立useRef變數 綁定3個文字方塊
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    // function inputFocus1() {
    //     inputRef1.current.style.backgroundColor = 'yellow';
    //     inputRef2.current.style.backgroundColor = '';
    //     inputRef3.current.style.backgroundColor = '';
    // }

    // function inputFocus2() {
    //     inputRef1.current.style.backgroundColor = '';
    //     inputRef2.current.style.backgroundColor = 'yellow';
    //     inputRef3.current.style.backgroundColor = '';
    // }

    // function inputFocus3() {
    //     inputRef1.current.style.backgroundColor = '';
    //     inputRef2.current.style.backgroundColor = '';
    //     inputRef3.current.style.backgroundColor = 'yellow';
    // }

    // 簡化以上重複動作
    function inputFocus(no) {
        inputRef1.current.style.backgroundColor = '';
        inputRef2.current.style.backgroundColor = '';
        inputRef3.current.style.backgroundColor = '';

        if (no === 1) {
            inputRef1.current.style.backgroundColor = 'pink';
        } else if (no === 2) {
            inputRef2.current.style.backgroundColor = 'pink';
        } else if (no === 3) {
            inputRef3.current.style.backgroundColor = 'pink';
        }
    }

    return (
        <div >
            <h1>useRef-變色</h1><br />

            <p>文字方塊1</p>
            <input type='text' ref={inputRef1} onFocus={()=>inputFocus(1)} />
            <p>文字方塊2</p>
            <input type='text' ref={inputRef2} onFocus={()=>inputFocus(2)} />
            <p>文字方塊3</p>
            <input type='text' ref={inputRef3} onFocus={()=>inputFocus(3)} />
        </div>
    )
}

export default App