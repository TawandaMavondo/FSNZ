
// port:2525


var donationEnquryForm = document.querySelector('#donations-form');
var spinner = document.querySelector('#spinner-loading');
var enqueryModal = $('.donations-modal-lg');
spinner.style.opacity='0'
donationEnquryForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    spinner.style.opacity='1'
    var formData = new FormData(donationEnquryForm);
    var sanitizedData={};
    for(valuesPair of formData.entries()){
        var key = valuesPair[0];
        var value = valuesPair[1];
        sanitizedData[key] =value;
    }
    var {emailAddress,message} = sanitizedData;

     Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tawandagdmavondo@gmail.com",
        Password : "0361184A27970CEAE10FE63CDD49D6D23937",
        To : 'tawandagdmavondo@gmail.com',
        From:emailAddress,
        Subject:"enqry",
        Body:message
    }).then((message)=>{
        alert("Message was send" ,message)
        donationEnquryForm.reset();
        spinner.style.opacity='0'
        enqueryModal.modal('hide')
    }).catch((err)=>{
        alert(err)
        donationEnquryForm.reset();
        spinner.style.opacity='0'
    })

});



// Clearing the form wen the modal hides
enqueryModal.on('hide.bs.modal',(e)=>{
   resetModals();
});
function resetModals (){
    spinner.style.opacity='0'
    donationEnquryForm.reset();
}














function sendEmail(Subject,From,Body){
     return( Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tawandagdmavondo@gmail.com",
        Password : "0361184A27970CEAE10FE63CDD49D6D23937",
        To : 'tawandagdmavondo@gmail.com',
        From,
        Subject,
        Body
    }))

}
