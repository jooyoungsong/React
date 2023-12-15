import React from 'react';
import Title1 from './components/Title1';
import { About, Info, Main, Menu } from './components';
import { Route, Routes } from 'react-router-dom';
import Member from './member/Member';
import Board1 from './board/Board1';
import './App.css';
import { Shop, ShopDetail, ShopForm } from './shop';
import Login1 from './login/Login1';

function RouteMain(props) {
    return (
        <div>
            <div className='title'><Title1/></div>
            <div className='info'><Info/></div>
            <div className='menu'><Menu/></div>
            <div className='main'>
              <Routes>
                <Route path='/' element={<Main/>}/>
                  

                 {/*shop */}
                <Route path='/shop/list' element={<Shop/>}/> 
                <Route path='/shop/form' element={<ShopForm/>}/> 
                <Route path='/shop/detail/:num' element={<ShopDetail/>}/> 
                
                
                <Route path='/board/list' element={<Board1/>}/> 
                <Route path='/member/form' element={<Member/>}/> 
                <Route path='/login' element={<Login1/>}/>  
                <Route path='/about' element={<About/>}/> 
                <Route path='*' element={
                    <div>
                        <h1>잘못된 주소입니다</h1>
                    </div>
                }/> 
              </Routes>
            </div>
        </div>
    );
}

export default RouteMain;