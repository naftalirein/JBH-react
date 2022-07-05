import { useEffect } from "react";
import "./car.css";

function Car(props) {
  const name = props.name;
  const speed = props.speed;

  useEffect(() => {
    console.log("Car component is about to be mounted.");
    return () => {
      console.log('ssssssssssss')
    }
  }, [])

  useEffect(() => {
    console.log("Car component is about to be updated");
  })

  useEffect(() => {
    console.log("Car component is about to be updated name");
  }, [props.name])

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
