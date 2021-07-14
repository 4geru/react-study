import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
    const date = parseISO(dateString)

    return <time dateTime={dateString}>{(dateString !== undefined ? format(date, 'LLLL d, yyyy') : dateString)}</time>
}
