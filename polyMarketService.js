const tag = "180";

async function fetchData() {
    try {
        const fetch = await import('node-fetch');
        const response = await fetch.default(`https://gamma-api.polymarket.com/events?closed=false&tag_id=${tag}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        // Assuming data is an array of events
        const eventTitles = data.map(event => event.title);
        console.log(eventTitles);
        return eventTitles
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

module.exports = { fetchData };