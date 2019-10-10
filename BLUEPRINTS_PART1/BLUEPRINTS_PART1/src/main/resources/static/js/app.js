var module = (function () {
  var authorName;
  var blueprints = {};

  var mapearBlueprints = function(blueprint) {
    authorName = blueprint[0].author;
    blueprints = blueprint;
    bl = blueprints.map(function(blue) {
      return { name: blue.name, points: blue.points.length };
    });
    return bl;
  };
  return {
    cambiarNombreAutor: function (nuevoNombreAutor) {
      authorName = nuevoNombreAutor;
      console.log(authorName);
    },
    actualizarBlueprints: function (author) {
      apimock.getBlueprintByAuthor(author,mapearBlueprints);
    },
    agregarFilas: function (author){
      apimock.getBlueprintByAuthor(author,addRows);
    }
  };
})();