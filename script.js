var btn = document.querySelector('#btn');
btn.addEventListener("click", function(){
    let movesX = [];
    let movesY = [];
    const startPosition = document.querySelector("#startPosition").value.toLowerCase();
    let startX;
    switch(startPosition[0]) {
        case 'a':
           startX=1;
           break;
        case 'b':
            startX=1; startX=2;
            break;
        case 'c':
            startX=3;
            break;
        case 'd':
            startX=4;
            break;
        case 'e':
            startX=5;
            break;
        case 'f':
            startX=6;
            break;
        case 'g':
            startX=7;
            break;
        case 'h':
            startX=8;
            break;
    }
    const startY = parseInt(startPosition[1]);
    movesX.push(startX+1);
    movesY.push(startY+2);
    movesX.push(startX-1);
    movesY.push(startY+2);
    movesX.push(startX+2);
    movesY.push( startY+1);
    movesX.push(startX+2);
    movesY.push(startY-1);
    movesX.push(startX+1);
    movesY.push(startY-2);
    movesX.push(startX-1);
    movesY.push(startY-2);
    movesX.push(startX-2);
    movesY.push(startY+1);
    movesX.push(startX-2);
    movesY.push(startY-1);

    const letters = ['A','B','C','D','E','F','G','H'];

    let result="";

    for (var i=0;i<8; i++){
        if ((movesX[i]>0 && movesX[i]<8)&&(movesY[i]>0 && movesY[i]<8)) {
            result += letters[movesX[i]-1] + movesY[i]+" ";

        }
    }
    window.alert(result);

});

