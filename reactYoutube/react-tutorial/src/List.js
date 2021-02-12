export const Message = (props) => {
    const title = props.title
    return (
        <div>
            <h4>{ title }</h4>
            リストです
        </div>
    )
}

export const List = ({ title }) => {
    return (
        <div>
            <h4>{ title }</h4>
            リストです
        </div>
    )
}