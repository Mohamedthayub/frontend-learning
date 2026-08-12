import GranChild from "./grandChild";
import MyContext from "./MyContext";
const ChildComponent = () => {
    return (
        <div>
            <h1>This is  Children component</h1>
           <MyContext.Consumer>
            {data => <GranChild data = {data}/>}
           </MyContext.Consumer>
        </div>
    )
}
export default ChildComponent;