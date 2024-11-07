// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
function toggleMode() {
  let currentMode;
  if (document.body.classList.contains('dark')) {
      currentMode = 'dark';
  } else {
      currentMode = 'light';
  }

  let newMode;
  if (currentMode === 'dark') {
      newMode = 'light';
  } else {
      newMode = 'dark';
  }

  document.body.classList.remove(currentMode);
  document.body.classList.add(newMode);

  let circleColor;
  if (newMode === 'dark') {
      circleColor = 'purple';
      // circleColor = getComputedStyle(document.documentElement).getPropertyValue('--circle-color-dark');
  } else {
      circleColor = '#ffb100'
  }
  document.documentElement.style.setProperty('--circle-color', circleColor);

  // Save the new mode to local storage
  localStorage.setItem('mode', newMode);
}

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage(key='blogPosts') {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(newData, key='blogPosts') {
  const existingData = readLocalStorage(key);
  existingData.push(newData);
  localStorage.setItem(key, JSON.stringify(existingData));
}

// Function to apply mode on page load
function applyMode() {
  const mode = localStorage.getItem('mode') || 'light';
  document.body.classList.add(mode);

  // Update --circle-color based on the mode
  let circleColor;
  if (mode === 'dark') {
      circleColor = getComputedStyle(document.documentElement).getPropertyValue('--dark-accent');
  } else {
      circleColor = getComputedStyle(document.documentElement).getPropertyValue('--circle-color');
  }
  document.documentElement.style.setProperty('--circle-color', circleColor);
}

// Add event listener to toggle button
document.getElementById('toggle').addEventListener('change', toggleMode);

// Call this function when the page loads
applyMode();

// ! Use the following function whenever you need to redirect to a different page
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
