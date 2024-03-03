import React, { useEffect, useState } from 'react';
import * as d from './DashboardElements';
import { FiHome, FiUsers, FiBook, FiCheckCircle } from 'react-icons/fi';
import { adminLinks } from '../../data/adminLinks';
import { userLinks } from '../../data/userLinks';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import logo from './../../images/archmage_logo.png';

const Dashboard = ({ rightContainerContent }) => {
  const location = useLocation();
  const [navLinks, setNavLinks] = useState(adminLinks);
  const [currentPath, setCurrentPath] = useState('/admin/home');
  const { user, logout } = useAuth();

  useEffect(() => {
    setCurrentPath(location.pathname);
    switch (user?.role) {
      case 'user':
        setNavLinks(userLinks);
        break;
      case 'admin':
        setNavLinks(adminLinks);
        break;

      default:
        // navigate('/login')
        break;
    }
  }, [location.pathname]);

  const handleLogout = async (e) => {
    await toast.promise(
      logout(),
      {
        loading: 'Logging out ...',
        success: (data) => `Logged out successfully `,
        error: (err) => {
          if (!err.response.data.message) {
            return 'Something went wrong. Try again.';
          }
          return `${err?.response?.data?.message?.toString()}`;
        },
      },
      {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '1.5rem',
        },
      }
    );
  };

  return (
    <d.Container>
      <d.LeftPanel>
        <d.PanelTop>
          <d.Img src={logo} />
        </d.PanelTop>
        <d.PanelBody>
          {navLinks.map((link, idx) => {
            return (
              <d.NavItem
                key={idx}
                to={link.url}
                background={
                  currentPath === link.url || currentPath.includes(link.url)
                    ? 'linear-gradient(195deg, #ec407a, #d81b60)'
                    : 'linear-gradient(195deg, #242424, #242424)'
                }
              >
                <d.IconContainer>{link.icon}</d.IconContainer>
                <d.NavItemTextContainer>{link.linkText}</d.NavItemTextContainer>
              </d.NavItem>
            );
          })}
          <d.NavItem
            to={'/'}
            onClick={handleLogout}
            background={'linear-gradient(195deg, #242424, #242424)'}
          >
            <d.IconContainer>
              <FiHome />
            </d.IconContainer>
            <d.NavItemTextContainer>Logout</d.NavItemTextContainer>
          </d.NavItem>
        </d.PanelBody>
      </d.LeftPanel>
      <d.RightContainer>{rightContainerContent}</d.RightContainer>
    </d.Container>
  );
};

export default Dashboard;
