var module = (function () {
  var authorName = {};
  var blueprints = {};
  var guardarElementos = function (blueprint) {    
    authorName = blueprint.author;
    blueprints = blueprint.blueprints;
  };
  var mapearBlueprints = function (blueprint) {
    guardarElementos(blueprint);
    var blueprintsMapeados = blueprints.map(function (blue){
      var numeroPuntos = blue.points.size;
      var nuevoBlueprint = new Object();
      nuevoBlueprint.name = blue.name;
      nuevoBlueprint.puntos = numeroPuntos;
      return nuevoBlueprint;
    });
    blueprints = blueprintsMapeados;
    return blueprintsMapeados;
  };
  return {
    publicMethod: function (nuevoNombreAutor) {
        this.authorName = nuevoNombreAutor;
    }
  };
})();