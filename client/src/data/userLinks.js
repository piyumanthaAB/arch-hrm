import { FiHome, FiUsers, FiBook, FiCheckCircle } from 'react-icons/fi';

const links = [
  {
    icon: <FiHome />,
    linkText: 'Home',
    url: '/user/home',
  },
  {
    icon: <FiBook />,
    linkText: 'Profile',
    url: '/user/profile',
  },
];

export { links as userLinks };
