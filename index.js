const Canvas = document.querySelector('#Canvas');
const ctx = Canvas.getcontext('2d');
const score = document.querySelector('.score')

Canvas.Width = Canvas.offsetwidth;
Canvas.Height = Canvas.offsetHeight;

function getRandomInt(min,max){
    min = math.ceil(min);
    max = math.floor(max);
    return Math.floor(math.random() *(max - min) +min);

}
const birdImg = new Image();
birdImg.src = 'Images/bird.png';

let bird = {
    x: 50,
    y: 150,
    w: 50,
    h: 35,
    dy: 2,
}

document.addEventListener("keydown", (e) => {
    if(e.keyCode === 32) {
        birdMove();
    }
})

function birdMove(){
    bird.y -= 50;
}

function birdgravity (){
    bird.x += bird.y;
}




function renderBird() {
    ctx.drawimage(birdImg, Bird.x, Bird.y, Bird.h, Bird.w);

}
const pipe1Img = new Image();
pipeImg.src = 'Images/pipe1.png';

const pipe2Img = new Image();
pipeImg.src = 'Images/pipe2.png';

let pipesArr =[];
let timer =0;

function renderpipes() {
    timer++;
    if(timer % 100 === 0){
        x: 650,
        y; getRandomInt(150,300),
        w; 60,
        h; 200,
    }    
    
}

for(let i in pipesArr) {
    ctx.drawimage(pipe1Img, pipesArr[i].x, pipesArr[i].y,pipesArr[i].w,pipesArr[i].h);
    ctx.drawimage(pipe1Img, pipesArr[i].x, pipesArr[i].y - 350,pipesArr[i].w,pipesArr[i].h); 


}

updatePipes();
deletepipes();
birdcollision();


function updatePipes() {
    for(let i in pipesArr) {
        pipesArr[i].x -= 5;

    }
}

function deletepipes() {
   for(let i in pipesArr){
    if(pipesArr[i].x <= -50){
        pipesArr.splice(i, 1);
        
    }
   }
}

function birdcollision () {
    for(let i in pipesArr) {
        if(pipesArr[i].x <= bird.x + bird.w
            && pipesArr[i].y <= bird.y + bird.h) {
                location.reload();

            }
    }

}

let score =0;

function updatescore() {
    score.innerHTML = scorevalue;
    for(let i in pipesArr) {
        if(pipesArr[i].x ==0) {
            scorevalue++;
        }
    }
}
function game() {
update();
render();
requestAnimationFrame(game);
}
requestAnimationFrame(game);

function update() {
 birdgravity();
 update();
}

function render() {
ctx.clearreact(0, 0, Canvas.Width, Canvas.Height);
ctx.beginpath();
renderBird();
renderpipes();
ctx.closePath();
}