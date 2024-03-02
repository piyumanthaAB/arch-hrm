import HomePageCard from '../../components/shared/HomePageCard';
import { FiEdit } from 'react-icons/fi';

const cards = [
  {
    element: (
      <HomePageCard
        icon={<FiEdit />}
        cardcolor="#EBFAF0"
        iconcirclecolor="#CCEBD7"
        text="Update Profile"
        url="/user/my-profile"
      />
    ),
  },
];

export { cards as userCards };
