$(document).ready(function(){
    $('#contact-form').submit(function(e){
        e.preventDefault();
        
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:5501/contact.html',
            data: {name: name, email: email, message: message},
            success: function(response){
                $('#response-message').html(response);
                $('#name').val('');
                $('#email').val('');
                $('#message').val('');
            }
        });
    });
});
