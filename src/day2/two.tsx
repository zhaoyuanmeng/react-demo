import { useEffect,useState } from "react"

import {useMove} from 'ycanvasuse'

function Main(){
    const [count,setCount] = useState(0)

    console.log('useMove',useMove())
    // 副作用函数
    useEffect(()=>{
        console.log('触发了',count)
    })

    return (
        <div>
            <p>当前的count:{count}</p>
            <button onClick={()=>setCount(count+1)}>+1操作</button>
        </div>
    )
}

export default Main