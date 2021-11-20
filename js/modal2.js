'use strict'

function PromptModal(type){

 let mainbody = document.getElementsByTagName('body')[0];
 let modaldiv = document.createElement('div');
 modaldiv.id = 'modal';
 mainbody.appendChild(modaldiv);



 if(type == 'blocks'){

 //CUP

 let form = `<form method="POST">
 <label for="letter1">First Initial</label><input type="text" id="letter1" name="letter1">
 <label for="letter2">Middle Initial</label><input type="text" id="letter2" name="letter2" placeholder="If you have no middle initial, use 'x'">
 <label for="letter3">Last Initial</label><input type="text" id="letter3" name="letter3">
 <button id='enter'>Submit</button>
 </form>`;
 let formdiv = document.createElement('div');
 formdiv.id = 'formdiv';
 formdiv.innerHTML = form;
 // let x = document.getElementsByTagName('body');
 modaldiv.appendChild(formdiv);



  let enter = document.getElementById('enter');
  // console.log(enter);
  enter.addEventListener('click', function(e){
   console.log(e);
   e.preventDefault();
   alert('I was pressed');
   var inputValue = document.getElementById('letter1').value
   var inputValue = document.getElementById('letter2').value
   var inputValue = document.getElementById('letter3').value
   // let letter1 = 
  });

 }else if(type == 'jib'){

// Create new Star objects.
let star1 = new Star(starImage1);
let star2 = new Star(starImage2);
let star3 = new Star(starImage3);


 }

}

let helloWorld = new PromptModal('blocks');