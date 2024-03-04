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
];

export { links as adminLinks };
