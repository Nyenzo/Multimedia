// Show hardware specs on hover
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('mouseover', () => {
        const info = item.getAttribute('data-info');
        item.title = info; // Simple tooltip; replace with a custom popup if desired
    });
});

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

document.getElementById('show-report').addEventListener('click', function() {
    const container = document.getElementById('report-container');
    if (container.style.display === 'none') {
        container.style.display = 'block';
        this.textContent = 'Hide Report';
    } else {
        container.style.display = 'none';
        this.textContent = 'View Report';
    }
});