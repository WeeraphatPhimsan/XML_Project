	var wordList; 
	var requestURL = "Vocab2.json";
	var request = new XMLHttpRequest();
	request.open('GET',requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function(){
		var heroesList = request.response;
		showHeroes(heroesList);
	}
	
	function showHeroes(jsonobj){
		wordList = jsonobj['Vocabulary'];
	}
	function search(){
		var wordToSearch = document.querySelector('.searchBox');
		var definition = document.querySelector('.box');
		var showWord = document.querySelector('.title');
		var check,word = "";
		check = wordToSearch.value; 
		showWord.textContent = check;
		for (var i = 0 ; i < wordList.length ; i++){
		 word = wordList[i].vocab;
			if(word === wordToSearch.value){
 		definition.innerHTML  = word + " :" + "<br>" + '<i>' +  wordList[i].meaning + '</i>'; 		  
		   }
			 
		}
	}
	

