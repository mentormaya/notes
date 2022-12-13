function generatePDF(){
    console.log('Generating PDF! Please wait...');
    const post = document.querySelector('.post');
    var opt = {
        margin:       0.7,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'A4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(post).save();
}