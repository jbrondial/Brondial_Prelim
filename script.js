document.getElementById('playButton').addEventListener('click', playGame);

let score1 = 0;
let score2 = 0;
let gameEnded = false;

function playGame() {
    if (gameEnded) {
        resetGame();
        return;
    }

    const choices = ['Rock', 'Paper', 'Scissors'];
    const images = {
        'Rock': 'images/rock.jpg',
        'Paper': 'images/paper.jpg',
        'Scissors': 'images/scissors.jpg'
    };
    
    const player1Choice = choices[Math.floor(Math.random() * 3)];
    const player2Choice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('player1').src = images[player1Choice];
    document.getElementById('player2').src = images[player2Choice];

    let winner = '';
    let drawMessage = '';

    if (player1Choice === player2Choice) {
        drawMessage = 'Draw';
    } else {
        let player1Wins = false;
    
        if (player1Choice === 'Rock' && player2Choice === 'Scissors') {
            player1Wins = true;
        } else if (player1Choice === 'Paper' && player2Choice === 'Rock') {
            player1Wins = true;
        } else if (player1Choice === 'Scissors' && player2Choice === 'Paper') {
            player1Wins = true;
        }
    
        if (player1Wins) {
            score1 += 1;
        } else {
            score2 += 1;
        }
    }

    document.getElementById('score1').innerText = score1;
    document.getElementById('score2').innerText = score2;

    if (score1 === 3 || score2 === 3) {
        if (score1 === 3) {
            winner = 'Player 1 wins the game!';
        } else {
            winner = 'Player 2 wins the game!';
        }
        document.getElementById('winner').innerText = winner;
        gameEnded = true;
    } else {
        document.getElementById('winner').innerText = drawMessage;
    }
}

function resetGame() {
    const placeholderImage = 'images/placeholder.png';
    score1 = 0;
    score2 = 0;
    gameEnded = false;
    document.getElementById('score1').innerText = score1;
    document.getElementById('score2').innerText = score2;
    document.getElementById('winner').innerText = '';
    document.getElementById('player1').src = placeholderImage;
    document.getElementById('player2').src = placeholderImage;
}