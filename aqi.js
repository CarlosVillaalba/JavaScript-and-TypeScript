const aqi = 21;

if (aqi >= 0 && aqi <= 50) {
  console.log('The air quality is good');
} else if (aqi > 50 && aqi <= 100) {
  console.log('Moderate');
} else if (aqi > 100 && aqi <= 150) {
  console.log('Unhealthy (sensitive groups)');
} else if (aqi > 150 && aqi <= 200) {
  console.log('Unhealthy');
} else if (aqi > 200 && aqi <= 300) {
  console.log('Very unhealthy');
} else {
  console.log('Hazardous');
}