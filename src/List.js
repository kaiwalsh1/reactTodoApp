export const List = (props) => {
    console.log(props);
    return (
        <>
            <button onClick={props.clickMe}>Click me</button>
            <p>{props.message}</p>
            <ul>
                {props.items.map(item => <li>{item}</li>)}
            </ul>
        </>
    );
}

export default List;