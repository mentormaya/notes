function generatePDF(){
    console.log('Generating PDF! Please wait...');
    const post = document.querySelector('.post');
    var opt = {
        margin:       0.7,
        filename:     'myfile.pdf',
        image:        { type: 'png', quality: 0.98 },
        html2canvas:  { scale: 1 },
        jsPDF:        { unit: 'in', format: 'A4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(post).save();
}