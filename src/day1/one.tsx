import { useState } from 'react'
import './one.css'

type data = {
  name: string
}

type User = {
  name: string
  txt:string
}

function One() {
  const [count, setCount] = useState(0)
  const data = new Date().toLocaleDateString()
  return (
    <div className="container">
      <h1>hello react</h1>
      <h1>当前时间:{data}</h1>
    </div>
  )
}
// 函数组件
function Welcome(props:data){
  return (
    <h1>传递过来的值是:{props.name}</h1>
  )
}

function All(props:data){
  return (
    <div>
      <Welcome name={props.name}></Welcome>
      <Welcome name={props.name}></Welcome>
      <Welcome name={props.name}></Welcome>
    </div>
  )
}

export function Comment(props:User){
  return (
    <div className="container">
      <div className='user'>
        姓名:{props.name}
      </div>
      <div className='content'>
        作用名:{props.txt}
      </div>
    </div>

  )
}

export default All
