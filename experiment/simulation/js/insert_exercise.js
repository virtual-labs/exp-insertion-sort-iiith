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
      this.question = Math.floor(Math.random() * 5 + 1);
      this.targetinsertions = Math.floor(Math.random()*9+1);

    };
  };
let insertion_artefact = new Insertion_sort();

  function main_functions()
{ 
  randomise();
  handlers()
  makeQuestion();
}



document.body.onload = function() {main_functions();}
function handlers(){
    document.getElementById("next").onclick = function() {submit()};
    document.getElementById("reset").onclick = function() {reload();};
    };



function makeQuestion(){
  if(insertion_artefact.targetinsertions===1){
    document.getElementById("question").innerHTML = "<b>Question :</b> Find the " + insertion_artefact.targetinsertions + "st element in the array after " + insertion_artefact.question + " insertions";
  }
  else if(insertion_artefact.targetinsertions===2){
    document.getElementById("question").innerHTML = "<b>Question :</b> Find the " + insertion_artefact.targetinsertions + "nd element in the array after " + insertion_artefact.question + " insertions";
  }
  else if(insertion_artefact.targetinsertions===3){
    document.getElementById("question").innerHTML = "<b>Question :</b> Find the " + insertion_artefact.targetinsertions+ "rd element in the array after " + insertion_artefact.question + " insertions";
  }
  else if(insertion_artefact.targetinsertions===4){
    document.getElementById("question").innerHTML = "<b>Question :</b> Find the " + insertion_artefact.targetinsertions + "rth element in the array after " + insertion_artefact.question + " insertions";
  }else{
    document.getElementById("question").innerHTML = "<b>Question :</b> Find the " + insertion_artefact.targetinsertions+ "th element in the array after " + insertion_artefact.question + " insertions";

  }


  

}


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
  // console.log(insertion_artefact.distances);
  // document.getElementById("next").onclick = function() { start_sort(); };
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
 
  if(document.getElementById("interval").value == 100)
  {
    document.getElementById("next").disabled = false;
  }
  else
  {
    if(insertion_artefact.interval == 0)
      insertion_artefact.interval = setInterval(next_step,2600-document.getElementById("interval").value);
    else
    {
      clearInterval(insertion_artefact.interval);
      insertion_artefact.interval = 0;
    }
  }
};

function insertionSorts(arr) {
  let insertions = 0;
  let swaps =0;
  for (let i = 1; i < arr.length; i++) {
    swaps = 0;
    if(insertions===insertion_artefact.question){
      break;
    }
    
    let currentValue = arr[i]
    let j
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      swaps = 1;
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentValue
    if(swaps ===1){
      insertions ++
    }
    
  }
  return arr
}


function submit(){
  start_sort();
  var text1 = document.getElementById("textbox").value;
  console.log(text1);
  var answer_array = insertionSorts(insertion_artefact.num);
  var answer = answer_array[insertion_artefact.targetinsertions-1];
  console.log(answer_array,answer);
  console.log(parseInt(text1),answer);
  

 if(parseInt(text1) === answer){
  start_sort();
  document.getElementById("ins").innerHTML =  "<b>This answer is correct! </b>"  
 }else{
  
  document.getElementById("ins").innerHTML = "<b>This answer is wrong please try again!</b>"

 }
 }

