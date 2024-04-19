let selectedAmount = 0;

function setAmount(amount) {
  selectedAmount += amount;
  console.log("Amount set to: " + amount);
}
function sendMoney() {
  const receiverInfo = document.getElementById("receiver").value;
  if (!receiverInfo) {
    alert("Please enter the receiver's information.");
    return;
  }

  if (selectedAmount === 0) {
    alert("Please select an amount to send.");
    return;
  }
  console.log("Sending " + selectedAmount + " to " + receiverInfo);

  alert(
    `Transaction Successful\n${selectedAmount}_Rs has been sent to ${receiverInfo}`
  );
}
