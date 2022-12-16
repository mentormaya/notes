function generatePDF(){
    console.log('Generating PDF! Please wait...');
    const post = document.querySelector('.post');
    var pdf = new jsPDF(); 
    var specialElementHandlers = { 
        '#editor': function (element, renderer) { 
            return true; 
        } 
    };
    // console.log(post.innerHTML)
    pdf.fromHTML( post.innerHTML, 15, 15, { 
        'width': 190, 
            'elementHandlers': specialElementHandlers 
    }); 
    pdf.save('sample-page.pdf');
}