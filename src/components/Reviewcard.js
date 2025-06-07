import { FaStar } from 'react-icons/fa';

function Reviewcard ({ name, position, testimonial, rating, isActive }) {
    return (
    <div className={`bg-gray-900 rounded-2xl p-8 border border-gray-600 transition-all duration-300 h-full flex flex-col justify-between ${
      isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
    }`}>
      <div className="flex-grow">
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          {testimonial}
        </p>
        <div className="border-t border-gray-700 mb-6"></div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-white font-medium text-lg">{name}</h4>
          <p className="text-gray-400 text-sm">{position}</p>
        </div>
        {rating && (
          <div className="flex flex-col items-end">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar 
                  key={i} 
                  className={`${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'} text-sm`} 
                />
              ))}
              <span className="text-yellow-400 ml-1 text-sm">{rating.toFixed(1)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
    );
}

export default Reviewcard;
