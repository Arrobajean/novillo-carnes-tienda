
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  author: string;
  rating: number;
  date: string;
  content: string;
  avatar?: string;
}

export const ReviewCard = ({
  author,
  rating,
  date,
  content,
  avatar,
}: ReviewCardProps) => {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star 
          key={`star-${i}`} 
          className="h-4 w-4 text-novillo-gold fill-novillo-gold" 
        />
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <div key="half-star" className="relative">
          <Star className="h-4 w-4 text-novillo-gold" />
          <div className="absolute top-0 left-0 w-[50%] overflow-hidden">
            <Star className="h-4 w-4 text-novillo-gold fill-novillo-gold" />
          </div>
        </div>
      );
    }

    // Add empty stars to complete 5
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star 
          key={`empty-star-${i}`} 
          className="h-4 w-4 text-novillo-gold" 
        />
      );
    }

    return stars;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        {avatar ? (
          <img 
            src={avatar} 
            alt={`${author} avatar`} 
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="h-12 w-12 rounded-full bg-novillo-light flex items-center justify-center text-novillo-red font-semibold text-xl">
            {author.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800">{author}</h4>
          <div className="flex items-center mt-1 mb-1">
            <div className="flex gap-0.5 mr-2">
              {renderStars()}
            </div>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};
