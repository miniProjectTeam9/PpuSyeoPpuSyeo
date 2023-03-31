const $screen = document.querySelector(".screen");
const $count = document.querySelector(".count");
const $log = document.querySelector(".log");
const recordArray = [];

let timeout;
let start, end, time;
let flag = true;
let $counter = 0;
const handleScreenClick = (e) => {
    if (flag === false) {
        return;
    }
    if ($screen.style.backgroundColor === "blue") {
        $screen.style.backgroundColor = "red";
        $screen.textContent = "대기";
        timeout = setTimeout(() => {
            $screen.style.backgroundColor = "green";

            $screen.textContent = "클릭!!";
            start = new Date().getTime() / 1000;
        }, Math.floor(Math.random() * 2000) + 2000);
    } else if ($screen.style.backgroundColor === "red") {

        $screen.textContent = `빨라요~!!`;


        clearTimeout(timeout);
        setTimeout(init, 2000);
    } else if ($screen.style.backgroundColor === "green") {
        flag = false;

        end = new Date().getTime() / 1000;
        time = Math.round((end - start) * 10000) / 10000;

        $screen.innerHTML = `${time}초`;
        recordArray.push(time);

        let averageSpeed =
            recordArray.reduce((a, c) => a + c) / recordArray.length;
        $log.textContent = `평균 속도: ${averageSpeed}초`;
        setTimeout(init, 1000);

        $counter++;
        $count.innerHTML = `횟수: ${$counter}`;
    }
};
const init = () => {
    $screen.style.backgroundColor = "blue";
    $screen.addEventListener("click", handleScreenClick);
    $screen.textContent = "시작";
    start = 0;
    end = 0;
    flag = true;
};
init();
