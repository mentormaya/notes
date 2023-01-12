const { jsPDF } = window.jspdf;

// const pdf = new jsPDF();

let pdf = new jsPDF({
    unit: "mm",
    format: "a4",
    orientation: "portrait"
});

// var width = pdf.internal.pageSize.getWidth();
// var height = pdf.internal.pageSize.getHeight();

function generatePDF() {
    console.log("Generating PDF! Please wait...");
    
    const title = document.querySelector("#core-wrapper > div > h1").innerHTML;
    
    const post = document.querySelector(".post");

    window.html2canvas = html2canvas;

    pdf.html(post, {
        callback: function () {
            // Save the PDF
            pdf.save(title + ".pdf");
        },
        x: 10,
        y: 10,
        autoPaging: "text",
        margin: [10, 10, 10, 10],
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  { dpi: 200, letterRendering: true, width: 1920, height: 1080, scale: 0.22},
    });
}