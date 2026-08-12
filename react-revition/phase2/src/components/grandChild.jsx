import MyContext from "./MyContext";
const GrandChild = () => {
    return (
        <div>
            <h1>This is Grand Child Component</h1>
            <MyContext.Consumer>
                {data => <h4>{data}</h4>}
            </MyContext.Consumer>
        </div>
    )
}
export default GrandChild;