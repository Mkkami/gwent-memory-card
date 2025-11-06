
async function fetchCardData() {

    const data = localStorage.getItem("gwent_cards");
    let cards;

    if (!data) {
        const response = await fetch("https://api.gwent.one/?key=data&response=json")
        const json = await response.json()
        cards = cleanData(json);
        localStorage.setItem("gwent_cards", JSON.stringify(cards));
    } else {
        cards = JSON.parse(data);
    }
    console.log(cards);
    return cards;
}

export default fetchCardData;


function cleanData(data) {
    const records = Object.values(data.response);

    const clean = records.map(rec => ({
        name: rec.name,
        art: rec.id.art
    }));
    return clean;
}
