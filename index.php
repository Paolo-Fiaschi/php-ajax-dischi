<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Dischi Musicali</title>
</head>
<body>
    <header>
        <img src="img/logoSpotify.png" alt="">
      </header>
      <div class="filtro">
        <label for="">Scegli per genere</label>
        <select class="genere" name="Genere">
          <option value=""></option>
          <option value="Rock">Rock</option>
          <option value="Pop">Pop</option>
          <option value="Jazz">Jazz</option>
          <option value="Metal">Metal</option>
        </select>
        <label for="">Scegli per artista</label>
        <select class="artisti" name="artist">
          <option value=""></option>
        </select>
      </div>
          <div class="box">
  
          </div>
  
    <!-- TEMPLATE -------------->
		<script class="album-template" type="text/x-handlebars-template">
			<div class="container" data-genre="{{genre}}" data-artisti="{{author}}">
				<div class="album">
					<img src={{poster}}>
				</div>
				<div class="titolo">
					<h3>{{title}}</h3>
          <div class="artistYear">
            <p>{{author}}</p>
            <p>{{year}}</p>
          </div>
				</div>
			</div>
		</script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
    <script src="main.js"></script>
</body>
</html>