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
  handlers()
}

document.body.onload = function() {main_functions();}
function handlers(){
    document.getElementById("next").onclick = function() {start_sort();};
    document.getElementById("interval").onchange = function() {change_interval();};
    //document.getElementById("interval").oninput = function() {change_interval();};
    document.getElementById("reset").onclick = function() {reload();};
    document.getElementById("pause").onclick = function() {pause();};
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
  document.getElementById("next").onclick = function() { start_sort(); };
  document.getElementById("pause").disabled = true;
  document.getElementById("pause").style.backgroundColor = "grey";
};

function change_interval()
{
  if(insertion_artefact.prev == -1 && (insertion_artefact.action == 1 || insertion_artefact.action == -1)){
    if(insertion_artefact.interval != 0) { clearInterval(insertion_artefact.interval); }
    
    if(document.getElementById("interval").value != 100)
    {
      insertion_artefact.interval = setInterval(next_step, 2600-document.getElementById("interval").value); 
      document.getElementById("pause").style.backgroundColor = "#288ec8";     
    }
    else
      document.getElementById("pause").style.backgroundColor = "grey";
  }
};

function start_sort()
{
  if(insertion_artefact.interval != 0) { clearInterval(insertion_artefact.interval); insertion_artefact.interval = 0; }
  document.getElementById("comment-box-bigger").style.visibility = "visible";
  insertion_artefact.card = document.querySelectorAll('.card');
 
  insertion_artefact.action = 1;
  insertion_artefact.finished = false;
  insertion_artefact.comparisons = 0;
  insertion_artefact.fn_name = "insertion_sort"
  insertion_artefact.iterator1 = 1;
  insertion_artefact.iterator2=1;
  insertion_artefact.operation = "Insert";

  next_step();

  document.getElementById("next").onclick = function() { next_step(); };
  document.getElementById("next").value = "Next";
  document.getElementById("pause").disabled = false;
  document.getElementById("pause").style.backgroundColor = "#288ec8";
 
  if(document.getElementById("interval").value == 100)
  {
    document.getElementById("next").disabled = false;
  }
  else
  {
    document.getElementById("pause").style.visibility = "visible";
    if(insertion_artefact.interval == 0)
      insertion_artefact.interval = setInterval(next_step,2600-document.getElementById("interval").value);
    else
    {
      clearInterval(insertion_artefact.interval);
      insertion_artefact.interval = 0;
    }
  }
};

//performs the next step pf the insertion
function next_step(){
  //console.log(insertion_artefact.action);
  resetcolor();
  if(insertion_artefact.iterator1===insertion_artefact.card.length){
    insertion_artefact.finished=true;
    insertion_sort();
    return;
  }
  if(insertion_artefact.action == 1)
  {
    
    insertion_artefact.index = insertionIndex(insertion_artefact.iterator1);
    if(insertion_artefact.index!=insertion_artefact.iterator1){ 
      
      insertion_artefact.action = -1;
    }else{
      if(insertion_artefact.iterator1>0){
      document.getElementById("ins").innerHTML = "<p>" +  "Since " + insertion_artefact.card[insertion_artefact.iterator1].innerHTML +   " is greater than  "  + insertion_artefact.card[insertion_artefact.iterator1-1].innerHTML + "</p>" + "No Action is taken" + "</p>" +  "No of Comparisons : " + insertion_artefact.comparisons + "</p>" + "No of Swaps : " + insertion_artefact.swaps;
      }
      insertion_artefact.iterator1=insertion_artefact.iterator2;
      insertion_sort();
    }
  }
  else
  {
    
    insertion_artefact.action = 1;
    console.log(insertion_artefact.iterator1,insertion_artefact.index);
    insertion(insertion_artefact.iterator1,insertion_artefact.index);
    insertion_artefact.iterator1=insertion_artefact.index;
    insertion_artefact.finished = false;
    //insertion_sort();
  }
}

function resetcolor(){
 
  for(var n = 0; n < insertion_artefact.numOfCards; n++){
    insertion_artefact.card[n].style.backgroundColor =  "#288ec8";
  }
}





//finds the right index to insert the element 
function insertionIndex(i){
  if(i===0){
    return 0;
  }
  //for(let j = i-1;j>=0;j--){
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
   
//}
  
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

function pause(){
  if(insertion_artefact.prev == -1){
    insertion_artefact.prev = document.getElementById("interval").value;
    if(insertion_artefact.interval != 0) 
      clearInterval(insertion_artefact.interval);
    document.getElementById("pause").value = "Play";
  }else{
    insertion_artefact.prev = -1;
    insertion_artefact.interval = setInterval(next_step, 2600-document.getElementById("interval").value);
    document.getElementById("pause").value = "Pause";
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
      if(document.getElementById("interval").value != 100)
      {
        clearInterval(insertion_artefact.interval);
        insertion_artefact.interval = 0;
      }
      document.getElementById("ins").innerHTML = "<h3>The sort is complete - there were " + insertion_artefact.comparisons + " comparisons and  " + insertion_artefact.swaps + " swaps "

      document.getElementById("next").style.backgroundColor = "grey";
      document.getElementById("next").disabled = true;
      document.getElementById("pause").style.backgroundColor = "grey";
      document.getElementById("pause").disabled = true;
      insertion_artefact.iterator1 = 0;
    
    
  }
}

function reload(){
  location.reload(true);
};








