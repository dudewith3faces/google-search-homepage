function autocomplete(arr, string) {
    if (!Array.isArray(arr)) return [];

    const sug = [];
    sug.length = 0;

    for (const a of arr)
        if (a.includes(string))
            sug.push(a)

    return sug
}

function layAutocomplete(string) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const span2 = document.createElement("span");

    li.classList.add("inp1");
    span.classList.add("search")
    span2.appendChild(document.createTextNode(string));

    li.onclick = () => liSearch(string);


    li.appendChild(span)
    li.appendChild(span2)

    return li;
}

async function getAutocomplete() {
    const res = await fetch("../data/search.json");
    const data = await res.json();
    return data.companies;
}


async function suggestions(event) {
    const uli = document.querySelector("ul");
    const report = document.querySelector(".report");

    if (uli) {
        uli.remove();
        report.classList.remove("show")
    }

    if (!input.value.trim()) return

    const data = await getAutocomplete();
    const res = autocomplete(data, input.value);

    if (res.length === 0) return;

    const ul = document.createElement("ul");
    for (const r of res)
        ul.appendChild(layAutocomplete(r))

    report.parentNode.insertBefore(ul, report);
    report.classList.add("show");
}
