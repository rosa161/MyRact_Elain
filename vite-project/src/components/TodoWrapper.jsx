import { useState } from 'react'
import CreateForm from './CreateForm'
import Todo from './Todo'


const TodoWrapper = () => {
    // 因為有N個todo，所以要用陣列存放
    // const [todos, setTodos] = useState(['繳停車費', '對發票']);
    // 由為陣列內容若有增減時，索引值會異動，
    // 所以避免異動資料時造成索引值錯亂，將陣列改為陣列物件
    // 而key值用亂數來產生

    // 因為要判定todo內容是否被點擊, 所以要增加一個isCompleted屬性
    // 因為要判定todo內容是否修改, 所以增加一個isEdit屬性


    const [todos, setTodos] = useState(
        [
            { content: '繳停車費', id: Math.random(), isCompleted: false, isEdit: false },
            { content: '對發票', id: Math.random(), isCompleted: false, isEdit: false },
        ]
    );


    // 建立刪除todo
    // 傳入被刪除的todo.id
    const delTodo = (id) => {
        setTodos(todos.filter((todo) => {
            // 使用filter方法，保留不是被刪除的id
            return todo.id !== id
        }))
    }

    // 建立切換isCompleted屬性函式
    const toggleCompleted = (id) => {
        // isCompleted => false
        // isCompleted => ture
        // 先檢查被點擊的項目的 id 是否跟陣列中的 id 一樣
        // 會有兩種結果：
        // yes => 1.取出todo 2. 將 isCompleted 屬性值反向(NOT)
        // no => todo不變

        setTodos(todos.map((todo) => {
            return todo.id === id
                ? { ...todo, isCompleted: !todo.isCompleted }
                : todo
        }))
    }

    // 建立切換isEdit屬性函式
    const toggleIsEdit = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? { ...todo, isEdit: !todo.isEdit }
                : todo
        }))
    }

    // 建立修改todo函式
    const editTodo = (id, editContent) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? { ...todo, content: editContent, isEdit: false }
                : todo
        }))
    }


    return (
        <div className='wrapper'>
            <h1>待辦事項</h1>
            {/* 方法1：傳送todos陣列資料與setTodos方法到Todo元件 */}
            <CreateForm todos={todos} setTodos={setTodos} />


            {/* 方法2：將setTodos方法包裝成一個方法（帶有參數）到Todo元件 */}
            {/*  
            <CreateForm addTodo={(newContent) => {
                // 建立新的todo內容
                // 1. 使用...其餘運算子來保留原陣列內容
                // 2. 再加上新的物件內容
                setTodos([...todos, { content: newContent, id: Math.random(), isCompleted:false }])
            }} />
            */}
            {
                todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id}
                        delTodo={delTodo}
                        toggleCompleted={toggleCompleted}
                        toggleIsEdit={toggleIsEdit}
                        editTodo={editTodo}
                    />
                })
            }
        </div>
    )
}


export default TodoWrapper
