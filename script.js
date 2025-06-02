// Add to Bag Button
document.querySelector('.add-to-bag').addEventListener('click', function() {
    this.textContent = 'Added to Bag';
    this.style.backgroundColor = '#4CAF50';
    setTimeout(() => {
        this.textContent = 'Add to Bag';
        this.style.backgroundColor = '#333';
    }, 2000);
});

// Simple Reviews Rotation
const reviews = document.querySelectorAll('.review');
let currentReview = 0;

function showReview(index) {
    reviews.forEach(review => review.style.display = 'none');
    reviews[index].style.display = 'block';
}

// Initialize with first review
if (window.innerWidth <= 768) {
    showReview(0);
    
    setInterval(() => {
        currentReview = (currentReview + 1) % reviews.length;
        showReview(currentReview);
    }, 5000);
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 