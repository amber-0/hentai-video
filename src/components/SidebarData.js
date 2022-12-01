import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ReportIcon from '@material-ui/icons/Report';
import PersonIcon from '@material-ui/icons/Person';

export const SidebarData = [
  {
    title:'Home',
    icon: <HomeIcon />,
    link:'/home'
  },
  {
    title:'変態',
    icon: <ReportIcon />,
    link:'/hentai'
  },
  {
    title:'変態じゃない',
    icon: <PersonIcon />,
    link:'/nothentai'
  },
  {
    title:'Profile',
    icon: <AssignmentIndIcon />,
    link:'/profile'
  }
]
