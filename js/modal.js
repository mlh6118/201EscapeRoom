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



 }else if(type == 'jib'){

// Create new Star objects.

let star1 = document.createElement('img');
star1.id = 'star1';
modaldiv.appendChild(star1);

  let star2 = document.createElement('img');
  star2.id = 'star2';
  modaldiv.appendChild(star2);

  let star3 = document.createElement('img');
  star3.id = 'star3';
  modaldiv.appendChild(star3);

  // console.log(star1);

 }

}

// let helloWorld = new PromptModal('blocks');