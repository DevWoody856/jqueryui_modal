$(function() {
    $("#button__click").on("click", function() {
        $("#click__modal").dialog({
                modal: true,
                height: "auto",
                width: "30vw",
                title: "Please add number!",
                buttons: {
                    "Add Number": addNumber,
                    "Cancel": function () {
                        $(this).dialog("close");
                    }
                }
            }
        )
    });
});

function addNumber(){
            $.ajax({
                type: 'POST',
                url: formTestURL,
                data:{
                    csrfmiddlewaretoken:csrftoken,
                    username:$('#id_username').val(),
                    number:$('#id_number').val(),
                },
            success: function(data){

                    if(data['status']==="error"){
                     $('#message').text('Error!');
                        return false
                    }

                    $('#id_username').val("")
                    $('#id_number').val("")
                    $('#message').text('Success!');
                },
            error: function(error){
                console.log(error)
            },
            });
    }