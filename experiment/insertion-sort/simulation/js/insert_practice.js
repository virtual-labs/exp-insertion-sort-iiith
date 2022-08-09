class Insertion_sort{
  constructor(){
    this.iterator1 = 0;
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
    temp.id = `card${i}`;
    temp.innerHTML = insertion_artefact.num[i];
    temp.style.fontStyle = "normal";
    temp.style.color = "white";
    classToFill.appendChild(temp);
    insertion_artefact.positions.push(i);
    console.log(temp.id);
    insertion_artefact.card.push(temp.id);
    

    
    
  }
};
    
function resetcolor(){
 
  for(var n = 0; n < insertion_artefact.numOfCards; n++){
    document.getElementById(insertion_artefact.card[n]).style.backgroundColor =  "#288ec8";
  }
}

function start_sort()
{
  console.log("inside start sort");
  document.getElementById("comment-box-smaller").style.visibility = "visible";
  for(var i = 0 ; i< insertion_artefact.numOfCards;i++){
    const dist = document.getElementById(`card${i}`).getBoundingClientRect();
    insertion_artefact.distances[`card${i}`]=dist.left;
  }
 
  insertion_artefact.action = 1;
  insertion_artefact.finished = false;
  insertion_artefact.comparisons = 0;
  insertion_artefact.fn_name = "insertion_sort"
  insertion_artefact.iterator1 = 1;
  insertion_artefact.operation = "Insert";

  document.getElementById("swap").style.visibility = "visible";
  document.getElementById("next").style.visibility = "visible";

  document.getElementById("swap").onclick = function() { check_swap(); };
  document.getElementById("next").onclick = function() { check_next(); };

  document.getElementById("next").disabled = false;
};



function insertionIndex(i){
  clearCanvas();
 
  if(i===0){
    return 0;
  }
  for(let j = i-1;j>=0;j--){
   
    //console.log(insertion_artefact.card[j].innerHTML);
    //document.getElementById("ins").innerHTML = "<p>" +  "Comparing " + document.getElementById(insertion_artefact.card[i]).innerHTML + " with " + document.getElementById(insertion_artefact.card[j]).innerHTML + "</p>" + "No of Comparisons : " + insertion_artefact.comparisons + "</p>" + "No of insertions : " + insertion_artefact.insertions;

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


function clearCanvas(){
  ctx = document.getElementById("myCanvas").getContext("2d");
  ctx.clearRect(0,0,1200,50);

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
  








  //console.log(distance);
  //console.log(insertion_artefact.card[i].innerHTML,insertion_artefact.card[j].innerHTML)
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
    insertion_sort();
  }else{
    document.getElementById("ins").innerHTML = "Incorrect, Think again!";   
  } 
};


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
      document.getElementById("pause").style.backgroundColor = "grey";
      document.getElementById("pause").disabled = true;
      insertion_artefact.iterator1 = 0;
    
    
  }
}






