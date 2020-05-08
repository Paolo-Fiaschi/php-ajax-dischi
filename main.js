$( document ).ready(function() {
    $("select").val("");
    var source = $('.album-template').html();
    var template = Handlebars.compile(source);
    $.ajax({
        url: "api.php",
        success: function (data) {
          
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
    $.ajax({
        url: "api.php",
        success: function (data) {
            for (var key in data) {
                var artisti = $(".artisti");
                var box = data[key];
                var artist = box["author"];
                var genere = box["genre"];
                artisti.append("<option value='" + artist + "'" + "data-genre='" + genere + "'" + ">" + artist + "</option>");
                // console.log(artist);
      
            }
        }
    });
    // gestione degli artisti
    $(".artisti").on("input", function(){
        var filtroArtisti = $(this).val();
        console.log(filtroArtisti);
        choseArtist(filtroArtisti);
    });
    // gestione dei generi musicali
    $(".genere").on("input", function(){
        var filtroGenere = $(this).val().toLowerCase();
        choseGenre(filtroGenere);
    }); 
               
    
    
});
// funzione per filtro artisti
function choseArtist(filtroArtisti) {
    var boxContainer = $(".container");
    boxContainer.each(function(){
        var artisti = $(this).data('artisti');
    //   console.log(genereCd);
        if (filtroArtisti === "" || artisti == filtroArtisti) {
        $(this).show();
        }else {
        $(this).hide();
        }
    });

}
// funzione per filtro generi
function choseGenre(filtroGenere){
    var boxContainer = $(".container");
    // console.log(filtro);
    boxContainer.each(function(){
        var genereCd = $(this).data('genre').toLowerCase();
    //   console.log(genereCd);
        if (filtroGenere === "" || genereCd == filtroGenere) {
        $(this).show();
        }else {
        $(this).hide();
        }
    });

}