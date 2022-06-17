import {ConfigProvider} from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {WebLayout} from '@/routes/WebLayout';

import {Home} from './home';
import {Project} from './project';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<WebLayout />}>
            <Route index element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
