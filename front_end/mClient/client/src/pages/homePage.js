import '@arco-design/web-react/dist/css/arco.css';

import { useState } from 'react';
import { Layout, Menu } from '@arco-design/web-react';
import { IconHome, IconEmail, IconArchive, IconUserGroup } from '@arco-design/web-react/icon';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;
const Content = Layout.Content;
const collapsedWidth = 60;
const normalWidth = 220;


function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const [siderWidth, setSiderWidth] = useState(normalWidth);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
    setSiderWidth(collapsed ? collapsedWidth : normalWidth);
  };
  const [contentTag, setContentTag] = useState('');

  const onMenuClick = (key) => {
    setContentTag(key);
  }

  return (
    <Layout style={{ height: '100%' }}>
      <Sider
        collapsible
        theme='dark'
        onCollapse={onCollapse}
        collapsed={collapsed}
        width={siderWidth}
      >
        <div className='logo' />
        <Menu theme='dark' autoOpen style={{ width: '100%' }}>
          <MenuItem key='1' onClick={() => onMenuClick("dashboard")}>
            <IconHome />
            首页
          </MenuItem>
          <SubMenu
            key='2'
            title={
              <span>
                <IconArchive /> 板块管理
              </span>
            }
          >
            <MenuItem key='21' onClick={() => onMenuClick("topicList")}>板块列表</MenuItem>
            <MenuItem key='22' onClick={() => onMenuClick("newTopic")}>新增板块</MenuItem>
            <MenuItem key='23' onClick={() => onMenuClick("deleteTopic")}>删除板块</MenuItem>
          </SubMenu>
          <SubMenu
            key='3'
            title={
              <span>
                <IconUserGroup /> 用户管理
              </span>
            }
          >
            <MenuItem key='31' onClick={() => onMenuClick("allUsers")}>已有用户</MenuItem>
            <MenuItem key='32' onClick={() => onMenuClick("banManagement")}>封禁管理</MenuItem>
          </SubMenu>
          <MenuItem key='4' onClick={() => onMenuClick("reports")}>
            <IconEmail />
            站长信箱
          </MenuItem>
        </Menu>
      </Sider>
      <Content style={{ background: 'rgb(240,255,255)', textAlign: 'center', padding: '30px' }}>
      <div style={{ width: '100%', height: '100%' }}>
        {contentTag}
      </div>
      </Content>
    </Layout>
  );
}

export default Home;
