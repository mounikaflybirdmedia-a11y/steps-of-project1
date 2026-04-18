document.addEventListener('DOMContentLoaded', () => {
    const alertBtn = document.getElementById('alertBtn');
    
    if (alertBtn) {
        alertBtn.addEventListener('click', () => {
            // Display an alert to the user
            alert('Hello! Thanks for clicking me. Your JavaScript is working perfectly!');
            
            // Add a fun little visual effect to the button when clicked
            const originalText = alertBtn.textContent;
            const originalColor = alertBtn.style.backgroundColor;
            
            alertBtn.style.backgroundColor = '#10b981'; // Green color for success
            alertBtn.textContent = 'Clicked!';
            
            // Revert back to original state after 2 seconds
            setTimeout(() => {
                alertBtn.style.backgroundColor = originalColor;
                alertBtn.textContent = originalText;
            }, 2000);
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
