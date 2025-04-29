// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  menuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
  });
});

// Search form submission
document.querySelector('.search-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const inputs = this.querySelectorAll('input');
  const legalIssue = inputs[0].value;
  const location = inputs[1].value;
  
  if (legalIssue && location) {
    alert(`Searching for ${legalIssue} lawyers in ${location}`);
    // In a real app, this would redirect to search results
  } else {
    alert('Please enter both a legal issue and location');
  }
});

// Popular search terms click handler
document.querySelectorAll('.popular span').forEach(span => {
  span.addEventListener('click', function() {
    document.querySelector('.search-form input').value = this.textContent;
  });
});