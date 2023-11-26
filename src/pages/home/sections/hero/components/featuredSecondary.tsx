import { Link } from 'react-router-dom';

interface FeaturedSecondaryProps {
  imageUrl: string;
  title: JSX.Element;
  subTitle: string;
  link?: string;
}

// JIRA Testing

const FeaturedSecondary: React.FC<FeaturedSecondaryProps> = ({ imageUrl, title, subTitle, link }) => (
  <div className="relative group overflow-hidden bg-no-repeat h-full w-full flex flex-col justify-stretch">
    <div className="text-white z-10 flex flex-col justify-between h-full p-8">
      <div>
        <h2 className="text-3xl font-medium">{title}</h2>
        <p className="mt-2 text-sm font-medium">{subTitle}</p>
      </div>
      <Link to={link || ''}>
        <button className="font-medium mt-2">Shop Now</button>
      </Link>
    </div>

    <div className="absolute h-full w-full">
      <img
        className="object-cover h-full w-full duration-500 ease-out group-hover:scale-105"
        src={imageUrl}
        alt="Featured Item"
      />
    </div>
  </div>
);
export default FeaturedSecondary;
