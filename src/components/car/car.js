import "./car.css";

function Car(props) {
  const name = props.name;
  const speed = props.speed;

  let speedClass = 'slow';
  if (speed >= 4 && speed <= 6) {
    speedClass = 'medum';  
  } else if (speed > 6) {
    speedClass = 'fast';  
  }

  return (
    <div className="car">
      <h2 className={speedClass}> {name}</h2>
    </div>
  );
}

export default Car;
