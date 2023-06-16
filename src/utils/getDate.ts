export const getDate = (dateStr: string) => {
    const fullDate = dateStr.split('-')
    const date = new Date(+fullDate[0], +fullDate[1], +fullDate[2])
    const month = date.toLocaleString('en-US', { month: 'long' })
    return `${month} ${fullDate[2]} ${fullDate[0]}`
}