// 使用舒服的hooks
import {useState} from "react";
export default function Main(){
    // 声明一个state变量

    const [count,setCount] = useState(0)

    // 点击事件
    const handleCount = ()=>{
        // 更新count
        setCount(count+1)
    }
    return (
        <div>
            <p>当前count值：{count}</p>
            <button onClick={handleCount}>+1操作</button>
        </div>
    )
}