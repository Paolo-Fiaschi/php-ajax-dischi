$( document ).ready(function() {

    $.ajax({
        url: "api.php",
        success: function (data) {
            var source = $('.album-template').html();
            var template = Handlebars.compile(source);
          
            for (var key in data) {
                var context = data[key];
                var html = template(context);
                $('.box').append(html);
      
            }
            // console.log(data);
        },
        error: function(err){
            console.error(err);
            
        }

    });
    // gestione dei generi musicali
    $("select").on("input", function(){
        var filtro = $(this).val().toLowerCase();
        var boxContainer = $(".container");
        // console.log(filtro);
        boxContainer.each(function(){
            var genereCd = $(this).data('genre').toLowerCase();
        //   console.log(genereCd);
            if (filtro === "" || genereCd == filtro) {
            $(this).show();
            }else {
            $(this).hide();
            }
        });
        });            
    
    
});