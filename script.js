$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            // fname:{
            //     required:true,
            //     minlength:4
            // },
            sname:{
                required:true,
                minlength:5,
                maxlength:7
            },
            emailAdd:{
                required:true,
                email:true,
            },
            password:{
                required:true,
                minlength:4,
                maxlength:9,
            },
            day:{
                required:true,
            }
        },

        messages:{
            sname:{
                required:"enter atleast 4 character",
                minlength:"enter atleast 4 character"
            }
        }
    })
})