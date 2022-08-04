import Image from 'next/image';
import SidebarMenuItem from './SidebarMenuItem';
import { HomeIcon } from '@heroicons/react/solid';
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from '@heroicons/react/outline';
export default function Sidebar() {
  return (
    <div>
      {/* Twitter Logo */}
      <div className=''>
        <Image
          alt='Logo'
          height='50'
          width='50'
          src='https://help.twitter.com/content/dam/help-twitter/brand/logo.png'
        ></Image>
      </div>
      {/* Menu */}
      <div className=''>
        <SidebarMenuItem text='Home' Icon={HomeIcon} />
        <SidebarMenuItem text='Explore' Icon={HashtagIcon} />
        <SidebarMenuItem text='Notification' Icon={BellIcon} />
        <SidebarMenuItem text='Messages' Icon={InboxIcon} />
        <SidebarMenuItem text='Bookmarks' Icon={BookmarkIcon} />
        <SidebarMenuItem text='Lists' Icon={ClipboardIcon} />
        <SidebarMenuItem text='Profile' Icon={UserIcon} />
        <SidebarMenuItem text='More' Icon={DotsCircleHorizontalIcon} />
      </div>
      {/* Button */}
      {/* Mini-profile */}
    </div>
  );
}
