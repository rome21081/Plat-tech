// Function to update the status of the request when Accept/Decline is clicked
function updateStatus(button, status) {
    // Find the parent request item
    const requestItem = button.closest('.request-item');
    
    // Get the status span element inside the request item
    const statusSpan = requestItem.querySelector('.status');
    
    // Update the status text based on the action (Accepted/Declined)
    statusSpan.textContent = `Status: ${status}`;
    
    // Disable buttons after action to prevent re-clicking
    const acceptButton = requestItem.querySelector('.accept-btn');
    const declineButton = requestItem.querySelector('.decline-btn');
    acceptButton.disabled = true;
    declineButton.disabled = true;
    
    // Optionally, style the buttons to indicate they've been clicked
    if (status === 'Accepted') {
        acceptButton.style.backgroundColor = '#218838'; // Confirmed green color
        declineButton.style.backgroundColor = '#c82333'; // Rejected red color
    } else {
        acceptButton.style.backgroundColor = '#28a745'; // Revert green button to default
        declineButton.style.backgroundColor = '#dc3545'; // Revert red button to default
    }

    // Notify the user that the status has been updated
    alert(`The request has been ${status.toLowerCase()}.`);
}
