import {IoHome, IoCreateOutline} from 'react-icons/io5';
import {FaRegCompass} from 'react-icons/fa';
import {CiHeart, CiSettings} from 'react-icons/ci';

export const links = [
  {icon: <IoHome />, title: 'Home', path: '/'},
  {icon: <IoCreateOutline />, title: 'Create', path: '/ekle'},
  {icon: <FaRegCompass />, title: 'Discover', path: '/kesfet'},
  {icon: <CiHeart />, title: 'Favorites', path: '/fav'},
  {icon: <CiSettings />, title: 'Contact', path: '/yardim'},
];
