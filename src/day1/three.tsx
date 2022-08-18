
function ListItem(props:any){
    return <li>{props.number}</li>
}

function One(){
    const number = [1,2,3]
    const listItem = number.map((number)=>{
        // return <li key={number.toString()}>{number}</li>
        return <ListItem number={number} key={number.toString()}></ListItem>
    })
    return (
      <div>
        <button>1</button>
        <ul>{listItem}</ul>
        <span>1</span>
      </div>  
    )
}

function Two(){
    return (
        <div>
            <button>2</button>
            <span>2</span>
        </div>
    )
}

function UserGreeting(props:any){
    if(props.name == 'li'){
        return <One></One>
    }else{
        return <Two></Two>
    }
}

export default UserGreeting