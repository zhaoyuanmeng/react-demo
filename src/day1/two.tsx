type Data = any;

function dianji(event:any,data:any){
  console.log('点击事件',event)
  console.log('点击事件第二个参数',data)
}

function Clock(props: Data) {
  
  return (
    <div>
      <h1>Hello,World</h1>
      <h2>Hello,World</h2>
      <button onClick={(e)=>{dianji(e,22)}}>点我</button>
    </div>
  );
}

export default Clock;
