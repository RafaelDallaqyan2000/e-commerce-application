export function dateParser(utcDate = '2024-03-16T01:04:18.676Z') {

    const date = new Date(utcDate);

    const options: any = {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    const formattedDate = date.toLocaleString('en-US', options);


    console.log(formattedDate);
    return `${formattedDate}`;
}
