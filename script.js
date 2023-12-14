fetch('data.json')
      .then(response => response.json())
      .then(data => {
        // Update HTML with JSON data
        document.getElementById('name').textContent = data.category;
        document.getElementById('age').textContent = data.score;
        document.getElementById('city').textContent = data.icon;
      })
      .catch(error => console.error('Error fetching JSON:', error));