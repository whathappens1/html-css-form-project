// Initialize EmailJS
(function() {
    emailjs.init("");
})();

// Form elements
const form = document.getElementById('contactForm');
const submitButton = document.getElementById('submitButton');
const loadingSpinner = document.getElementById('loadingSpinner');
const toast = document.getElementById('toast');

// Form submission handler
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Get form values
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Show loading state
    submitButton.disabled = true;
    loadingSpinner.classList.remove('hidden');

    // Prepare email parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        to_name: "Contact Messages",
        message: message,
    };

    try {
        // Send email
        await emailjs.send(
            "",
            "",
            templateParams
        );

        // Clear form
        form.reset();

        // Show success message
        toast.style.opacity = "1";
        setTimeout(() => {
            toast.style.opacity = "0";
        }, 3000);

    } catch (error) {
        console.error("Error sending email:", error);
        alert("حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.");
    } finally {
        // Reset loading state
        submitButton.disabled = false;
        loadingSpinner.classList.add('hidden');
    }
});
