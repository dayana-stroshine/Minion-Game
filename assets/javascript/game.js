var counter = 0;
var score = 0;

$("#number-collected").text(counter); //I know this is probably not the best way to do this. 
$("#win-score").text(score);         //I have it overriding on line 160, 
$("#lose-score").text(score);        //but if I don't add this then it doesn't start at 0 because
                                     //it's a global varaible

// ************************************** Comp Total:Gru **************************************//

var CompRandomNum = Math.floor(Math.random() * 102) +19;

function CompRandomNumResult() {

		Math.floor(Math.random() * 10)
		
		}
		
	$("#number-to-match").text(CompRandomNum);

	console.log("Comp Match",CompRandomNum);


// ******************************************* User  *******************************************// 

	var kevinRandomNum = Math.floor(Math.random() * 12) +1;
	var bobRandomNum = Math.floor(Math.random() * 12) +1;
	var stuartRandomNum = Math.floor(Math.random() * 12) +1;
	var carlRandomNum = Math.floor(Math.random() * 12) +1;

// ************************************** Minion #1: Kevin **************************************//

	var imageKevin = $("<img>");

			function kevinRandomNumResults() {

			 Math.floor(Math.random() * 10)
			
			}

//Add a class assignment to the Kevin div
			imageKevin.addClass("kevin-image");

//Add a value assignment to the Kevin div
			imageKevin.attr("data-kevinValue", kevinRandomNum);
			$("#Kevin").append(imageKevin);

			console.log("Kevin", kevinRandomNum);


//Kevin Click Event 
  $("#Kevin").on("click", function() {
	console.log("Kevin clicked")
    
    var KevinValue = ($(this).attr("data-KevinValue"));
    KevinValue = parseInt(KevinValue);

    counter += kevinRandomNum;

    checkScore();
   
  });

  

// ************************************** Minion #2: Bob **************************************//

	var imageBob = $("<img>");

			function bobRandomNumResults() {

			 Math.floor(Math.random() * 10)
			
			}

//Add a class assignment to the Bob div
			imageBob.addClass("bob-image");

//Add a value assignment to the Bob div
			imageBob.attr("data-bobValue", bobRandomNum);
			$("#Bob").append(imageBob);

			console.log("Bob", bobRandomNum);

//Bob Click Event 
  $("#Bob").on("click", function() {
  	counter += bobRandomNum
  	console.log("Bob clicked",counter)

  	checkScore();

  });

// ************************************** Minion #3: Stuart **************************************//

	var imageStuart = $("<img>");

			function stuartRandomNumResults() {

			 Math.floor(Math.random() * 10)
			
			}

//Add a class assignment to the Stuart div
			imageStuart.addClass("stuart-image");

//Add a value assignment to the Stuart div
			imageStuart.attr("data-stuartValue", stuartRandomNum);
			$("#Stuart").append(imageStuart);

			console.log("Stuart", stuartRandomNum);

//Stuart Click Event 
  $("#Stuart").on("click", function() {
  	counter += stuartRandomNum
  	console.log("Stuart clicked",counter)

  	checkScore();

  });

// ************************************** Minion #4: Carl **************************************//

		var imageCarl = $("<img>");

			function carlRandomNumResults() {

			 Math.floor(Math.random() * 10)
			
			}

//Add a class assignment to the Carl div
			imageCarl.addClass("carl-image");

//Add a value assignment to the Carl div
			imageCarl.attr("data-carlValue", carlRandomNum);
			$("#Carl").append(imageBob);

			console.log("Carl", carlRandomNum);

//Carl Click Event 
    $("#Carl").on("click", function() {
  	counter += carlRandomNum
  	console.log("Carl clicked",counter)

  	checkScore();

  });


// ********************************** User Results and Game Reset **********************************//

function checkScore(){
	console.log("Generating New Score", counter)
	if (counter === CompRandomNum) {
      alert("You Beat Gru, Nice!");
		reset();
		$("#win-score").text(++score);

    }

    else if (counter > CompRandomNum) {
      alert("Gru Wins, You Lose!");
		reset();
		$("#lose-score").text(++score);
    }

$("#number-collected").text(counter);

}


// ********************************** User Score **********************************//


function reset(){
	counter = 0 ;
	CompRandomNum = 0;
		

    }




