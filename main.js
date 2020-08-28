const resetBtn = document.querySelector('.reset-btn');
const decreaseBtn = document.querySelector('.decrease-btn');
const increaseBtn = document.querySelector('.increase-btn');

resetBtn.addEventListener('click', function (){
    let countNum = getNum();
    countNum = 0;
    displayNum(countNum);
});
decreaseBtn.addEventListener('click', function (){
    let countNum = getNum();
    countNum = countNum - 1;
    displayNum(countNum);
});
increaseBtn.addEventListener('click', function (){
    let countNum = getNum();
    countNum = countNum + 1;
    displayNum(countNum);
});

function getNum(count) {
    count = document.querySelector('.display-count');
    let countNum = parseInt(count.innerText);
    return countNum;
}

function displayNum(countNum) {
    if(countNum > 0){
        document.querySelector('.display-count').style.color = "green";
    }else if (countNum < 0){
        document.querySelector('.display-count').style.color = "red";
    }else {
        document.querySelector('.display-count').style.color = "black";
    }
    document.querySelector('.display-count').innerText = countNum;    
}



