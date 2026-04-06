function toggleDetails() {
    const detailsDiv = document.getElementById('moreDetails');
    detailsDiv.classList.toggle('hidden');
}

function updateCounter() {
    // Get current visit count from localStorage
    let visitCount = localStorage.getItem('visitCount');
    
    if (visitCount === null) {
        visitCount = 1;
    } else {
        visitCount = parseInt(visitCount) + 1;
    }
    
    // Save updated count to localStorage
    localStorage.setItem('visitCount', visitCount);
    
    // Display the count
    document.getElementById('visitCount').textContent = visitCount;
}
