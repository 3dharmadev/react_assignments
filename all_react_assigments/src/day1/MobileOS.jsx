import './StaticCard.css'; // Importing CSS file for styling

export const MobileOS = (props) => {
  return (
    <div className="card">
      <h2>Mobile Operating Systems</h2>
      <ul>
        {props.operatingSystems.map((os,index)=>(
            <li key={index}>{os}</li>
        ))}
      </ul>
    </div>
  );
};
