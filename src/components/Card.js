import { useState } from "react";

const Card = ({ id, name, info, image, price, removeCard }) => {
  const [readmore, setReadMore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}.... `;
  const readmorehandler = () => {
    setReadMore(!readmore);
  }
  return (
    <div className="card">
      <img src={image} className="image" alt="not loaded error"></img>
      <div className="tour-info">
        <div className="tour-details">
          <h1 className="tour-price">₹ {price}</h1>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">{description}
          <span className="read-more" onClick={readmorehandler}>{readmore ? ' show less' : 'read more'}</span>
        </div>
      </div>
      <button type="button" className="btn-white" onClick={() => removeCard(id)}>Not Interested</button>
    </div>
  );

}
export default Card;