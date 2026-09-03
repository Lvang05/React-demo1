import { FaStar, FaRegStar } from 'react-icons/fa'

const StarRating = ({ rating, color }) => {
    return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => 
      star <= rating
      ? <FaStar key={star} color="{color || 'black'}" />
      : <FaRegStar key={star} color="{color || 'black'}" />
      )}
      
    </div>
    )
}

export default StarRating