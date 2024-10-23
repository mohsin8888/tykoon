import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Sidebar } from '../components/Sidebar';

export const DashboardLayout = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar className="w-full md:w-1/4 lg:w-1/5" />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className=" bg-[#f2f3f5] p-2 lg:ml-60 ">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
