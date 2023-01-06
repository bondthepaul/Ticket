import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
import GetJson from './GetJson';
import Header from "../Component/Header"
import Content from '../Component/Content';
import history from '../history';
const Home = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60vh',
      padding: '100px',
      backgroundColor: 'rgb(226, 248, 254)'
    }}>
      <Header></Header>
      <Content></Content>
      
    </div>
  );
};
  
export default Home;