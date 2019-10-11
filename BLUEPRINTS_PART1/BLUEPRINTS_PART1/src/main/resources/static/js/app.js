var module = (function () {
  var authorName;
  var blueprints = {};

  var mapearBlueprints = function(blueprint) {
    
    authorName = blueprint[0].author;
    
    blueprints = blueprint;
    bl = blueprints.map(function(blue) {
      return { name: blue.name, points: blue.points.length };
    });
    blueprints = bl;
    return bl;
  };
  var addRows = function(){
    for(var i = 0; i < blueprints.length; i++){
        var blueprint = blueprints[i];
        var name = blueprint.name;
        var numPoints = blueprint.points;
        var txt = '<tr id="'+ (i + 1)+'">'+
        '<th scope="row">'+name+'</th>'+
        '<td>'+numPoints+'<td>';
        $("#blueprints").append(txt);
    }
  }

  return {
    cambiarNombreAutor: function (nuevoNombreAutor) {
      authorName = nuevoNombreAutor;
      console.log(authorName);
    },
    actualizarBlueprints: function () {
      $('#blueprints').find('tbody').empty();
      var author = $('#inputAuthor').val();
      apimock.getBlueprintByAuthor(author,mapearBlueprints);
      this.agregarFilas();
    },
    agregarFilas: addRows
  };
})();