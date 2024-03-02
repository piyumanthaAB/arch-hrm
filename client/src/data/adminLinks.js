import { FiHome, FiUsers } from 'react-icons/fi';

const links = [
  {
    icon: <FiHome />,
    linkText: 'Home',
    url: '/admin/home',
  },
  {
    icon: <FiUsers />,
    linkText: 'Users',
    url: '/admin/users',
  },
  {
    icon: <FiUsers />,
    linkText: 'Profile',
    url: '/admin/my-profile',
  },
];

export { links as adminLinks };
