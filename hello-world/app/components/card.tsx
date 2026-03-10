type CardProps = {
  image: string;
  title: string;
  description: string;
};

export default function card({ image, title, description }: CardProps) {
  return (
    <div className=" w-80 overflow-hidden">
      <img src={image} alt={title} className="w-full h-60 object-cover" />

      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-neutral-600">{description}</p>
      </div>
    </div>
  );
}

