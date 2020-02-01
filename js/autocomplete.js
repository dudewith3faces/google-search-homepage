function autocomplete(arr, string) {
    if (!Array.isArray(arr)) {
        return [];
    }

    const sug = [];
    sug.length = 0;

    for (const a of arr)
        if (a.includes(string))
            sug.push(a)

    return sug
}
