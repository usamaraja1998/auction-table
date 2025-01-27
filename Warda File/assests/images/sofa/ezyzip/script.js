document.addEventListener('DOMContentLoaded', () => {
    const bidNowBtn = document.getElementById('bidNowBtn');
    const bidAmount = document.getElementById('bidAmount');
    const currentPrice = document.getElementById('currentPrice');
    const bidCount = document.getElementById('bidCount');
    const agreeTerms = document.getElementById('agreeTerms');

    let currentBid = 430100;
    let bids = 96;

    bidNowBtn.addEventListener('click', () => {
        if (!agreeTerms.checked) {
            alert('Please agree to the Terms and Conditions.');
            return;
        }
        const newBid = parseInt(bidAmount.value);
        if (newBid > currentBid) {
            currentBid = newBid;
            bids += 1;
            currentPrice.textContent = `AED ${currentBid}`;
            bidCount.textContent = bids;
            alert('Your bid was successful!');
        } else {
            alert('Bid amount must be higher than the current price.');
        }
    });
});
