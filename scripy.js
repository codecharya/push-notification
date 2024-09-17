let notificationCount = 1;

// Elements
const notificationBubble = document.getElementById('notificationBubble');
const pushButton = document.getElementById('pushButton');
const seenButton = document.getElementById('seenButton');

// Initialize with the first notification
updateNotificationCount();

// Push Notification Button Logic
pushButton.addEventListener('click', () => {
  notificationCount += 1;
  updateNotificationCount();
  animateNotification();
});

// Seen Button Logic
seenButton.addEventListener('click', () => {
  notificationCount = 0;
  updateNotificationCount();
});

// Update Notification Count and Display
function updateNotificationCount() {
  if (notificationCount === 0) {
    notificationBubble.classList.remove('show');
  } else {
    notificationBubble.textContent = notificationCount;
    notificationBubble.classList.add('show');
    animateNumberChange();
  }
}

// Simple animation for notification count change
function animateNotification() {
  notificationBubble.classList.remove('show');
  setTimeout(() => {
    notificationBubble.classList.add('show');
  }, 50);
}

// Animation for number change (bounce)
function animateNumberChange() {
  notificationBubble.classList.add('bounce');
  setTimeout(() => {
    notificationBubble.classList.remove('bounce');
  }, 300);
}