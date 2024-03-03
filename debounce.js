let timeoutId;

document.getElementById('searchInput').addEventListener('input', function(event) {
    const searchValue = event.target.value.trim();
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
        performSearch(searchValue);
    }, 300); // 300ms debounce delay
});

function performSearch(searchValue) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    // Perform your search logic here
    // For demonstration, let's just show a list of matching items
    const data = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Grapes'];
    const filteredData = data.filter(item => item.toLowerCase().includes(searchValue.toLowerCase()));

    filteredData.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        searchResults.appendChild(li);
    });
}
