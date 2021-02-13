const LANGUAGES = [
    'Javascript',
    'C++',
    'Ruby',
    'Java',
    'PHP',
    'Go'
]

export const Table = () => {
    return (
        <table>
            {
                LANGUAGES.map((lang, index) => {
                    return (
                        <tr key={index}>
                            <td>{ index }</td>
                            <td>{ lang }</td>
                        </tr>
                    )
                })
            }
        </table>
    )
}