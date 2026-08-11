import GrandChild from "./grandChild";
const ChildComponent = ({data}) => {
    return (
        <div>
            <h1>This is Child component</h1>
            <GrandChild data  = {data}/>
        </div>
    )
}
export default ChildComponent;