// Timer countdown logic
let timeLeft = 30; // seconds
const timerElement = document.getElementById('timer');
const bidButton = document.getElementById('place-bid-btn');
const feedback = document.getElementById('bid-feedback');
const historyList = document.getElementById('history-list');
let currentBid = 500; // Starting bid

// Countdown timer function
function updateTimer() {
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        feedback.textContent = "Auction has ended!";
        bidButton.disabled = true;
        bidButton.style.backgroundColor = "#ccc";
        return;
    }

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timeLeft--;
}

// Bid submission logic
bidButton.addEventListener('click', function() {
    const bidAmount = parseInt(document.getElementById('bid-amount').value);

    if (isNaN(bidAmount) || bidAmount <= currentBid) {
        feedback.textContent = "Your bid must be higher than the current bid!";
        feedback.style.color = 'red';
        return;
    }

    currentBid = bidAmount;
    document.getElementById('current-bid').textContent = `$${currentBid}`;
    
    // Add bid to history
    const newBid = document.createElement('li');
    newBid.textContent = `Bid: $${currentBid}`;
    historyList.prepend(newBid);

    feedback.textContent = `Bid of $${currentBid} placed successfully!`;
    feedback.style.color = 'green';
    document.getElementById('bid-amount').value = '';
});

// Start the timer when page loads
let timerInterval = setInterval(updateTimer, 1000);

// Adding animation to the timer
timerElement.addEventListener('animationiteration', function() {
    timerElement.classList.remove('countdown');
    void timerElement.offsetWidth; // trigger reflow to reset the animation
    timerElement.classList.add('countdown');
});
