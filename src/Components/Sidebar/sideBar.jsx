import "./sideBar.css"
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TimelineIcon from '@material-ui/icons/Timeline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PersonIcon from '@material-ui/icons/Person';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MailIcon from '@material-ui/icons/Mail';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import MessageIcon from '@material-ui/icons/Message';
import EventSharpIcon from '@material-ui/icons/EventSharp';
import CardGiftcardSharpIcon from '@material-ui/icons/CardGiftcardSharp';

function SideBar() {
    return (
        <div className='sidebar'>
          <div className="sidebarWrapper">
          <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>   
          <ul className="sidebarList">
          <li className="sidebarListItem active">
          <LineStyleIcon className="sidebarIcon"/>
          Home
         </li>
         <li className="sidebarListItem">
          <TimelineIcon className="sidebarIcon"/>
          Analytics
         </li>
         <li className="sidebarListItem">
          <TrendingUpIcon className="sidebarIcon" />
          Sales
         </li>

          </ul>
          
          </div>
          <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>   
          <ul className="sidebarList">
          <li className="sidebarListItem">
          <PersonIcon />
          Users
         </li>
         <li className="sidebarListItem">
          <CardGiftcardSharpIcon />
          Products
         </li>
         <li className="sidebarListItem">
          <AttachMoneyIcon />
          Transactions
         </li>
         <li className="sidebarListItem">
         <AssessmentIcon />
          Reports
         </li>
         </ul>
  </div>
  <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>   
          <ul className="sidebarList">
          <li className="sidebarListItem">
          <MailIcon />
          Mail
         </li>
         <li className="sidebarListItem">
          <DynamicFeedIcon />
          FeedBack
         </li>
         <li className="sidebarListItem">
          <MessageIcon />
          Messages
         </li>
      </ul>
  </div>
  <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>   
          <ul className="sidebarList">
          <li className="sidebarListItem">
          <EventSharpIcon />
          Manage
         </li>
         <li className="sidebarListItem">
          <TimelineIcon />
          Analytics
         </li>
         <li className="sidebarListItem">
          <AssessmentIcon />
          Reports
         </li>
      </ul>
  </div>
</div>
        </div>
    )
}

export default SideBar
