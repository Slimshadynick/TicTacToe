let cells = document.querySelectorAll(".row>div");

// console.log(cells);

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellclicked);
}

var turn = true;
var clicks = 0;
var mat = new Array(3);
var a = new Array(3);
for (let i = 0; i < 3; i++) {
  mat[i] = new Array(3);
  a[i] = new Array(3);
  for (let j = 0; j < 3; j++) {
    mat[i][j] = false;
    a[i][j] = "N";
  }
}

function cellclicked() {
  // console.log("It worked!");
  // console.log(event.target);
  if (turn) {
    if (event.target.textContent === "") event.target.textContent = "X";
    else {
      alert("Cell already taken!");
      return;
    }
  } else {
    if (event.target.textContent === "") event.target.textContent = "O";
    else {
      alert("Cell already taken!");
      return;
    }
  }
  for (let i = 0; i < cells.length; i++) {
    if (cells[i] === event.target) {
      let row = Math.floor(i / 3);
      let col = i % 3;
      mat[row][col] = true;
      if(turn){
          a[row][col]='X';
      }
      else{
          a[row][col]='O';
      }
      turn = !turn;
      clicks++;
      let c=check(row,col);
      if(c){
          alert(a[row][col]+" Won!");
      }
      else{
          if(clicks==9){
              alert("DRAW!");
          }
      }
      break;
    }
  }
}

function check(row, col) {
    var f=true;
    for(j=0;j<3;j++){
        if(a[row][j]!=a[row][col]){
            f=false;
            break;
        }
    }
    if(f){
        return f;
    }
    f=true;
    for(let i=0;i<3;i++){
        if(a[i][col]!=a[row][col]){
            f=false;
            break;
        }
    }
    if(f){
        return f;
    }
    f=true;
    for(let i=0,j=0;i<3;i++){
        if(a[i][j]!=a[row][col]){
            f=false;
            break;
        }
        j++;
    }
    if(f){
        return f;
    }
    f=true;
    for(let i=2,j=0;i>=0;i--){
        if(a[i][j]!=a[row][col]){
            f=false;
            break;
        }
        j++;
    }
    if(f){
        return f;
    }
    else{
        return false;
    }
}
