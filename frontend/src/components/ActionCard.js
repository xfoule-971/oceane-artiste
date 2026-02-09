import { Link } from "react-router-dom";

const ActionCard = ({image, info, title, line1, line2, line3}) => {
    return (
        <div className="card card-survol shadow-lg border-5" style={{ width: '26rem' }}>
            {image && <img src={image} className="card-img-top" alt={info} />}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                    <ul className="card-text flex-grow-1" style={{ wordWrap: 'break-word' }}>
                        <li>{line1}</li>
                        <li>{line2}</li>
                        <li>{line3}</li>
                    </ul>
            </div>
            <Link to="/contact">
                <button type="button" className="btn btn-primary w-100">En savoir plus</button>
            </Link>
        </div>
    );
};
export default ActionCard;