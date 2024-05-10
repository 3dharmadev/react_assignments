import './StaticCard.css'; // Importing CSS file for styling

export const MobileManufacturers = ({manufacturers}) =>{

      return(
        <div className="card">
            <h2>Mobile Manufacturers </h2>
            <ul>
                {manufacturers.map((manufacturer,index)=>(
                    <li key={index}>{manufacturer}</li>
                ))}
            </ul>
        </div>
      );

}