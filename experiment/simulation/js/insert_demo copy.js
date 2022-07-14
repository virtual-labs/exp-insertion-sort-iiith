class Insertion_sort{
    constructor(){
      this.iterator1 = 0;
      this.iterator2 = 0;
      this.finished = false;
      this.numOfCards = 10;
      this.prev = -1;
      this.action = 0;
      this.fn_name = "";
      this.card = [];
      this.comparisons = 0;
      this.operation = "";
      this.interval = 0;
      this.num = [];
      this.index=0;
      this.insertions =  0;
      this.positions = [];
      this.distances = {};
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
    temp.id = `card${i}`;
    temp.innerHTML = insertion_artefact.num[i];
    temp.style.fontStyle = "normal";
    temp.style.color = "white";
    classToFill.appendChild(temp);
    insertion_artefact.positions.push(i);
    console.log(temp.id);
    insertion_artefact.card.push(temp.id);
   

    
   
  }
  console.log(insertion_artefact.distances);
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
  //insertion_artefact.card = document.querySelectorAll('.card');
  for(var i = 0 ; i< insertion_artefact.numOfCards;i++){
    const dist = document.getElementById(`card${i}`).getBoundingClientRect();
    insertion_artefact.distances[`card${i}`]=dist.left;
  }
  console.log(insertion_artefact.distances);
  
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
      document.getElementById("ins").innerHTML = "<p>" +  "Since " +document.getElementById( insertion_artefact.card[insertion_artefact.iterator1]).innerHTML+   " is greater than  "  + document.getElementById(insertion_artefact.card[insertion_artefact.iterator1-1]).innerHTML + "</p>" + "No Action is taken" + "</p>" +  "No of Comparisons : " + insertion_artefact.comparisons + "</p>" + "No of insertions : " + insertion_artefact.insertions;
      }
      insertion_sort();
    }
  }
  else
  {
    
    insertion_artefact.action = 1;
    //console.log(insertion_artefact.iterator1,insertion_artefact.index);
    insertion(insertion_artefact.iterator1,insertion_artefact.index);
    insertion_artefact.finished = false;
    insertion_sort();
  }
}

function resetcolor(){
 
  for(var n = 0; n < insertion_artefact.numOfCards; n++){
    document.getElementById(insertion_artefact.card[n]).style.backgroundColor =  "#288ec8";
  }
}





//finds the right index to insert the element 
function insertionIndex(i){
  if(i===0){
    return 0;
  }
  for(let j = i-1;j>=0;j--){
   
    //console.log(insertion_artefact.card[j].innerHTML);
    document.getElementById("ins").innerHTML = "<p>" +  "Comparing " + document.getElementById(insertion_artefact.card[i]).innerHTML + " with " + document.getElementById(insertion_artefact.card[j]).innerHTML + "</p>" + "No of Comparisons : " + insertion_artefact.comparisons + "</p>" + "No of insertions : " + insertion_artefact.insertions;

    resetcolor();
    insertion_artefact.comparisons++;
   
    document.getElementById(insertion_artefact.card[i]).style.backgroundColor =  "#a4c652";
    document.getElementById(insertion_artefact.card[j]).style.backgroundColor =   "#a4c652";
    if(j===0 && eval(document.getElementById(insertion_artefact.card[i]).innerHTML)<eval(document.getElementById(insertion_artefact.card[j]).innerHTML)){
     
      return 0;

    }
    
    if(eval(document.getElementById(insertion_artefact.card[i]).innerHTML)>=eval(document.getElementById(insertion_artefact.card[j]).innerHTML)){
     
      return j+1;
    }
   
}
  
}

function updatemap(){

}

//inserts the element into the right index 
function insertion(i,j){

  console.log(i,j);
  console.log(insertion_artefact.card[i],insertion_artefact.card[j]);
  resetcolor();
  insertion_artefact.insertions++;
  document.getElementById("ins").innerHTML = "<p>" + "Since " + document.getElementById(insertion_artefact.card[i]).innerHTML + " is lesser than " +  document.getElementById(insertion_artefact.card[j]).innerHTML + "</p>"+ "Inserting " + document.getElementById(insertion_artefact.card[i]).innerHTML +   " before "  + document.getElementById(insertion_artefact.card[j]).innerHTML + "</p>" +  "No of Comparisons : " + insertion_artefact.comparisons + "</p>" + "No of insertions : " + insertion_artefact.insertions;
  document.getElementById(insertion_artefact.card[j]).style.backgroundColor =  "#FFA500";
  const element1 = document.getElementById(insertion_artefact.card[i]);
  const element2 = document.getElementById(insertion_artefact.card[j]);
  const pos1 =  element1.getBoundingClientRect();
  const pos2 =   element2.getBoundingClientRect();
  const distance = pos1.left - pos2.left;
  const dis1 = document.getElementById(insertion_artefact.card[0]).getBoundingClientRect();
  const dis2 =document.getElementById(insertion_artefact.card[1]).getBoundingClientRect();
  const distance2 = dis2.left - dis1.left;
  //console.log(distance);
  //console.log(insertion_artefact.card[i].innerHTML,insertion_artefact.card[j].innerHTML)
  console.log(insertion_artefact.distances);
   anime({
    targets: document.getElementById(insertion_artefact.card[i]),
    translateY: [
      {value : 30 , duration : 1000},
      {value : 0 , duration : 1000,delay:500}
    ],
    translateX: [
      {value: insertion_artefact.distances[insertion_artefact.card[i]] - pos1.left -distance ,duration : 1000 }
    ],
      
   });

  insertion_artefact.distances[insertion_artefact.card[i]] -= distance;
  for(var n = i-1;n>=j;n--){
    const posn =  document.getElementById(insertion_artefact.card[n]).getBoundingClientRect();
    console.log(document.getElementById(insertion_artefact.card[n]),distance2);
    anime({
      targets:  document.getElementById(insertion_artefact.card[n]),
      translateX : [
        {value : insertion_artefact.distances[insertion_artefact.card[n]] - posn.left +distance2 ,duration : 1000}
      ]
  });
  insertion_artefact.distances[insertion_artefact.card[n]] += distance2;
}




let temp = insertion_artefact.card[i];
  
  for(var n = i-1;n>=j;n--){
    insertion_artefact.card[n+1] = insertion_artefact.card[n];
  }
  insertion_artefact.card[j] = temp;

  console.log(insertion_artefact.card);

  
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
  }
  
  else
  { 
      if(document.getElementById("interval").value != 100)
      {
        clearInterval(insertion_artefact.interval);
        insertion_artefact.interval = 0;
      }
      document.getElementById("ins").innerHTML = "<h3>The sort is complete - there were " + insertion_artefact.comparisons + " comparisons and  " + insertion_artefact.insertions + " insertions "

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








