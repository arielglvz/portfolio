import React from 'react'
import Header from '../../components/Header'
import { Tabs } from 'antd';
import AdminHero from './AdminHero';
import WriteComponent from './Write';
import ReadComponent from './Read';
import UpdateReadComponent from './UpdateRead';
import UpdateWriteComponent from './UpdateWrite';

const AdminPage = () => {
  const items = [
    {
      key: '1',
      label: 'Hero',
      children: <AdminHero />
    },
    {
      key: '2',
      label: 'Write',
      children: <WriteComponent />,
    },
    {
      key: '3',
      label: 'Read',
      children: <ReadComponent />,
    },
    {
      key: '4',
      label: 'Update Read',
      children: <UpdateReadComponent />,
    },
    {
      key: '5',
      label: 'Update Write',
      children: <UpdateWriteComponent />,
    },
  ];

  const onChange = (key) => {
    console.log('onChangeKey: ', key);
  };

  return (
    <>
      <Header left='&copy; 2024' right='LOGOUT'/>
      <Tabs defaultActiveKey='1' type='card' items={items} onChange={onChange} />
    </>
  )
}

export default AdminPage
