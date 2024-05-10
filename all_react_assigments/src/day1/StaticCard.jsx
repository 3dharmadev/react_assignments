import { MobileManufacturers } from "./MobileManufacturers";
import { MobileOS } from "./MobileOS";
import './StaticCard.css'; // Importing CSS file for styling

export const StaticCard = () => {
  const operatingSystems = ["Android", "BlackBerry", "iPhone", "Windows Phone"];
  const manufacturers = ["Samsung", "HTC", "Micromax", "Apple"];
   
  return(
    <div  className="container">
        <MobileOS operatingSystems={operatingSystems}/>
        <MobileManufacturers manufacturers={manufacturers}/>
    </div>
  );

};


