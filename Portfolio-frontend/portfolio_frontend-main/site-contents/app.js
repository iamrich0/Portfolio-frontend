// Visitor Counter Logic
async function updateVisitorCounter() {
  try {
    const response = await fetch('https://59ggdyg1w6.execute-api.eu-west-1.amazonaws.com'); // Replace with your API Gateway Invoke URL
    const data = await response.json();
    document.getElementById('visitorCountDisplay').innerText = data.count;
  } catch (error) {
    console.error('Error updating visitor counter:', error);
  }
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', updateVisitorCounter);
