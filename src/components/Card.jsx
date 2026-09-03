import StarRating from "./StarRating"

const cardStyle = {
    fontFamily: "Sans-serif",
    backgroundColor: "var(--card-bg-color)",
    border: "1px solid var(--card-border-color)",
    boxShadow: "0 2px 2px var(--card-shadow-color)",
    borderRadius: "8px",
    maxWidth: "400px",
    margin: "8px",
    cursor: 'pointer',
}

const headerStyle = {
    textAlign: "center",
    margin: "0",
    padding: "4px",
    borderBottom: "1px solid var(--card-border-color)",
}



const Card = ({ title, children, rating }) => {
    return (
        <div className="card" style={cardStyle}>
            <h3 style={headerStyle}>{title}</h3>
            <div style={{ padding: "4px" }}>
                {children}
                <StarRating rating ={rating || 0} color={"gold"}/>
            </div>
        </div>
        
    )
}

export default Card