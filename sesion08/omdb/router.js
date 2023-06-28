var Omdb = require("./omdb");
var render = require("./render");
var querystring = require("querystring");

var commonHeaders = {'Content-Type' : 'text/html'};

//Manejar las rutas HTTP para GET y POST
function home(request, response){
  //Si la url == "/" && el verbo es GET
  if(request.url === "/"){
    //Mostramos search.html
    if(request.method.toLowerCase() === 'get'){
      response.writeHead(200, commonHeaders);
      render.view("header",{}, response);
      render.view("search", {}, response);
      render.view("footer", {}, response);
      response.end();
    }else{
      //Si la url == "/" && el verbo es POST

      //Obtenemos la data que esta siendo enviada del body
      request.on("data", function(postBody){
        console.log(postBody);
        //extraemos el texto buscado
        var query = querystring.parse(postBody.toString());
        //Redireccionamos hacia /:omdbSearch
        response.writeHead(303, {"Location": "/" + query.omdbSearch});
        response.end();
      });
    }
  }
}

//Manejar la peticion HTTP GET para la ruta /:omdbSearch eje. /Batman
function result(request, response){
  //Si la url == "/..."
  var omdbSearch = request.url.replace("/", "");

  if (omdbSearch.length > 0){
    response.writeHead(200, commonHeaders);
    render.view("header", {}, response);

    //Obtenemos el JSON del API de omdb
    var omdbResult = new Omdb(omdbSearch);
    //al ejecutar el evento "end"
    omdbResult.on("end", function (resultJSON){
      //Mostramos result.html

      //Almacenamos el resultado en un Objeto Nuevo
      var values = {
        title: resultJSON.Title,
        rated: resultJSON.Rated,
        genre: resultJSON.Genre,
        awards: resultJSON.Awards,
        rating: resultJSON.imdbRating,
        plot: resultJSON.Plot,
        poster: resultJSON.Poster
      }

      render.view("result", values, response);
      render.view("footer", {}, response);
      response.end();
    });

    //al ejecutar el evento "error"
    omdbResult.on("error", function (error){
        //Mostramos error.html
        render.view("error", {errorMessage: error.message}, response);
        render.view("search", {}, response);
        render.view("footer", {}, response);
        response.end();
    })

  }
}

module.exports.home = home;
module.exports.result = result;
