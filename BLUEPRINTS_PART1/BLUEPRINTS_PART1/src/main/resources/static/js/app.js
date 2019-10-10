var module = (function () {
  var authorName;
  var blueprints = {};

  var mapearBlueprints = function(blueprint) {
    authorName = blueprint[0].author;
    blueprints = blueprint;
    return blueprints.map(function(blue) {
      return { name: blue.name, points: blue.points.length };
    });
  };
  return {
    cambiarNombreAutor: function (nuevoNombreAutor) {
      authorName = nuevoNombreAutor;
    },
    actualizarBlueprints: function (author) {
      apimock.getBlueprintByAuthor(author,mapearBlueprints);
    }
  };
})();