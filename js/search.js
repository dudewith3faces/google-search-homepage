const inp = document.querySelector("#input");
const input = document.querySelector("input");

(function () {
    document.querySelector("form").addEventListener("submit", search);
    if (inp)
        inp.addEventListener("keyup", suggestions)
})()

function search(event) {
    event.preventDefault();

    if (!input.value) return;

    return window.location.href = window.location.origin + `/search.html?q=${input.value.replace(/ /g, '+')}`
}
