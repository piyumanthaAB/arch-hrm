import React, { useEffect, useState } from 'react';
import * as d from './DashboardElements';
import { FiHome, FiUsers, FiBook, FiCheckCircle } from 'react-icons/fi';
import { adminLinks } from '../../data/adminLinks';
import { userLinks } from '../../data/userLinks';
import { useLocation } from 'react-router-dom';

const Dashboard = ({ rightContainerContent }) => {
  const location = useLocation();
  const [navLinks, setNavLinks] = useState(adminLinks);
  const [currentPath, setCurrentPath] = useState('/admin/home');

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, []);

  return (
    <d.Container>
      <d.LeftPanel>
        <d.PanelTop></d.PanelTop>
        <d.PanelBody>
          {navLinks.map((link, idx) => {
            console.log({ currentPath });
            console.log({ linkUrl: link.url });
            console.log(
              currentPath === link.url || currentPath.includes(link.url)
            );
            return (
              <d.NavItem
                key={idx}
                to={link.url}
                background={
                  currentPath === link.url || currentPath.includes(link.url)
                    ? 'linear-gradient(195deg, #ec407a, #d81b60)'
                    : '#aaalinear-gradient(195deg, #242424, #242424)'
                }
              >
                <d.IconContainer>{link.icon}</d.IconContainer>
                <d.NavItemTextContainer>{link.linkText}</d.NavItemTextContainer>
              </d.NavItem>
            );
          })}
        </d.PanelBody>
      </d.LeftPanel>
      <d.RightContainer>{rightContainerContent}</d.RightContainer>
    </d.Container>
  );
};

export default Dashboard;
