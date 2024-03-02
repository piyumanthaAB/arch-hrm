import HomePageCard from '../../components/shared/HomePageCard';
import { FiEdit, FiUsers } from 'react-icons/fi';

const cards = [
  {
    element: (
      <HomePageCard
        icon={<FiEdit />}
        cardcolor="#EBFAF0"
        iconcirclecolor="#CCEBD7"
        text="Register New User"
        url="/admin/users/add-user"
      />
    ),
  },
  {
    element: (
      <HomePageCard
        icon={<FiUsers />}
        cardcolor="#F0F0FF"
        iconcirclecolor="#D9D9FC"
        text="View All Users"
        url="/admin/users/view-users"
      />
    ),
  },
];

export { cards as adminCards };
