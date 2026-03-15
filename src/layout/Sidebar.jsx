import React from 'react';
import {
  Drawer, Box, Divider, List, ListItemButton,
  ListItemIcon, ListItemText, Collapse
} from '@mui/material';

import {
  SpaceDashboard as SpaceDashboardIcon,
  BarChart as BarChartIcon,
  ExpandLess,
  ExpandMore,
  Layers as LayersIcon,
  Assessment as AssessmentIcon
} from '@mui/icons-material';

import HistoryIcon from '@mui/icons-material/History';
import Person2Icon from '@mui/icons-material/Person2';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LockIcon from '@mui/icons-material/Lock';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../redux/uiSlice';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useAuthContext } from '../ContextAPI/AuthContext';

const Sidebar = () => {

  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);
  const currentBgColor = useSelector((state) => state.setting.defaultSidebarButtonBgColor);

  const { userType } = useAuthContext();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [openMore, setOpenMore] = React.useState(false);

  const toggleMoreOptions = () => setOpenMore(!openMore);

  // ROLE BASED MENUS
  const roleMenus = {

    admin: {
      main: [
        { text: "Dashboard", path: "/Dashboard", icon: <SpaceDashboardIcon /> },
        { text: "Agency Verification", path: "/AgencyVerification", icon: <BarChartIcon /> },
        // { text: "Users", path: "/users", icon: <Person2Icon /> },
      ],
      // more: [
      //   { text: "Reports", icon: <AssessmentIcon />, path: "/reports" },
      //   { text: "Integrations", icon: <LayersIcon />, path: "/integrations" }
      // ]
    },

    agency: {
      main: [
        { text: "Dashboard", path: "/", icon: <SpaceDashboardIcon /> },
        // { text: "Manpower Requirement", path: "/postrequirement", icon: <LockIcon /> },
        { text: "Logs", path: "/logs", icon: <HistoryIcon /> }
      ]
    },

    buyer: {
      main: [
        { text: "Dashboard", path: "/Dashboard", icon: <SpaceDashboardIcon /> },
        { text: "My Requests", path: "/notifications", icon: <TextSnippetIcon /> },
        { text: "Post Requirement", path: "/postrequirement", icon: <TextSnippetIcon /> },
        { text: "Active Bookings", path: "/profile", icon: <AppRegistrationIcon /> },
        { text: "Profile", path: "/profile", icon: <Person2Icon /> }
      ]
    }

  };

  // SAFE ACCESS
  const menuItems = roleMenus[userType]?.main || [];
  const moreItems = roleMenus[userType]?.more || [];

  return (

    <Drawer
      variant={isSmallScreen ? "temporary" : "permanent"}
      open={isSmallScreen ? isSidebarOpen : true}
      onClose={() => dispatch(toggleSidebar())}
      sx={{
        '& .MuiDrawer-paper': {
          width: 250,
          boxSizing: 'border-box',
          background: theme.palette.background.default,
          color: theme.palette.text.primary,
          px: 1,
        },
      }}
    >

      {/* LOGO */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 2,
        }}
      >
        LOGO
      </Box>

      <Divider sx={{ mx: -1, mt: 0.9 }} />

      <List>

        {/* MAIN MENU */}
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={NavLink}
            to={item.path}
            onClick={isSmallScreen ? () => dispatch(toggleSidebar()) : undefined}
            sx={{
              borderRadius: 2,
              '&.active': {
                backgroundColor: currentBgColor,
              },
            }}
          >
            <ListItemIcon sx={{ color: theme.palette.text.primary }}>
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.text} />

          </ListItemButton>
        ))}

        {/* MORE OPTIONS ONLY IF EXISTS */}

        {moreItems.length > 0 && (

          <>
            <ListItemButton onClick={toggleMoreOptions}>

              <ListItemIcon sx={{ color: theme.palette.text.primary }}>
                <LayersIcon />
              </ListItemIcon>

              <ListItemText primary="More Options" />

              {openMore ? <ExpandLess /> : <ExpandMore />}

            </ListItemButton>

            <Collapse in={openMore} timeout="auto" unmountOnExit>

              <List component="div" disablePadding>

                {moreItems.map((item) => (

                  <ListItemButton
                    key={item.text}
                    component={NavLink}
                    to={item.path}
                    onClick={isSmallScreen ? () => dispatch(toggleSidebar()) : undefined}
                    sx={{
                      pl: 4,
                      borderRadius: 2,
                      '&.active': {
                        backgroundColor: currentBgColor,
                      },
                    }}
                  >

                    <ListItemIcon sx={{ color: theme.palette.text.primary }}>
                      {item.icon}
                    </ListItemIcon>

                    <ListItemText primary={item.text} />

                  </ListItemButton>

                ))}

              </List>

            </Collapse>

          </>
        )}

      </List>

    </Drawer>

  );
};

export default Sidebar;