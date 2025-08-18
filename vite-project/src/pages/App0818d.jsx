import { useState } from 'react'

// 捕捉下拉式方塊內容
const App0818d = () => {
    const [subject, setSubject] = useState('');
    return (
        <div>
            <h2>捕捉下拉式方塊內容</h2><br />
            <select 
            name="" 
            id="" 
            value={subject}
            onChange={(e)=>{
                setSubject(e.target.value);
                console.log(subject);
            }}>
                <option value="">請選擇</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="js">JavaScript</option>
                <option value="react">REACT</option>
            </select>

          

        </div>
    )
}

export default App0818d