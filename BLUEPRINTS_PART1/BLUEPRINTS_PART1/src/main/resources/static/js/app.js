var module = (function () {
  var authorName;
  var blueprints = {};
  var mapearBlueprints = function (blueprint) {
    console.log(blueprint);
    authorName = blueprint[0].author;
    blueprints = blueprint;
    var blueprintsMapeados = blueprints.map(function (blue){
      var numeroPuntos = blue.points.length;
      var nuevoBlueprint = new Object();
      nuevoBlueprint.name = blue.name;
      nuevoBlueprint.puntos = numeroPuntos;
      return nuevoBlueprint;
    });
    blueprints = blueprintsMapeados;
    console.log(authorName);
    console.log(blueprints);
    return blueprintsMapeados;
  };
  return {
    cambiarNombreAutor: function (nuevoNombreAutor) {
      this.authorName = nuevoNombreAutor;
    },
    actualizarBlueprints: function (author) {
      apimock.getBlueprintByAuthor(author,mapearBlueprints);
    }
  };
})();