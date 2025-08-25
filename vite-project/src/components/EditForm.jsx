import { useState } from "react"


// 方法1
const EditForm = ({ todo, editTodo }) => {


    const [content, setContent] = useState(todo.content);


    // 建立一個函式處理新增的todo資料
    const editData = () => {
        let myInput = document.getElementById('myInput');
        myInput.focus();    // 指定游標


        if (content.length === 0) {
            alert('沒有輸入待辦內容！請重新輸入');
        } else {
            editTodo(todo.id, content);
        }
    }


    // 送單送時
    const handleSubmit = (e) => {
        // 取消送出的預設行為
        e.preventDefault();
        editTodo(todo.id, content);
    }


    return (
        <form className='create-form' /*onSubmit={handleSubmit}*/>
            <input
                id="myInput"
                type="text"
                placeholder='輸入待辦事項'
                value={content}
                onChange={(e) => {
                    // 去除資料前後的空白=> trim()
                    setContent(e.target.value.trim())
                }}
            />
            <button type="button" onClick={editData}>完成</button>
            {/* <button type="submit">完成</button> */}
        </form>
    )
}


export default EditForm

