class Insertion_sort{
    constructor(){
      this.iterator1 = 0;
      this.iterator2 = 0;
      this.finished = false;
      this.numOfCards = 10;
      this.prev = -1;
      this.action = 0;
      this.fn_name = "";
      this.card;
      this.comparisons = 0;
      this.operation = "";
      this.interval = 0;
      this.num = [];
      this.index=0;
      this.swaps =  0;
    };
  };
  let insertion_artefact = new Insertion_sort();

  function main_functions()
  { 
    randomise();
    start_sort();
    handlers()
  }

document.body.onload = function() {main_functions();}
function handlers(){
  document.getElementById("next").onclick = function() {check_next();};
  document.getElementById("swap").onclick = function() {check_swap();};
  document.getElementById("reset").onclick = function() {reload();};
    };


function randomise()
  { 
  insertion_artefact.action = 0;
  var classToFill = document.getElementById("cards");
  for (var i = 0; i < insertion_artefact.numOfCards; i++) {
    insertion_artefact.num[i] = Math.floor(Math.random() * 90 + 10);
    var temp = document.createElement("div");
    temp.className = "card";
    temp.innerHTML = insertion_artefact.num[i];
    temp.style.fontStyle = "normal";
    temp.style.color = "white";
    classToFill.appendChild(temp);
  }
};

function resetcolor(){
 
  for(var n = 0; n < insertion_artefact.numOfCards; n++){
    insertion_artefact.card[n].style.backgroundColor =  "#288ec8";
  }
}

function start_sort()
{
  console.log("inside start sort");
  document.getElementById("comment-box-smaller").style.visibility = "visible";
  insertion_artefact.card = document.querySelectorAll('.card');
 
  insertion_artefact.action = 1;
  insertion_artefact.finished = false;
  insertion_artefact.comparisons = 0;
  insertion_artefact.fn_name = "insertion_sort"
  insertion_artefact.iterator1 = 1;
  insertion_artefact.iterator2=1;
  insertion_artefact.operation = "Insert";

  document.getElementById("swap").style.visibility = "visible";
  document.getElementById("next").style.visibility = "visible";

  document.getElementById("swap").onclick = function() { check_swap(); };
  document.getElementById("next").onclick = function() { check_next(); };

  document.getElementById("next").disabled = false;
};


function insertionIndex(i){
  
  console.log("yoyo")
  if(i===0){
    return 0;
  }
  
    let j = i-1;
    console.log(insertion_artefact.card[j].innerHTML);
    document.getElementById("ins").innerHTML = "<p>" +  "Comparing " + insertion_artefact.card[i].innerHTML + " with " + insertion_artefact.card[j].innerHTML + "</p>" + "No of Comparisons : " + insertion_artefact.comparisons + "</p>" + "No of Swaps : " + insertion_artefact.swaps;

    resetcolor();
    insertion_artefact.comparisons++;
   
    insertion_artefact.card[i].style.backgroundColor =  "#a4c652";
    insertion_artefact.card[j].style.backgroundColor =   "#a4c652";
    if(eval(insertion_artefact.card[i].innerHTML)<eval(insertion_artefact.card[j].innerHTML)){
     
      return j;

    }
    
    if(eval(insertion_artefact.card[i].innerHTML)>=eval(insertion_artefact.card[j].innerHTML)){
     
      return i;
    }
  
}

//inserts the element into the right index 
function insertion(i,j){

  resetcolor();
  insertion_artefact.swaps++;
  document.getElementById("ins").innerHTML = "<p>" + "Since " + insertion_artefact.card[i].innerHTML + " is lesser than " +  insertion_artefact.card[j].innerHTML + "</p>"+ "Inserting " + insertion_artefact.card[i].innerHTML +   " before "  + insertion_artefact.card[j].innerHTML + "</p>" +  "No of Comparisons : " + insertion_artefact.comparisons + "</p>" + "No of Swaps : " + insertion_artefact.swaps;
  insertion_artefact.card[j].style.backgroundColor =  "#FFA500";
  let temp = eval(insertion_artefact.card[i].innerHTML);
  
  /**for(var n = i-1;n>=j;n--){
    insertion_artefact.card[n+1].innerHTML = eval(insertion_artefact.card[n].innerHTML);
  }**/
  insertion_artefact.card[i].innerHTML = insertion_artefact.card[j].innerHTML;
  insertion_artefact.card[j].innerHTML = temp;

}

function check_swap(){
  
  var temp = insertionIndex(insertion_artefact.iterator1);
  console.log(temp);
  console.log(insertion_artefact.iterator1);
  if(temp !== insertion_artefact.iterator1)
  {
    document.getElementById("ins").innerHTML = "Correct!";
    console.log(insertion_artefact.iterator1,temp);
    insertion(insertion_artefact.iterator1,temp);
    insertion_artefact.iterator1=temp;
    insertion_artefact.finished = false;
    
  }else{
    document.getElementById("ins").innerHTML = "Incorrect, Think again!";    
  
  }
};

function check_next(){
  if(insertion_artefact.iterator1===insertion_artefact.card.length){
    insertion_artefact.finished=true;
    insertion_sort();
    return;
  }
  var temp = insertionIndex(insertion_artefact.iterator1);
  
  if(temp ===insertion_artefact.iterator1)
  {
    document.getElementById("ins").innerHTML = "Correct!";
    insertion_artefact.iterator1=insertion_artefact.iterator2;
    insertion_sort();
  }else{
    document.getElementById("ins").innerHTML = "Incorrect, Think again!";   
  } 
};


function insertion_sort()
{
  if(insertion_artefact.finished!==true){
    insertion_artefact.iterator1++;
    insertion_artefact.iterator2 = insertion_artefact.iterator1;
  }
  
  else
  { 
      document.getElementById("ins").innerHTML = "<h3>The sort is complete - there were " + insertion_artefact.comparisons + " comparisons and  " + insertion_artefact.swaps + " swaps "
      document.getElementById("next").style.backgroundColor = "grey";
      document.getElementById("next").disabled = true;
      insertion_artefact.iterator1 = 0; 
  }
}






