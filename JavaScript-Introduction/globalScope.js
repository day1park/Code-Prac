const satellite = 'The Moon'
const galaxy = 'The Milky Way'

let stars = 'North Star'

const myNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());





// block scope

const visibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    console.log(lightWaves);
  };
  
  visibleLightWaves();
  console.log(lightWaves); // <--- will be area because of scope

  // block scope II

  const visibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    if (region === 'The Arctic') {
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);
    }
    console.log(lightWaves);
  };
  
  visibleLightWaves();

  
  // out put will be 'northernlights' then 'moonlight'




  //more block scope with loop

  const starCount = () => {
    let i = 5;
    console.log(i);
    for (i=0; i < 12; i++) {
      console.log(i);
    }
  };
  
  starCount();
  console.log(i); // will not read, ERROR