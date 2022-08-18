// 模拟插槽

// 第一种使用特殊props属性children
import './four.css'

function A(props:any){
    return (
        <div className="fu">
            {props.children}
        </div>
    )
}


function Main(){
    return <A>
        <div>123</div>
    </A>
}

export default Main