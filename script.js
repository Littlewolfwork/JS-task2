var btn = document.querySelector('#btn');
btn.addEventListener("click", function(){
    let movesX = [];
    let movesY = [];

    // TODO: добавить проверку введенного значения
    const startPosition = document.querySelector("#startPosition").value.toLowerCase();
    if (startPosition.length!=2){
        window.alert("Ведено некорректное значение!");
        document.querySelector("#startPosition").style="border:red 2px solid";
        return;
    }


    let startX;
    const startY = parseInt(startPosition[1]);
    // переводим букву клетки в цифровую координату
    switch(startPosition[0]) {
        case 'a':
           startX = 1;
           break;
        case 'b':
            startX = 2;
            break;
        case 'c':
            startX = 3;
            break;
        case 'd':
            startX = 4;
            break;
        case 'e':
            startX = 5;
            break;
        case 'f':
            startX = 6;
            break;
        case 'g':
            startX = 7;
            break;
        case 'h':
            startX = 8;
            break;
        default: startX = 0;
    }

    // Проверка введенного значения
    if ((startX == 0) || (startY <= 0 || startY >= 9)){
        window.alert("Ведено некорректное значение!");
        document.querySelector("#startPosition").style="border:red 2px solid";
        return;
    }
    else{
        document.querySelector("#startPosition").style="";
    }


    // находим возможные ходы
    movesX.push(startX + 1);
    movesY.push(startY + 2);
    movesX.push(startX - 1);
    movesY.push(startY + 2);
    movesX.push(startX + 2);
    movesY.push( startY + 1);
    movesX.push(startX + 2);
    movesY.push(startY - 1);
    movesX.push(startX + 1);
    movesY.push(startY - 2);
    movesX.push(startX - 1);
    movesY.push(startY - 2);
    movesX.push(startX - 2);
    movesY.push(startY + 1);
    movesX.push(startX - 2);
    movesY.push(startY - 1);

    const letters = ['A','B','C','D','E','F','G','H'];

    let result = "";

    // проверим, не выходят ли найденные пары координат клеток за пределы доски и если да, то добавим их к результату
    for (let i = 0;i < 8; i++){
        if ((movesX[i] > 0 && movesX[i] < 8)&&(movesY[i] > 0 && movesY[i] < 8)) {
            result += letters[movesX[i]-1] + movesY[i]+" ";
        }
    }
    window.alert(result);
});

