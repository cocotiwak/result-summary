fetch('data.json') // Replace 'your-json-file.json' with the correct path to your JSON file
      .then(response => response.json())
      .then(data => {
        // Iterate through each data entry and display it in the corresponding container
        data.forEach((entry, index) => {
          const containerId = `data-container${index + 1}`;
          const container = document.getElementById(containerId);

          if (container) {
            // Create a div element for each data entry
            const divElement = document.createElement('div');
            divElement.className = 'inner';

            divElement.innerHTML = `
                    
                        <p class="item"><img src="${entry.icon}"> ${entry.category}</p><p class="score">${entry.score} <span class="score-max">/ 100</span></p>
                    
            `;

            // Append the div element to the container
            container.appendChild(divElement);
          }
        });
      })
      .catch(error => console.error('Error fetching JSON:', error));