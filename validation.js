// $("#formValidation").validate({
//     rules:{
//         name:{
//           minlength: 2
//         },
//         email:{
//             email:true
//         },
//         skill:{
//             minlength: 2
//         },
//         date:{
//             date:true
//         }
//     },
//       messages:{
//         name:{
//             required: "Please enter your name",
//             minlength:"Name at least 2 characters "
//         },
//         email:"Please enter your email",
//         skill:"please enter your skill",
//         date:"please enter your date"
        
//     }, 


  

//     submitHandler: function(form) {
//       form.submit();
    

//     }

    
// });



$(document).ready(function($) {
        
    $("#formValidation").validate({
    rules: {
        name: "required",                    
        
       email: "required",
      skill: "required"
     
    },
    messages: {
        name: "Please enter your Name",                   
        email: "please enter your email",
      skill: "Please enter your city",
      
    },
//      errorPlacement: function(error, element) 
// {
// if ( element.is(":radio") ) 
// {
//     error.appendTo( element.parents('.form-group') );
// }
// else 
// { // This is the default behavior 
//     error.insertAfter( element );
// }
// },
    submitHandler: function(form) {
        form.submit();
    }
    
});
});
