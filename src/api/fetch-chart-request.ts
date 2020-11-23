export const fetchChartRequestData = async () => {
    const data = await fetch('/api/data', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });
    return data.json();
}