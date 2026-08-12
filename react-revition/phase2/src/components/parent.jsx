import ChildComponent from "./child";
import MyContext from "./MyContext";
const ParentComponent = () => {
    const data = "This data from Parent Component";
    return (
        <div>
            <h1>This is parent component</h1>
            <MyContext.Provider value={data}>
            <ChildComponent/>
            </MyContext.Provider>
        </div>
        
    )
}
export default ParentComponent;