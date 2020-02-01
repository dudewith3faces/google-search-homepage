const input = document.querySelector("input");
const ul = document.querySelector("ul");

(function () {
    document.querySelector("form").addEventListener("submit", search);
    input.addEventListener("keyup", suggestions)
})()

function search(event) {
    event.preventDefault();
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
    report.classList.add("show")
}
