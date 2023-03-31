const form = document.querySelector('form');
const resultsDiv = document.getElementById('emissions-results');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting

  // Get user inputs
  const vehicleType = document.getElementById('vehicle-type').value;
  const vehicleMake = document.getElementById('vehicle-make').value;
  const vehicleModel = document.getElementById('vehicle-model').value;
  const vehicleYear = document.getElementById('vehicle-year').value;
  const vehicleFuelType = document.getElementById('vehicle-fuel-type').value;
  const vehicleMileage = document.getElementById('vehicle-mileage').value;

  // Calculate emissions
  let emissions = 0;
  if (vehicleFuelType === 'gasoline') {
    if (vehicleType === 'car') {
      emissions = vehicleMileage * 0.000283;
    } else if (vehicleType === 'motorbike') {
      emissions = vehicleMileage * 0.000210;
    }
  } else if (vehicleFuelType === 'diesel') {
    if (vehicleType === 'car') {
      emissions = vehicleMileage * 0.000264;
    } else if (vehicleType === 'motorbike') {
      emissions = vehicleMileage * 0.000194;
    }
  } else if (vehicleFuelType === 'electric') {
    if (vehicleType === 'car') {
      emissions = vehicleMileage * 0.000026;
    } else if (vehicleType === 'motorbike') {
      emissions = vehicleMileage * 0.000020;
    }
  }

  // Display results
  resultsDiv.innerHTML = `
    <h2>Results</h2>
    <p>Vehicle Type: ${vehicleType}</p>
    <p>Vehicle Make: ${vehicleMake}</p>
    <p>Vehicle Model: ${vehicleModel}</p>
    <p>Vehicle Year: ${vehicleYear}</p>
    <p>Vehicle Fuel Type: ${vehicleFuelType}</p>
    <p>Vehicle Mileage: ${vehicleMileage} km</p>
    <p>Carbon Emissions: ${emissions.toFixed(2)} kg CO2</p>
  `;

  resultsDiv.style.display = 'block';
});
