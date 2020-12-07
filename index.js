
const contentJsonFile=
[	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu":0.78,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},


	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},


	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu":0.26,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}

]

var allData = JSON.parse(JSON.stringify(contentJsonFile));

function batterTypes(){
	var allBatterTypes =[];
	var batterArrays =[];

	for ( var i=0 ; i<allData.length ; i++) {

		batterArrays = allData[i].batters.batter;


        for (var batterElement of batterArrays) {
		     allBatterTypes.push(batterElement.type);

		}
		
		}
		var x = document.getElementById("batter").innerHTML=allBatterTypes;
    return x;
    
}

function toppingTypes(){
	var allToppingTypes =[];
	var toppingArrays =[];

	  for ( var i=0 ; i<allData.length ; i++) {
          
          toppingArrays = allData[i].topping;


        for (var toppingElement of toppingArrays) {
		  
          allToppingTypes.push(toppingElement.type);

	}

	}
	var x = document.getElementById("topping").innerHTML=allToppingTypes;
    return x;

} 


function ppuAverage(){


	var Average =0;

	for ( var element of allData) {

		Average += element.ppu;
	}
    var x = document.getElementById("ppu avg").innerHTML=Average/allData.length;
    return x;
}

function ppuSum(){

	var Sum =0;

	for ( var element of allData) {
		Sum += element.ppu;
	}
    var x = document.getElementById("ppu sum").innerHTML=Sum;
    return x;
}


function allIds(){

  var allIds = [];

	  for ( var i=0 ; i<allData.length ; i++) {

      
       	batterArrays = allData[i].batters.batter;


        for (var batterElement of batterArrays) {
		     allIds.push(batterElement.id);}


        toppingArrays = allData[i].topping;
         for (var toppingElement of toppingArrays) {
		  
          allIds.push(toppingElement.id);}
		}       
		var x = document.getElementById("IDs").innerHTML=allIds;
		return x;

}
// i call these below functions so that show results in html document   
toppingTypes();
batterTypes();
ppuAverage();
ppuSum();
allIds();
// showing results in console
console.log("topping types are: "+toppingTypes());
console.log("batter types are: "+batterTypes());
console.log("ppu avg is: "+ppuAverage());
console.log("ppu sum is: "+ppuSum());
console.log("IDs are: "+allIds());
