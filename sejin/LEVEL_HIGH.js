
const originImage = ['image/h0.png', 'image/h1.png', 'image/h2.png', 'image/h3.png',
    'image/h4.png', 'image/h5.png', 'image/h6.png', 'image/h7.png',
    'image/h8.png', 'image/h9.png', 'image/h10.png', 'image/h11.png',
    'image/h12.png', 'image/h13.png', 'image/h14.png', 'image/h15.png', 'image/h16.png', 'image/h17.png', 'image/h18.png',
    'image/h19.png', 'image/h20.png', 'image/h21.png', 'image/h22.png',
    'image/h23.png', null
];

function getImage() {
    const copyOfOrigin = [...originImage];
    const mixedImage = [];
    const $picture = document.querySelector('.highLevelGame');

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

    const UP = 0;
    const LEFT = 1;
    const RIGHT = 2;
    const DOWN = 3;
    let shuffleCount = 0;

    const $puzzle = document.querySelector('.highLevelGame').children;
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
                if (Math.floor(movePoint / 5) === 0) {
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
                if (movePoint % 5 === 0) {
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
                if (movePoint % 5 === 4) {
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
                if (Math.floor(movePoint / 5) === 4) {
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

function setMovePoint() {
    const $puzzle = document.querySelector('.highLevelGame').children;
    const arrayOfPics = [...$puzzle];
    const $blank = document.querySelector('#blank');
    let movePoint = arrayOfPics.indexOf($blank);

    for (let i = 0; i < arrayOfPics.length; i++) {
        if ((i - movePoint) === -1 &&
            (i + 1) % 5 == 0) {
            continue;
        }
        if ((i - movePoint) === 1 &&
            i % 5 === 0) {
            continue;
        }
        if (Math.abs(i - movePoint) === 5 ||
            Math.abs(i - movePoint) === 1) {

            $puzzle[i].classList.add('movable');

        }
    }

}


function endOfGame() {
    const $puzzle = document.querySelector('.highLevelGame').children;
    const arrayOfPics = [...$puzzle];
    for (let i = 0; i < arrayOfPics.length - 1; i++) {
        if (arrayOfPics[i].style.background === `url("${originImage[i]}") 0% 0% / cover`) {
            arrayOfPics[i].style.opacity = 1;
        } else {
            return;
        }
    }
    
    const $ending = document.querySelector('.ending');
    $ending.style.display = 'block';
    return;
}


function movePuzzle(e) {
    const $picture = document.querySelector('.highLevelGame');
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
    const $picture = document.querySelector('.highLevelGame');
    $picture.addEventListener('click', movePuzzle);
}

playPuzzleGame();