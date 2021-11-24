'use strict'



function PromptModal(type) {

  let mainbody = document.getElementsByTagName('body')[0];
  let modaldiv = document.createElement('div');
  modaldiv.id = 'modal';
  mainbody.appendChild(modaldiv);



  if (type == 'blocks') {

    //CUP

    let form = `<form method="POST">
 <label for="letter1">First Initial</label><input type="text" id="letter1" name="letter1">
 <label for="letter2">Middle Initial</label><input type="text" id="letter2" name="letter2" placeholder="If none, use 'x'">
 <label for="letter3">Last Initial</label><input type="text" id="letter3" name="letter3">
 <button id='enter'>Submit</button>
 </form>`;
    let formdiv = document.createElement('div');
    formdiv.id = 'formdiv';
    formdiv.innerHTML = form;
    // let x = document.getElementsByTagName('body');
    modaldiv.appendChild(formdiv);



  } else if (type == 'jib') {

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

  } else if (type == 'book') {


      let bookForm = `<div>
  <p>
    ${res}
  </p>
  <form method="POST">
  <label for="answer">Answer: </label><input type="text" id="answer" name="answer">
  <button id='enterBook'>Submit</button>
  </form>
  </div>`;
      let bookformdiv = document.createElement('div');
      bookformdiv.id = 'bookformdiv';
      bookformdiv.innerHTML = bookForm;
      // let x = document.getElementsByTagName('body');
      modaldiv.appendChild(bookformdiv);

      let bookEnter = document.getElementById('enterBook');

      bookEnter.addEventListener('click', function clickBook(event) {
        // alert('You are in bookEnter');
        event.preventDefault();

        if (answer.value == db[randomQuestion].answer) {
          escapekey += answer.value;
          refreshEscapeKey(escapekey);
          bookTest = true;

        } else {
          console.log('false');
        }

        let removeModal = document.getElementById('modal');
        // document.removeChild(removeModal);
        removeModal.remove();

        console.log(escapekey);

        console.log(res);



  });
  }


}

// let helloWorld = new PromptModal('blocks');