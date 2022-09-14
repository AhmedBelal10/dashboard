import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings, NotFound } from './components';
import { Ecommerce,  Orders, Calender, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line } from './pages';
import { useStateContext } from './contexts/ContextProvider';
import './App.css';

function App() {
  const { activeMenu , themeSettings , setThemeSettings , currentColor , currentMode } = useStateContext()

  return (
    <div className={currentMode === "Dark" ? 'dark' : ''}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position='Top'>
           
              <button type='button'
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                style={{ borderRadius: "50%", background: `${currentColor}` }}
                onClick={()=>setThemeSettings(true)}
                >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {
            activeMenu ? (
              <div className='sidebar w-72 fixed dark:bg-secondary-dark-bg bg-white'>
                <Sidebar />
              </div>
            ) : (
              <div className='w-0 dark:bg-secondary-dark-bg'>
                <Sidebar />
              </div>
            )}
          <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
          ${activeMenu ? ' md:ml-72 ' :'flex-2'}`} >
            <div className='navbar fixed md:static bg-main-bg dark:bg-main-dark-bg w-full'>
              <Navbar />
            </div>

            <div>

              {themeSettings &&  <ThemeSettings/>}
              <Routes>
                {/* dashboard */}
                <Route path='/' element={<Ecommerce />} />
                <Route path='/ecommerce' element={<Ecommerce />} />
                {/* pages */}
                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/customers' element={<Customers />} />
                {/* Apps */}
                <Route path='/kanban' element={<Kanban />} />
                <Route path='/editor' element={<Editor />} />
                <Route path='/calender' element={<Calender />} />
                <Route path='/color-picker' element={<ColorPicker />} />
                {/* charts */}
                <Route path='/line' element={<Line />} />
                <Route path='/area' element={<Area />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/pie' element={<Pie />} />
                <Route path='/financial' element={<Financial />} />
                <Route path='/color-mapping' element={<ColorMapping />} />
                <Route path='/pyramid' element={<Pyramid />} />
                <Route path='/stacked' element={<Stacked />} />
                <Route path='/dashboard' element={<Ecommerce />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
