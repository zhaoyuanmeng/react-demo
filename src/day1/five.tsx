
import  React from 'react';
interface proType{
    date?:any
}
class ClockPlus extends React.Component<proType,proType>{
    timeerId:any
    constructor(props:proType){
        super(props)
        this.state = {
            date:new Date().toLocaleDateString
        }
    }
    // 主要逻辑函数 实现更新时间通过setState 这里面的值变了就会重新触发本组件的render函数
    tick(){
        this.setState({
            date:new Date().toLocaleDateString()
        })
    }
    // 组件已经被渲染到DOM中后运行 挂载的生命周期函数
    componentDidMount(){
        this.timeerId = setInterval(()=>this.tick(),1000)
    }
    // 组件被销毁的生命周期回调函数 清除计时器
    componentWillUnmount(){
        clearInterval(this.timeerId)
    }

    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <h2>当前时间:{this.state.date}</h2>
            </div>
        )
    }
}

export default ClockPlus