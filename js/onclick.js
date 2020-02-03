function liSearch(string) {
  return (window.location.href =
    window.location.origin + `/search.html?q=${string.replace(/ /g, '+')}`);
}

(function() {
  const input = document.querySelector('input');
  if (window.location.pathname === '/search.html') {
    if (input.value) return;

    const search =
      window.location.search.replace('?q=', '').replace(/\+/g, ' ') ||
      'Rilwan Adams';

    input.value = search;
  }
})();
