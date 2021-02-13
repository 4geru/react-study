export const List = ({ languages }) => {
    return (
        <div>
            {
                languages.map((lang, index) => {
                    return <div key={index}>
                        { lang }
                    </div>
                })
            }
        </div>
    )
}