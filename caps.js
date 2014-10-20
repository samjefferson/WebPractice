
//Multidimensional array to store questions and answers
// var capitals [country, capital, difficulty level]
var capitals = 
[["the United Kingdom", "London", 0],
["France", "Paris", 0],
["Germany", "Berlin", 0],
["Spain", "Madrid",0],
["Portugal", "Lisbon",0],
["Ireland", "Dublin",0],
["Northen Ireland", "Belfast",0],
["the United States of America", "Washington D.C.",0],
["Italy", "Rome", 0],
["Japan", "Tokyo", 0],
["Greece", "Athens", 0]
["Russia", "Moscow", 0],
["Poland", "Warsaw", 1],
["Austria", "Vienna", 1],
["Sweden", "Stockholm", 1],
["Norway", "Oslo", 1],
["Finland", "Helsinki", 1],
["Australia", "Canberra", 1],
["New Zealand", "Wellington", 1],
["Iraq", "Baghdad", 1],
["Canada", "Ottawa",1],
["China", "Beijing", 1],
["India", "New Dehli", 1],
["Egypt", "Cairo", 1],
["Belguim", "Brussels", 1],
["Argentina", "Buenos Aires", 2],
["Brazil", "Brisilia", 2],
["South Africa", "Pretoria", 2],
["Thailand", "Bangkok", 2],
["Ukraine", "Kiev", 2],
["Jamaica", "Kingston", 2],
["Pakistan", "Islamabad", 2],
["Morocco", "Marrakech", 2],
["Iceland", "Reykjavik", 2],
["Turkey", "Istanbul", 2],
["Indonesia", "Jakarta", 3],
["Colombia", "Bogota", 3],
["Peru", "Lima", 3],
["Venezuela", "Caracas", 3],
["Somalia", "Mogadishu", 3],
["Haiti", "Port-au-Prince", 3],
["Iran", "Tehran", 3],
["Chile", "Santiago", 3],
["Bolivia", "Le Paz", 4],
["Uraguay", "Montevideo", 4],
["Paraguay", "Asuncion", 4],
["Gambia", "Banujul", 4],
["Qatar", "Doha", 4],
["Uganda", "Kampala", 4],
["Angola", "Luanda", 4],
["Oman", "Muscat", 4],
["Niger", "Niamey", 4],
["Puerto Rico", "San Juan", 4],
["the British Virgin Islands", "Road Town", 5],
["Kiribati", "Tarawa Atoll", 5],
["Laos", "Vientiane", 5],
["Burkina Faso", "Ouagadougou", 5]
];

var level = 0;
var levelCorrect = 0;
var l1Unasked;
var l2Unasked;
var l3Unasked;
var l4Unasked;
var l5Unasked;
var usedNumbers = [];
var level = 0;

//allows games to increase level when a certain number of correct answers are reached or there are no more wuestions in that level

function levelUp()
	{
		if((level==0)&&((levelCorrect== 3)||(l1Unasked==0)))
			{ level++;
		}
		if((level==1)&&((levelCorrect== 4)||(l2Unasked==0)))
			{ level++;
		}
		if ((level==2)&&((levelCorrect== 4)||(l3Unasked==0)))
			{ level++;
		}
		if((level==3)&&((levelCorrect== 3)||(l4Unasked==0)))
			{ level++;
		}
		if ((level==4)&&((levelCorrect== 3)||(l5Unasked==0)))
			{ level++;
		}

}

function questionSelect(levelNumber){

	var currentAnswersTwo = answersSelect(levelNumber);
	var questionNumber; 

	for(var i=0; i<currentAnswersTwo.length; i++){
		if(capitals[currentAnswersTwo[i]][2]== levelNumber){
			questionNumber = currentAnswersTwo[i];
		}
	}

	alert(questionNumber);
	return questionNumber;

}


function answersSelect(levelNumber){

	var currentAnswers= [];
	var uniqueAnswer;
	var newAnswerInt;
	var levelCorrect = false;
	var counter = 0;

	while(levelCorrect == false){

		currentAnswers = [];
	
		while (currentAnswers.length < 4){
			uniqueAnswer = true;
			newAnswerInt = Math.floor(Math.random() * 56);
			//Loop through array of selected songs to check unique.
			for(var j=0; j<currentAnswers.length; j++){
				if (newAnswerInt == currentAnswers[j]){
					uniqueAnswer = false;
				}
			}
			if (uniqueAnswer == true) {
				currentAnswers.push(newAnswerInt);
			}
		}



		for (var k=0; k<currentAnswers.length; k++){
			if (capitals[currentAnswers[k]][2]== levelNumber){
				counter++;
			}
		}
		if(counter>0){
			levelCorrect = true;
		}
	}
	
	return currentAnswers;
}

function fillButtons(){

	var currentAnswersThree = answersSelect(level);
	var usedAnswer == false;
	var buttonArray = [];

	while(buttonArray.length<4){
		var butRand = Math.floor(Math.random()*3);
		for(i=0; i<buttonArray.length; i++){
			if(butRand==buttonArray[i]){
				usedAnswer=true;
			}
		}

		if(usedAnswer==false){
			buttonArray.push(butRand);
		}
		

	}

	$buttonOne.value = (capitals[currentAnswersThree[buttonArray[0]]][1]);
	$buttonTwo.value = (capitals[currentAnswersThree[buttonArray[1]]][1]);
	$buttonThree.value = (capitals[currentAnswersThree[buttonArray[2]]][1]);
	$buttonFour.value = (capitals[currentAnswersThree[buttonArray[3]]][1]);

	return buttonArray;
}





