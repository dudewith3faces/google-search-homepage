function layAutocomplete(string) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const span2 = document.createElement("span");

    li.classList.add("inp1");
    span.classList.add("search")
    span2.appendChild(document.createTextNode(string));


    li.appendChild(span)
    li.appendChild(span2)

    return li;
}