//performs the next step pf the insertion
function next_step(){
  //console.log(insertion_artefact.action);
  resetcolor();
  if(insertion_artefact.insertions===insertion_artefact.question){
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
      document.getElementById("ins").innerHTML = "<p>" +  "Since " +document.getElementById( insertion_artefact.card[insertion_artefact.iterator1]).innerHTML+   "<b> is greater than or equal to </b>  "  + document.getElementById(insertion_artefact.card[insertion_artefact.iterator1-1]).innerHTML + "</p>" + "No Action is taken" + "</p>" +  "No of Comparisons : " + insertion_artefact.comparisons + "</p>" + "No of insertions : " + insertion_artefact.insertions;
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
  console.log(insertion_artefact.num);
}


function resetcolor(){
 
  for(var n = 0; n < insertion_artefact.numOfCards; n++){
    document.getElementById(insertion_artefact.card[n]).style.backgroundColor =  "#288ec8";
  }
}

function clearCanvas(){
  ctx = document.getElementById("myCanvas").getContext("2d");
  ctx.clearRect(0,0,1200,50);

}


function index_insertion(i){

  if(i===0){
    return 0;
  }
  for(let j = i-1;j>=0;j--){
    if(j===0 && insertion_artefact.num[i]<insertion_artefact.num[j]){
     
      return 0;

    }
    
    if(insertion_artefact.num[i]>=insertion_artefact.num[j]){
     
      return j+1;
    }
   
}
}


//finds the right index to insert the element 

function insertionIndex(i){
  let index = index_insertion(i);
  console.log("index");
  console.log(index_insertion(i));
  clearCanvas();
  
  if(i===0){
    return 0;
  }
  for(let j = i-1;j>=0;j--){
    resetcolor();
    insertion_artefact.comparisons++;
   
    document.getElementById(insertion_artefact.card[i]).style.backgroundColor =  "#a4c652";
    document.getElementById(insertion_artefact.card[j]).style.backgroundColor =   "#a4c652";
    if(j===0 && eval(document.getElementById(insertion_artefact.card[i]).innerHTML)<eval(document.getElementById(insertion_artefact.card[j]).innerHTML)){
      console.log("in here scammm")
      document.getElementById("ins2").innerHTML = ""
      document.getElementById("ins").innerHTML = "<p>" +  "Comparing " + document.getElementById(insertion_artefact.card[i]).innerHTML + " with " + "<b>"+ document.getElementById(insertion_artefact.card[j]).innerHTML + "</b>" + "</p>" + "No of Comparisons : " + insertion_artefact.comparisons + "</p>" + "No of insertions : " + insertion_artefact.insertions;
     
      return 0;

    }
    
    if(eval(document.getElementById(insertion_artefact.card[i]).innerHTML)>=eval(document.getElementById(insertion_artefact.card[j]).innerHTML)){
      if(index === i){
        console.log("in here2");
        document.getElementById("ins2").innerHTML =   "Comparing " + document.getElementById(insertion_artefact.card[i]).innerHTML + " with " + "<b>"+  document.getElementById(insertion_artefact.card[j]).innerHTML + "</b>"; 
      }else{
        console.log("in here 3");
        document.getElementById("ins2").innerHTML = "<p>" + "After comparing " + document.getElementById(insertion_artefact.card[i]).innerHTML + " with " + "<b>" + insertion_artefact.num.slice(index,i).reverse() + "</b>"+ " <font> => </font>"+   "Comparing " + document.getElementById(insertion_artefact.card[i]).innerHTML + " with " +"<b>"+  document.getElementById(insertion_artefact.card[j]).innerHTML + "</b>"; 
      }
      document.getElementById("ins").innerHTML =  "</p>" + "No of Comparisons : " + insertion_artefact.comparisons + "</p>" + "No of insertions : " + insertion_artefact.insertions;
      return j+1;
    }
   
}
  
}

function insertion(i,j){
  clearCanvasCanv();
  sort_insertion(i,j);
  resetcolor();
 
  document.getElementById(insertion_artefact.card[j]).style.backgroundColor =  "#FFA500";
  drawArrow(i,j);
  insertion_artefact.insertions++;
  if(j==0){
    document.getElementById("ins").innerHTML = "<p>" + "Since " + document.getElementById(insertion_artefact.card[i]).innerHTML + " <b> is lesser than </b> " + document.getElementById(insertion_artefact.card[j]).innerHTML + "</p>"+ " Inserting " + document.getElementById(insertion_artefact.card[i]).innerHTML +   " before "  + document.getElementById(insertion_artefact.card[j]).innerHTML + "</p>" +  "No of Comparisons : " + insertion_artefact.comparisons + "</p>" + "No of insertions : " + insertion_artefact.insertions;
  }else{
    document.getElementById("ins").innerHTML = "<p>" + "Since " + document.getElementById(insertion_artefact.card[i]).innerHTML + "  <b> is lesser than  </b>" + document.getElementById(insertion_artefact.card[j]).innerHTML + "</p>"+ " Inserting " + document.getElementById(insertion_artefact.card[i]).innerHTML +   " before "  + document.getElementById(insertion_artefact.card[j]).innerHTML + " and after " + document.getElementById(insertion_artefact.card[j-1]).innerHTML+ "</p>" +  "No of Comparisons : " + insertion_artefact.comparisons + "</p>" + "No of insertions : " + insertion_artefact.insertions;
  }
  document.getElementById(insertion_artefact.card[j]).style.backgroundColor =  "#FFA500";
  let temp = eval(document.getElementById(insertion_artefact.card[i]).innerHTML);
  
  for(var n = i-1;n>=j;n--){
    document.getElementById(insertion_artefact.card[n+1]).innerHTML = eval(document.getElementById(insertion_artefact.card[n]).innerHTML);
  }
  document.getElementById(insertion_artefact.card[j]).innerHTML = temp;
}



function sort_insertion(i,j){
  let temp = insertion_artefact.num[i];
  for(var n = i-1;n>=j;n--){
   insertion_artefact.num[n+1] = insertion_artefact.num[n]
  }
  insertion_artefact.num[j] = temp;
}


   



function drawArrowhead(locx, locy, angle, sizex, sizey) {

  var hx = sizex / 2;
  var hy = sizey / 2;

  ctx.translate((locx ), (locy));
  ctx.rotate(angle);
  ctx.translate(-hx,-hy);

  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(0,1*sizey);    
  ctx.lineTo(1*sizex,1*hy);
  ctx.closePath();
  ctx.fill();

  ctx.translate(hx,hy);
  ctx.rotate(-angle);
  ctx.translate(-locx,-locy);
}       

function findAngle(sx, sy, ex, ey) {
  // make sx and sy at the zero point
  return Math.atan2((ey - sy), (ex - sx));
}

function drawArrow(i,j){
  const element1 = document.getElementById(insertion_artefact.card[i]);
  const element2 = document.getElementById(insertion_artefact.card[j]);
  const pos1 =  element1.getBoundingClientRect();
  const pos2 =   element2.getBoundingClientRect();
  const distance = pos1.x-pos2.x;
  const dis1 = document.getElementById(insertion_artefact.card[0]).getBoundingClientRect();
  const dis2 =document.getElementById(insertion_artefact.card[1]).getBoundingClientRect();
  const distance2 = dis2.x - dis1.x;
  const midx_boxi = pos1.x+30
  const midy_boxi = 0;
  const midx_boxj = pos2.x+30
  const midy_boxj = 10;
  const arrow_curvature = 90;
  const angle = findAngle(0,0,midx_boxj,10)
  const arrowhead_sizex = 15;
  const arrowhead_sizey = 15;
  ctx = document.getElementById("myCanvas").getContext("2d");
  ctx.beginPath();
  ctx.fillStyle = "rgba(55, 217, 56)";
  ctx.moveTo(midx_boxi,midy_boxi);
  ctx.quadraticCurveTo(midx_boxi,arrow_curvature, midx_boxj,midy_boxj);
  ctx.stroke();
  if(distance > (5*distance2)){
  console.log("inside this if condition");
  const angle2 = findAngle(0,0,midx_boxj,10)
  drawArrowhead(midx_boxj+5,midy_boxj,angle2 ,arrowhead_sizex,arrowhead_sizey);
  }else{
    console.log("inside else considtion");
    drawArrowhead(midx_boxj+3,midy_boxj,angle ,arrowhead_sizex,arrowhead_sizey);
  }
}

//inserts the element into the right index 
function insertion(i,j){
  resetcolor();
  document.getElementById("ins").innerHTML = "<p>" + "Since " + document.getElementById(insertion_artefact.card[i]).innerHTML + " is lesser than " +  document.getElementById(insertion_artefact.card[j]).innerHTML + "</p>"+ "Inserting " + document.getElementById(insertion_artefact.card[i]).innerHTML +   " before "  + document.getElementById(insertion_artefact.card[j]).innerHTML + "</p>" +  "No of Comparisons : " + insertion_artefact.comparisons + "</p>" + "No of insertions : " + insertion_artefact.insertions;
  document.getElementById(insertion_artefact.card[j]).style.backgroundColor =  "#FFA500";
  drawArrow(i,j);
  insertion_artefact.insertions++;
  document.getElementById("ins").innerHTML = "<p>" + "Since " + document.getElementById(insertion_artefact.card[i]).innerHTML + " is lesser than " + document.getElementById(insertion_artefact.card[j]).innerHTML + "</p>"+ "Inserting " + document.getElementById(insertion_artefact.card[i]).innerHTML +   " before "  + document.getElementById(insertion_artefact.card[j]).innerHTML + "</p>" +  "No of Comparisons : " + insertion_artefact.comparisons + "</p>" + "No of insertions : " + insertion_artefact.insertions;
  document.getElementById(insertion_artefact.card[j]).style.backgroundColor =  "#FFA500";
  let temp = eval(document.getElementById(insertion_artefact.card[i]).innerHTML);
  
  for(var n = i-1;n>=j;n--){
    document.getElementById(insertion_artefact.card[n+1]).innerHTML = eval(document.getElementById(insertion_artefact.card[n]).innerHTML);
  }
  document.getElementById(insertion_artefact.card[j]).innerHTML = temp;
  

  // console.log(distance);
  // console.log(insertion_artefact.card[i].innerHTML,insertion_artefact.card[j].innerHTML)
  // console.log(insertion_artefact.distances);
  //  anime({
  //   targets: document.getElementById(insertion_artefact.card[i]),
  //   translateY: [
  //     {value : 30 , duration : 500},
  //     {value : 0 , duration : 500,delay:250}
  //   ],
  //   /**translateX: [
  //     {value: -distance ,duration : 500 }
  //   ],**/
      
  //  });

  // //insertion_artefact.distances[insertion_artefact.card[i]] -= distance;
  // for(var n = i-1;n>=j;n--){
  //   const posn =  document.getElementById(insertion_artefact.card[n]).getBoundingClientRect();
  //   console.log(document.getElementById(insertion_artefact.card[n]),distance2);
  //   anime({
  //     targets:  document.getElementById(insertion_artefact.card[n]),
  //     translateX : [
  //       {value : distance2 ,duration : 500}
  //     ]
  // });
  // //insertion_artefact.distances[insertion_artefact.card[n]] += distance2;
}

function insertion_sort()
{
  if(insertion_artefact.finished!==true){
    insertion_artefact.iterator1++;
  }
  
  else
  { 
      clearCanvas();
      if(document.getElementById("interval").value != 100)
      {
        clearInterval(insertion_artefact.interval);
        insertion_artefact.interval = 0;
      }
      document.getElementById("ins").innerHTML = "<h3>The sort is complete - there were " + insertion_artefact.comparisons + " comparisons and  " + insertion_artefact.insertions + " insertions "

      document.getElementById("next").style.backgroundColor = "grey";
      document.getElementById("next").disabled = true;
      //document.getElementById("pause").disabled = true;
      insertion_artefact.iterator1 = 0;
    
    
  }
}

function reload(){
  location.reload(true);
};







