import "./slot.css";
/*
 *@Author: 赵元达
 *@Date: 2022-09-27 10:53:35
 *@parms:
 *@Description: 第一种形式 通过children的方式
 */
function Slot(props: any) {
  const { children } = props;

  return (
    <div>
      <div>我是子组件中的内容</div>
      <div>{children}</div>
    </div>
  );
}

/*
 *@Author: 赵元达
 *@Date: 2022-09-27 10:55:10
 *@parms:
 *@Description: 就是通过props里面的属性传 不过里面是组件或者是别的东西
 */
function SlotTwo(props: any) {
  const { top, content, bootom } = props;
  return (
    <div>
      <div>top:{top()}</div>
      <div>content:{content()}</div>
      <div>bootom:{bootom()}</div>
    </div>
  );
}

/*
 *@Author: 赵元达
 *@Date: 2022-09-27 10:57:11
 *@parms:
 *@Description: Top 组件
 */
function Top() {
  return <div className="top">top组件</div>;
}
/*
 *@Author: 赵元达
 *@Date: 2022-09-27 10:57:30
 *@parms:
 *@Description: Content组件
 */
function Content() {
  return <div className="content">Content组件</div>;
}

/*
 *@Author: 赵元达
 *@Date: 2022-09-27 10:57:40
 *@parms:
 *@Description: Bootom 组件
 */
function Bootom() {
  return <div className="bottom">Bootom组件</div>;
}

function Parent() {
  return (
    <div>
      {/* <Slot>我来自于父组件插槽中的内容</Slot> */}
      <SlotTwo top={Top} content={Content} bootom={Bootom}></SlotTwo>
    </div>
  );
}

export default Parent;
