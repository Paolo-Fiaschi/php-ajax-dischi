$( document ).ready(function() {

    $.ajax({
        url: "api.php",
        success: function (data) {
            var source = $('.album-template').html();
            var template = Handlebars.compile(source);
          
            for (var key in data) {
                var box = data[key];
                var context = {
                    cover: box["poster"],
                    title: box["title"],
                    artist: box["author"],
                    year: box["year"],
                    genre: box["genre"]
                  };
                  var html = template(context);
                  $('.box').append(html);
      
            }
            // console.log(data);
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
        },
        error: function(err){
            console.error(err);
            
        }

    });
    
});