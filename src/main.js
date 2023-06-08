let score = 0;

// 比较函数
let compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "平局！";
    } else if (choice1 === "石头") {
        if (choice2 === "剪刀") {
            score++;
            return "你赢了！";
        } else {
            score--;
            return "你输了！";
        }
    } else if (choice1 === "剪刀") {
        if (choice2 === "布") {
            score++;
            return "你赢了！";
        } else {
            score--;
            return "你输了！";
        }
    } else if (choice1 === "布") {
        if (choice2 === "石头") {
            score++;
            return "你赢了！";
        } else {
            score--;
            return "你输了！";
        }
    } else {
        return "无效的选择，请重新选择！";
    }
};

// 动画效果函数
let animateResult = function(result) {
    let resultElement = document.getElementById("result");
    resultElement.textContent = result;
    resultElement.classList.add("animated");
    setTimeout(function() {
        resultElement.classList.remove("animated");
        resultElement.textContent = "";
    }, 1000);
};

// 更新得分函数
let updateScore = function() {
    let scoreElement = document.getElementById("score");
    scoreElement.textContent = "得分：" + score;
};

// 游戏逻辑函数
let playGame = function(userChoice) {
    let computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "石头";
    } else if (computerChoice <= 0.67) {
        computerChoice = "剪刀";
    } else {
        computerChoice = "布";
    }

    let result = compare(userChoice, computerChoice);
    animateResult(result);
    updateScore();
};
