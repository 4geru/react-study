export const Table = ({ languages, onDeleteLang }) => {
    return (
        <table>
            <tbody>
            {
                languages.map((lang, index) => {
                    return (
                        <tr key={index}>
                            <td>{ index }</td>
                            <td>{ lang }</td>
                            <td>
                                <button onClick={() => { onDeleteLang(index) }}>delete</button>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}