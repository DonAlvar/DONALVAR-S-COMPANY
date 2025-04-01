document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

console.log("website script loaded successfully")
function showSuccessMessage(event) {
    event.preventDefault(); // Prevents form from actually submitting
    document.getElementById("successMessage").style.display = "block";
}
console.log
