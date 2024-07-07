let cat = document.querySelector("#cat");
let clickplace = document.querySelector(".click_place");
let cloud = document.querySelector("#cloud")
let cloudM = document.querySelector("#cloudM")
let cloudH = document.querySelector("#cloudH")
let kaktus = document.querySelector("#kaktus")
let kaktusM = document.querySelector("#kaktusM")
let kaktusH = document.querySelector("#kaktusH")
let start = document.querySelector("#start")
let gameOver = document.querySelector("#gameOver");
let isGameOver = false;

clickplace.addEventListener("click", () => {
    if (!isGameOver) {
        cat.style.animation = "none"; 
        void cat.offsetWidth; 
        cat.style.animation = "test 0.8s 1 linear"; 
    }
});

start.addEventListener("click", () => {
    isGameOver = false;
    gameOver.style.display = "none";
    restartAnimations();
    requestAnimationFrame(checkCollision);
});

function isColliding(a, b) {
    let aRect = a.getBoundingClientRect();
    let bRect = b.getBoundingClientRect();

    return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    );
}

function checkCollision() {
    if (isGameOver) return;

    let trees = [kaktus, kaktusM, kaktusH];

    for (let tree of trees) {
        if (isColliding(cat, tree)) {
            gameOver.style.display = "block";
            isGameOver = true;
            stopAnimations();
            return; 
        }
    }
    
    requestAnimationFrame(checkCollision); 
}

function stopAnimations() {
    cloud.style.animation = "none";
    cloudM.style.animation = "none";
    cloudH.style.animation = "none";
    kaktus.style.animation = "none";
    kaktusM.style.animation = "none";
    kaktusH.style.animation = "none";
    cat.style.animation = "none";
}

function restartAnimations() {
    cloud.style.animation = "object 7.5s infinite linear";
    cloudM.style.animation = "object 6s infinite linear";
    cloudH.style.animation = "object 5s infinite linear";
    kaktus.style.animation = "object 4s infinite linear";
    kaktusM.style.animation = "object 6s infinite linear";
    kaktusH.style.animation = "object 7.5s infinite linear";
}