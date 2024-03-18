document.addEventListener("DOMContentLoaded", function() {
    // Select the search input
    const searchInput = document.getElementById('searchInput');

    // Add event listener to the search input for real-time feedback
    searchInput.addEventListener('input', function() {
        // Get the current value of the input, convert it to lowercase, and trim whitespace
        const searchQuery = searchInput.value.toLowerCase().trim();

        // Select all dialect cards
        const dialects = document.querySelectorAll('.dialect');

        // Loop through the dialects and show/hide based on the match
        dialects.forEach(dialect => {
            // Get the dialect name, convert it to lowercase for case-insensitive matching
            const dialectName = dialect.querySelector('.dialect-name').textContent.toLowerCase();
            
            // Check if the dialect name includes the search query
            if(dialectName.includes(searchQuery)) {
                dialect.style.display = ''; // Show the dialect card if it matches
            } else {
                dialect.style.display = 'none'; // Hide the dialect card if it doesn't match
            }
        });
    });
});
