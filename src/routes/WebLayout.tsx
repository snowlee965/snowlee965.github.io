import {Layout, Menu} from 'antd';
import React from 'react';
import {Outlet} from 'react-router';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const {Header, Content, Footer} = Layout;

const WebItems = [
  {key: '/', label: <Link to={'/'}>首页</Link>},
  {key: '/project', label: <Link to={'/project'}>项目</Link>},
];

const LogoWrap = styled.div`
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
`;

const SiteLayoutContent = styled.div`
  height: calc(100vh - 134px);
  padding: 24px;
  background: #fff;
`;

console.log(import.meta.env.BASE_URL);
export const WebLayout: React.FC = () => {
  return (
    <Layout>
      <Header>
        <LogoWrap />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[`/${location.pathname.replace(import.meta.env.BASE_URL, '')}`]}
          items={WebItems}
        />
      </Header>
      <Content style={{padding: '0 50px'}}>
        <SiteLayoutContent>
          <Outlet />
        </SiteLayoutContent>
      </Content>
      <Footer style={{textAlign: 'center'}}>Copyright</Footer>
    </Layout>
  );
};
