//원본 이미지 배열
const originImage = ['image/0.png', 'image/1.png', 'image/2.png', 'image/3.png',
    'image/4.png', 'image/5.png', 'image/6.png', 'image/7.png',
    'image/8.png', 'image/9.png', 'image/10.png', 'image/11.png',
    'image/12.png', 'image/13.png', 'image/14.png', null
];

//이미지 준비============================================================================
function getImage() {
    //원본 복사 배열
    const copyOfOrigin = [...originImage];
    //빈배열
    const mixedImage = [];
    const $picture = document.querySelector('.midLevelGame');
    //mixImage에 순차적으로 이미지 넣기
    for (let i = 0; i < copyOfOrigin.length; i++) {
        mixedImage.push(copyOfOrigin[i]);
    }

    let orderedIndex = 0;
    while (true) {
        const $setImage = document.createElement('div');
        $setImage.classList.add('mixedImage');
        $setImage.id = `index${orderedIndex}`;
        if (orderedIndex === mixedImage.length - 1) {
            $setImage.id = `blank`;
            $picture.appendChild($setImage);
            break;
        }
        $setImage.style.background = `url(${mixedImage[orderedIndex]})`;
        $setImage.style.backgroundSize = 'cover';
        $picture.appendChild($setImage);
        orderedIndex++;
    }

    //blank가 돌아다니면서 그림 섞기 
    const UP = 0;
    const LEFT = 1;
    const RIGHT = 2;
    const DOWN = 3;
    let shuffleCount = 0;

    const $puzzle = document.querySelector('.midLevelGame').children;
    const arrayOfPics = [...$puzzle];
    let temp;
    while (true) {
        const $blank = document.querySelector('#blank');
        let movePoint = arrayOfPics.indexOf($blank);
        let direction = Math.floor(Math.random() * 4);
        if(shuffleCount > 999 && movePoint === arrayOfPics.length - 1){
            break;
        }
        switch (direction) {
            case UP:
                if (Math.floor(movePoint / 4) === 0) {
                    break;
                }
                const targetUp = arrayOfPics[movePoint - 3];
                $blank.style.background = targetUp.style.background;
                targetUp.style.background = null;
                temp = targetUp.id;
                targetUp.id = $blank.id;
                $blank.id = temp;
                break;

            case LEFT:
                if (movePoint % 4 === 0) {
                    break;
                }
                const targetLeft = arrayOfPics[movePoint - 1];
                $blank.style.background = targetLeft.style.background;
                targetLeft.style.background = null;

                temp = targetLeft.id;
                targetLeft.id = $blank.id;
                $blank.id = temp;
                break;

            case RIGHT:
                if (movePoint % 4 === 3) {
                    break;
                }
                const targetRight = arrayOfPics[movePoint + 1];
                $blank.style.background = targetRight.style.background;
                targetRight.style.background = null;

                temp = targetRight.id;
                targetRight.id = $blank.id;
                $blank.id = temp;
                break;

            case DOWN:
                if (Math.floor(movePoint / 4) === 3) {
                    break;
                }
                const targetDown = arrayOfPics[movePoint + 3];
                $blank.style.background = targetDown.style.background;
                targetDown.style.background = null;

                temp = targetDown.id;
                targetDown.id = $blank.id;
                $blank.id = temp;
                break;

        }
        shuffleCount++;
    }

}

//클릭가능 버튼 지정하기==========================================================
function setMovePoint() {
    const $puzzle = document.querySelector('.midLevelGame').children;
    const arrayOfPics = [...$puzzle];
    const $blank = document.querySelector('#blank');
    //blank 인덱스 찾기
    let movePoint = arrayOfPics.indexOf($blank);
    //4칸, 1칸거리 그림들에게 movable 클래스 주기
    //blank가 가장자리에 있을때 예외사항 두기
    for (let i = 0; i < arrayOfPics.length; i++) {
        if ((i - movePoint) === -1 &&
            (i + 1) % 4 == 0) {
            continue;
        }
        if ((i - movePoint) === 1 &&
            i % 4 === 0) {
            continue;
        }
        if (Math.abs(i - movePoint) === 4 ||
            Math.abs(i - movePoint) === 1) {

            $puzzle[i].classList.add('movable');

        }
    }

}


function endOfGame() {
    const $puzzle = document.querySelector('.midLevelGame').children;
    const arrayOfPics = [...$puzzle];
    for (let i = 0; i < arrayOfPics.length - 1; i++) {
        if (arrayOfPics[i].style.background === `url("${originImage[i]}") 0% 0% / cover`) {
            arrayOfPics[i].style.opacity = 1;
        } else {
            return;
        }
    }
    
    const $ending = document.querySelector('.ending');
    $ending.style.display = 'flex';
    return;
}

//movable 움직이기=========================================================================
function movePuzzle(e) {
    const $picture = document.querySelector('.midLevelGame');
    const $blank = document.querySelector('#blank');
    setMovePoint();
    if (e.target.matches('.puzzle .movable')) {
        $blank.style.background = e.target.style.background;
        e.target.style.background = null;

        let temp = e.target.id;
        e.target.id = $blank.id;
        $blank.id = temp;
    }
    const $puzzle = [...$picture.children];
    for (let i = 0; i < $puzzle.length; i++) {
        if ($puzzle[i].classList.contains('movable')) {
            $puzzle[i].classList.remove('movable');
        }
    }
    endOfGame();
    return;
}


function playPuzzleGame() {
    getImage();
    const $picture = document.querySelector('.midLevelGame');
    $picture.addEventListener('click', movePuzzle);
}

playPuzzleGame();