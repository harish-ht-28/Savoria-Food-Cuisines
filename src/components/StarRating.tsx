import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: number;
}

const StarRating = ({ rating, size = 16 }: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.3 && rating - fullStars < 0.8;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star
          key={`full-${i}`}
          size={size}
          className="fill-primary text-primary"
        />
      ))}
      {hasHalf && (
        <StarHalf
          size={size}
          className="fill-primary text-primary"
        />
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star
          key={`empty-${i}`}
          size={size}
          className="text-border"
        />
      ))}
      <span className="ml-1.5 text-sm text-muted-foreground font-medium">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default StarRating;
