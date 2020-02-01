async function getAutocomplete() {
    const res = await fetch("../data/search.json");
    const data = await res.json();
    return data.companies;
}
