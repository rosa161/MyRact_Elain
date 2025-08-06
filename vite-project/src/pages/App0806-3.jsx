import React from "react"

// 建立員工元件
// 解構props
const Employee = ({ name, age, h, w, BMI}) => {
    return (
        <div className="emp">
            <h2>姓名:{name}</h2>
            <p>年齡:{age}</p>
            <p>身高:{h}</p>
            <p>體重:{w}</p>
            <p>BMI:{(w / Math.pow(h / 100, 2)).toFixed(2)}</p>
        </div>
    )
}

// 建立{物件}資料
const employees = {
    emp1: {
        name: "員工1",
        age: "21歲",
        high: 185,
        weight: 80,
    },
    emp2: {
        name: "員工2",
        age: "23歲",
        high: 185,
        weight: 80,
    },
    emp3: {
        name: "員工3",
        age: "25歲",
        high: 185,
        weight: 80,
    },
}

// 建立{陣列物件}資料
const arrEmployees = [
    {
        id: 1,
        name: "員工1",
        age: "21",
        h: 185,
        w: 80,
    },
    {
        id: 2,
        name: "員工2",
        age: "22",
        h: 185,
        w: 80,
    },
    {
        id: 3,
        name: "員工3",
        age: "23",
        h: 185,
        w: 80,
    },
    {
        id: 4,
        name: "員工4",
        age: "29",
        h: 185,
        w: 80,
    }
]



const App = () => {
    return (
        <div>
            <h1>員工資料</h1>
            {/* 呼叫員工元件 使用{陣列物件}資料, 搭配map迴圈 */}
            {
                arrEmployees.map((emp) => {
                    return (<Employee name={emp.name} age={emp.age} h={emp.h} w={emp.w} />
                    )
                })
            }



            {/* 呼叫員工元件 使用{物件}資料 */}
            {/* <Employee name={employees.emp1.name} age={employees.emp1.age} />
            <Employee name={employees.emp2.name} age={employees.emp2.age} />
            <Employee name={employees.emp3.name} age={employees.emp3.age} /> */}


            {/* 呼叫員工元件 使用{固定值} */}
            {/* <Employee name="員工1" age="21歲" />
            <Employee name="員工2" age="28歲" />
            <Employee name="員工3" age="22歲" /> */}

        </div>
    )
}

export default App