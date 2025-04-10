document.addEventListener("DOMContentLoaded", function () {
    const downloadButton = document.getElementById("downloadCV");
    
    downloadButton.addEventListener("click", function () {
        const fileUrl = "./assets/cv/Fidan Valiyeva CV (5).pdf";  // Ensure the path is correct
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "Fidan Valiyeva CV.pdf";  // File name for download
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});