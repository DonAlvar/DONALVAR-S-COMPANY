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
function showSuccessMessage(event) {
    event.preventDefault(); // Prevent form submission

    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block"; // Show success message

    // Refresh the page after 3 seconds
    setTimeout(() => {
        location.reload();
    }, 3000); // 3000ms = 3 seconds
}
console.log
