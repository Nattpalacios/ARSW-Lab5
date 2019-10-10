apimock=(function(){

	var mockdata=[];



   mockdata["Natalia"]=[{"author":"Natalia","points":[{"x":10,"y":10},{"x":20,"y":20}],"name":"Natt"}];
   mockdata["Natalia2"]=[{"author":"Natalia2","points":[{"x":20,"y":20},{"x":30,"y":30}],"name":"Natt2"}];
   mockdata["Natalia3"]=[{"author":"Natalia3","points":[{"x":10,"y":10},{"x":30,"y":30}],"name":"Natt3"}]


	return {
		getBlueprintByAuthor:function(author,callback){
			callback(
				mockdata[author]
			); 
		}
	}

})(); 
