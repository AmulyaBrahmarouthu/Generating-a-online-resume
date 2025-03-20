// script.js
document.getElementById("generate-pdf").addEventListener("click", generateResume);

function updatePreview() {
    document.getElementById("preview-name").textContent = document.getElementById("name").value;
    document.getElementById("preview-email").textContent = "Email: " + document.getElementById("email").value;
    document.getElementById("preview-phone").textContent = "Phone: " + document.getElementById("phone").value;
    document.getElementById("preview-address").textContent = "Address: " + document.getElementById("address").value;
    document.getElementById("preview-skills").textContent = document.getElementById("skills").value;
    document.getElementById("preview-experience").textContent = document.getElementById("experience").value;
    document.getElementById("preview-education").textContent = document.getElementById("education").value;
}

function generateResume() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;

    // Setting up the content for PDF
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    
    doc.text(`Name: ${name}`, 10, 10);
    doc.text(`Email: ${email}`, 10, 20);
    doc.text(`Phone: ${phone}`, 10, 30);
    doc.text(`Address: ${address}`, 10, 40);
    
    doc.text(`Skills: ${skills}`, 10, 60);
    doc.text(`Experience: ${experience}`, 10, 70);
    doc.text(`Education: ${education}`, 10, 90);

    // Save the PDF
    doc.save("resume.pdf");
}

// Update live preview as the user types
document.querySelectorAll("input, textarea").forEach(element => {
    element.addEventListener("input", updatePreview);
});

// Initialize the preview with default values
updatePreview();
