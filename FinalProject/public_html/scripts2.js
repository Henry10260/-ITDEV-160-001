var canvas = document.getElementById("myCanvas");//setting up the game board

var gme = canvas.getContext("2d");//setting up the ball stats
var ballRadius = 10;
var ballX = canvas.width/2;
var bally = canvas.height-30;
var dx = 2;
var dy = -2;

var blockRowCount = 3;//determining the clock stats
var blockColumnCount = 4;
var blockWidth = 15;
var blockHeight = 90;
var blockPadding = 10;
var blockOffsetTop = 30;
var blockOffsetLeft = 600;

var downPressed = false;//key pressed?
var upPressed = false;

var score = 0;//setting up the game varaibles
var oldscore = 0;
var lives = 3;

var paddleHeight = 75;//setting up the paddle varaiables
var paddleWidth = 10;
var paddleX = (canvas.width-paddleWidth)/2;
var paddleY = (canvas.width-paddleHeight)/2;

var blocks = [];
for(var c=0; c<blockColumnCount; c++) //setting all the blocks to visible
{
  blocks[c] = [];
  for(var r=0; r<blockRowCount; r++) 
  {
    blocks[c][r] = { ballX: 0, bally: 0, status: 1 };
  }
}

document.addEventListener("keydown", keyPressed, false);
document.addEventListener("keyup", keyReleased, false);

function keyReleased(e) //Direction no longer Pressed?
{
    if(e.key == "Down" || e.key == "ArrowDown") 
    {
        downPressed = false;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") 
    {
        upPressed = false;
    }
}
function keyPressed(e)//Direction Pressed? 
{
    if(e.key == "Down" || e.key == "ArrowDown") 
    {
        downPressed = true;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") 
    {
        upPressed = true;
    }
}

function collision() //determine if something was hit and the ball should bounce
{
  for(var c=0; c<blockColumnCount; c++) 
  {
    for(var r=0; r<blockRowCount; r++) 
    {
      var b = blocks[c][r];
      if(b.status == 1) 
      {
        if(ballX > b.ballX && ballX < b.ballX+blockWidth && bally > b.bally && bally < b.bally+blockHeight) 
        {
          b.status = 0;
          dy = -dy;
          score++;
          if(score == (blockRowCount*blockColumnCount) + oldscore) 
          {
              oldscore = score;
              for(var c=0; c<4; c++) 
                {
                    for(var r=0; r<3; r++) 
                    {
                        var b = blocks[c][r];
                        b.status =1;
                    }
                }
          }
        }
      }
    }
  }
}

function drawBall() //draw the ball
{
  gme.beginPath();
  gme.arc(ballX, bally, ballRadius, 0, Math.PI*2);
  gme.fillStyle = "#0095DD";
  gme.fill();
  gme.closePath();
}

function drawPaddle() //draw the paddle
{
  gme.beginPath();
  gme.rect(0, paddleY, paddleWidth, paddleHeight);
  gme.fillStyle = "#0095DD";
  gme.fill();
  gme.closePath();
}
function drawblocks() //draw the blocks
{
  for(var c=0; c<blockColumnCount; c++) 
  {
    for(var r=0; r<blockRowCount; r++) 
    {
      if(blocks[c][r].status == 1) 
      {
        var blockX = (r*(blockWidth+blockPadding))+blockOffsetLeft;
        var blockY = (c*(blockHeight+blockPadding))+blockOffsetTop;
        blocks[c][r].ballX = blockX;
        blocks[c][r].bally = blockY;
        gme.beginPath();
        gme.rect(blockX, blockY, blockWidth, blockHeight);
        gme.fillStyle = "#0095DD";
        gme.fill();
        gme.closePath();
      }
    }
  }
}

function draw() //Main function for the game
{
  gme.clearRect(0, 0, canvas.width, canvas.height);
  drawblocks();
  drawBall();
  drawPaddle();
  collision();
  var scoreEl = document.getElementById('score');
  scoreEl.textContent = getscore();
  var livesEl = document.getElementById('lives');
  livesEl.textContent = getlives();
  if(ballX + dx > canvas.width-ballRadius) 
  {
    dx = -dx;
  }
  else if(ballX + dx < ballRadius)
  {
    if(bally > paddleY && bally < paddleY + paddleHeight)
    {
        dx = -dx;
    }
    else
    {
       lives--; 
       if(!lives) 
       {
        alert("You Lost! Try again?");
        document.location.reload();
       }
       else 
       {
          ballX = canvas.width/2;
          bally = canvas.height-30;
          dx = 3;
          dy = -3;
          paddleY = (canvas.height-paddleHeight)/2;
       }
    }
    
  }
  
  
  if(bally + dy > canvas.height-ballRadius || bally + dy < ballRadius) 
  {
    dy = -dy;
  }
  
  
  if(downPressed && paddleX < canvas.width-paddleWidth) {
    paddleY += 7;
  }
  else if(upPressed && paddleX > 0) {
    paddleY -= 7;
  }

  ballX += dx;
  bally += dy;
  requestAnimationFrame(draw);
}
function getscore() //return score to html page
{
  return score;
}
function getlives() //return lives to html page
{
  return lives;
}

draw();//run the javascript
