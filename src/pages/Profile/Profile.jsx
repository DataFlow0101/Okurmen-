import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Импорт страниц
import Cabinet from './component/Кабинет/Cabinet';
import Traders from './component/Трейдеры/Traders';
import Statistics from './component/Статистика/Statistics';
import Instructions from './component/Инструкции/Instructions';
import Help from './component/Помощь/Help';
import './Profile.scss';

// Импорт иконок

import { BiCabinet } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoStatsChartSharp } from "react-icons/io5";
import { AiOutlineBook } from "react-icons/ai";
import { FaHandsHelping } from "react-icons/fa";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function ProfileTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <Box
     className='profile-container'
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        minHeight: '100%',
     
      }}
      >
      <Tabs
        className='profile-tabs'
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Profile Tabs"
        sx={{ borderRight: 1, borderColor: 'divider', width: 200 }}
        >
        <Tab
          icon={<BiCabinet className='icon'/>}
          label="Кабинет"
          {...a11yProps(0)}
          />
        <Tab
          icon={<FaPeopleGroup className='icon' />}
          label="Трейдеры"
          {...a11yProps(1)}
          />
        <Tab
          icon={<IoStatsChartSharp className='icon'/>}
          label="Статистика"
          {...a11yProps(2)}
          />
        <Tab
          icon={<AiOutlineBook className='icon' />}
          label="Инструкции"
          {...a11yProps(3)}
          />
        <Tab
          icon={<FaHandsHelping  className='icon'/>}
          label="Помощь"
          {...a11yProps(4)}
          />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Cabinet />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Traders />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Statistics />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Instructions />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Help />
      </TabPanel>
    </Box>
          </div>
  );
}
