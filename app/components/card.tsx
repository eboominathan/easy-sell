interface CardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  description,
  price,
  imageUrl,
}) => {
  return (
    <div
      className="max-w-lg bg-gray-953 
    rounded-sm overflow-hidden h-full flex flex-col 
    justify-between"
    >
      <div className="relative h-96 w-[500px bg-center">
         <img src={imageUrl} alt={name} width={300} height={300} />
      </div>
      <div className="px-6 py-4">
        <div className="text-2xl mb-2 uppercase line-clamp-2 ">
            {name} </div>
            <p className="text-gray-700 text-base truncate uppercase">
                {description}
            </p>
          <div className="px-6 py-2">
         
           </div>
        </div>
      </div>
 
  );
};

export default Card;
