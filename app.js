//play music 
let playSound = () => new Audio('audio/elo.mp3').play();

//create variable to store body in
let body = document.querySelector('body');
// let face = ''
// face.height = '500px';
// face.width = '500px';

// let changeBackground = () => document.body.style.backgroundImage= "url('images/lilguy.jpg')";

function changeBackground(){
    const newBody = document.body.style.backgroundImage= "url('images/lilguy.jpg')";
    const newFace = document.getElementById('me').src='images/oldman.jpg';
    document.getElementById('me').style.maxHeight = '900px';
    document.getElementById('me').style.maxWidth = '900px';
    document.getElementById('me').style.marginBottom = '-350px';
    // document.getElementById('me').style.marginBottom = ' /50px';


    // return myMove();


}

//animate background function 
// function myMove() {
//     let id = null;
//     const elem = body; 
//     console.log(elem)
//     let pos = 0;
//     clearInterval(id);
//     id = setInterval(frame, 5);
//     function frame() {
//       if (pos == 350) {
//         clearInterval(id);
//       } else {
//         pos++;
//         elem.style.top = pos + 'px';
//         elem.style.left = pos + 'px';
//       }
//     }
//     return frame;
//   }
