// Initialize terminal text animation
const terminalText = document.getElementById("terminal-text");
const actionBtn = document.getElementById("action-btn");
const powerToggleBtn = document.getElementById("power-toggle");
const powerIcon = document.getElementById("power-icon");

let isPoweredOn = true; // Keeps track of the terminal's power state
let messageInterval;

const messages = [

  "Initializing system diagnostics...",
  "Synth protocol on SOL...",
  "Establishing neural uplink...",
  "Running subroutine AI_COMMS...",
  "Error: Anomaly detected in grid 4A!",
  "Engage safety protocols...",
  "System stable. Awaiting further commands...",
];

let messageIndex = 0;

// Function to update terminal text every 2 seconds
function displayMessages() {
  if (!isPoweredOn) return; // Do nothing if the terminal is powered off
  if (messageIndex < messages.length) {
    terminalText.textContent = messages[messageIndex];
    messageIndex++;
  } else {
    messageIndex = 0; // Loop back to start
  }
}

// Start cycling messages
messageInterval = setInterval(displayMessages, 2000);

// Function to toggle the terminal's power state
powerToggleBtn.addEventListener("click", () => {
  if (isPoweredOn) {
    // Turn off the terminal
    isPoweredOn = false;
    powerIcon.innerHTML = "<i class='bx bx-power-off'></i>"; // Update icon to indicate power off
    terminalText.textContent = "Shutting down...";
    clearInterval(messageInterval);

    // After 4 seconds, blank the terminal screen
    setTimeout(() => {
      if (!isPoweredOn) terminalText.textContent = "";
    }, 4000);
  } else {
    // Turn on the terminal
    isPoweredOn = true;
    powerIcon.innerHTML = `<i class='bx bx-power-off'></i>`; // Update icon to indicate power on
    terminalText.textContent = "Powering on...";
    setTimeout(() => {
      if (isPoweredOn) {
        terminalText.textContent = messages[messageIndex];
        messageInterval = setInterval(displayMessages, 2000);
      }
    }, 1000);
  }
});

// Button interaction for Activate Protocol
actionBtn.addEventListener("click", () => {
  if (!isPoweredOn) return; // Disable functionality when powered off

  const additionalMessages = [
    "Synth protocol on SOL",
    "Protocol override initiated...",
    "Uploading neural data...",
    "Warning: Memory corruption detected.",
    "Reverting to safe mode.",
    "Upload complete. Standby...",
  ];

  additionalMessages.forEach((message, index) => {
    setTimeout(() => {
      terminalText.textContent = message;
    }, index * 1500); // Delay each new message
  });
});
