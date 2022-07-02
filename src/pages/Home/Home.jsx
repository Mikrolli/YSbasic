import React from 'react';
import MainTitle from '../../components/MainTitle/MainTitle';
import MainAbout from '../../components/mainAbout/MainAbout';
import MainForm from '../../components/mainForm/MainForm';
import MainCard from '../../components/mainCard/MainCard';

const Home = () => {
  return (
    <div>
      <MainTitle />
      <MainAbout />
      <MainForm />
      <MainCard />
    </div>
  );
};
export default Home