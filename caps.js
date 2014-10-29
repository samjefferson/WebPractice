
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
["Turkey", "Ankara", 2],
["Indonesia", "Jakarta", 3],
["Colombia", "Bogota", 3],
["Peru", "Lima", 3],
["Venezuela", "Caracas", 3],
["Somalia", "Mogadishu", 3],
["Haiti", "Port au Prince", 3],
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
var usedNumbers = [];
var level = 0;
var currentAnswers = [];
var buttonArray = [];
var questionNumber;
var correct = 0;
var attempts = 0;
//allows games to increase level when a certain number of correct answers are reached or there are no more wuestions in that level

function levelUp()
	{
		if((level==0)&&(levelCorrect== 3))
			{ level++;
			levelCorrect = 0;	
		}
		if((level==1)&&(levelCorrect== 4))
			{ level++;
				levelCorrect = 0;
		}
		if ((level==2)&&(levelCorrect== 4)){
			level++;
			levelCorrect = 0;
		}
		
		if((level==3)&&(levelCorrect== 4))
			{ level++;
				levelCorrect = 0;
		}
		if ((level==4)&&(levelCorrect== 3))
			{ level++;
				levelCorrect = 0
		}

}

function questionSelect(levelNumber){



	var currentAnswersTwo=currentAnswers;

	for(var i=0; i<currentAnswersTwo.length; i++){
		if(capitals[currentAnswersTwo[i]][2]== levelNumber){
			questionNumber = currentAnswersTwo[i];
		}
	}


}



function answersSelect(levelNumber){

	var uniqueAnswer;
	var newAnswerInt;
	var levelCorrect = false;
	var counter = 0;

	while(levelCorrect == false){
		currentAnswers = [];
		
	
		while (currentAnswers.length < 4){
			uniqueAnswer = true;
			newAnswerInt = Math.floor(Math.random() * 54);
			//loop through unsednumber array to check if it has already been answered correctly
			for(var u=0; u<usedNumbers.length; u++){
				if(newAnswerInt== usedNumbers[u]){
					uniqueAnswer = false;
				}
			}	
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
	
}

function fillButtons(){
	

	var currentAnswersThree = currentAnswers;

	var uniqueButton;
	buttonArray = [];
	var butRand;

	while(buttonArray.length<4){
		uniqueButton = true;
		butRand = Math.floor(Math.random()*4);
		for(var p=0; p<buttonArray.length; p++){
			if(butRand==buttonArray[p]){
				uniqueButton=false;
			}
		}

		if(uniqueButton == true){
			buttonArray.push(butRand);
		}
		

	}
	

	document.getElementById("buttonOne").value = (capitals[currentAnswersThree[buttonArray[0]]][1]);
	document.getElementById("buttonTwo").value = (capitals[currentAnswersThree[buttonArray[1]]][1]);
	document.getElementById("buttonThree").value = (capitals[currentAnswersThree[buttonArray[2]]][1]);
	document.getElementById("buttonFour").value = (capitals[currentAnswersThree[buttonArray[3]]][1]);

}

function fillQuestion(levelNumber){



	var questi = document.getElementById("capital");

	questi.innerHTML = (capitals[questionNumber][0]);

	


}

function scoreCounter(){
	document.getElementById("correct").innerHTML = correct;
	document.getElementById("attempts").innerHTML = attempts;
}

function loadGame(){
	
	answersSelect(level);
	questionSelect(level);
	fillQuestion(level);
	fillButtons();
	
	scoreCounter();
	
}

function checkAnswer(){
	
	attempts++;
	
	levelUp();
	var counterCheck;
	
	for(var q=0; q<buttonArray.length; q++){
		if(currentAnswers[buttonArray[q]]==questionNumber){
			counterCheck= q;
			
		}
	}
	
	return counterCheck;
}

function clickButOne(){
	var numberOne = checkAnswer();
	if(numberOne==0){
		document.getElementById("result").innerHTML =("CORRECT");
			correct++;
			levelCorrect++;
			usedNumbers.push(questionNumber);
	}
	if(numberOne!=0){
		document.getElementById("result").innerHTML = ("INCORRECT!");
	}
	if(attempts<20){
		loadGame();
	}
	if(attempts==20){
		document.getElementById("attempts").innerHTML= (attempts);
		document.getElementById("correct").innerHTML= (correct);
		document.getElementById("endMessage").innerHTML= ("Congratulations you have completed the quiz.  You have scored "+correct+" out of 20!");
	}

}

function clickButTwo(){
	var numberTwo = checkAnswer();
	if(numberTwo==1){
		document.getElementById("result").innerHTML =("CORRECT");
			correct++;
			levelCorrect++;
			usedNumbers.push(questionNumber);
	}
	if(numberTwo!=1){
		document.getElementById("result").innerHTML = ("INCORRECT!");
	}

	if(attempts<20){
		loadGame();
	}
	if(attempts==20){
		document.getElementById("attempts").innerHTML= (attempts);
		document.getElementById("correct").innerHTML= (correct);
		document.getElementById("endMessage").innerHTML= ("Congratulations you have completed the quiz.  You have scored "+correct+" out of 20!");
	}
}
function clickButThree(){
	var numberThree = checkAnswer();
	if(numberThree==2){
		document.getElementById("result").innerHTML =("CORRECT");
			correct++;
			levelCorrect++;
			usedNumbers.push(questionNumber);
	}
	if(numberThree!=2){
		document.getElementById("result").innerHTML = ("INCORRECT!");
	}
	if(attempts<20){
		loadGame();
	}
	if(attempts==20){
		document.getElementById("attempts").innerHTML= (attempts);
		document.getElementById("correct").innerHTML= (correct);
		document.getElementById("endMessage").innerHTML= ("Congratulations you have completed the quiz.  You have scored "+correct+" out of 20!");
	}
}

function clickButFour(){
	var numberFour = checkAnswer();
	if(numberFour==3){
		document.getElementById("result").innerHTML =("CORRECT");
			correct++;
			levelCorrect++;
			usedNumbers.push(questionNumber);
	}
	if(numberFour!=3){
		document.getElementById("result").innerHTML = ("INCORRECT!");
	}
	if(attempts<20){
		loadGame();
	}
	if(attempts==20){
		document.getElementById("attempts").innerHTML= (attempts);
		document.getElementById("correct").innerHTML= (correct);
		document.getElementById("endMessage").innerHTML= ("Congratulations you have completed the quiz.  You have scored "+correct+" out of 20!");
	}
}






