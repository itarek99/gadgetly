import {
  Battery100Icon,
  BoltIcon,
  CameraIcon,
  ChevronRightIcon,
  CubeIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  HandRaisedIcon,
  LifebuoyIcon,
  MusicalNoteIcon,
  PlayIcon,
  SpeakerWaveIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const HeroNav: React.FC = () => {
  const categories = [
    {
      title: 'Smartphone',
      slug: 'smartphone',
      icon: <DevicePhoneMobileIcon className="h-[18px] w-[18px]" />,
    },
    {
      title: 'Tablet',
      slug: 'tablet',
      icon: <DeviceTabletIcon className="h-[18px] w-[18px]" />,
    },
    {
      title: 'Camera',
      slug: 'camera',
      icon: <CameraIcon className="h-[18px] w-[18px]" />,
    },
    {
      title: 'Headphone',
      slug: 'headphone',
      icon: <MusicalNoteIcon className="h-[18px] w-[18px]" />,
    },
    {
      title: 'Earphone',
      slug: 'earphone',
      icon: <PlayIcon className="h-[18px] w-[18px]" />,
    },

    {
      title: 'Speakers',
      slug: 'Speakers',
      icon: <SpeakerWaveIcon className="h-[18px] w-[18px]" />,
    },
    {
      title: 'Smartwatch',
      slug: 'smartwatch',
      icon: <HandRaisedIcon className="h-[18px] w-[18px]" />,
    },
    {
      title: 'Drone',
      slug: 'drone',
      icon: <LifebuoyIcon className="h-[18px] w-[18px]" />,
    },
    {
      title: 'Charger',
      slug: 'charger',
      icon: <BoltIcon className="h-[18px] w-[18px]" />,
    },
    {
      title: 'Power Bank',
      slug: 'power-bank',
      icon: <Battery100Icon className="h-[18px] w-[18px]" />,
    },
    {
      title: 'Others',
      slug: 'others',
      icon: <CubeIcon className="h-[18px] w-[18px]" />,
    },
  ];

  return (
    <div className="bg-dark text-white p-4">
      {categories.map((category) => (
        <Link
          to={category.slug}
          className="py-2 2xl:py-2.5 flex items-center justify-between gap-2"
          key={category.slug}
        >
          <span className="flex items-center gap-3">
            <span>{category.icon}</span>
            <span>{category.title}</span>
          </span>
          <span>
            <ChevronRightIcon className="h-[18px] w-[18px]" />
          </span>
        </Link>
      ))}
    </div>
  );
};
export default HeroNav;
