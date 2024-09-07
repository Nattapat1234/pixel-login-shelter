import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/placeholder.svg" alt="Energym Logo" className="h-10 w-10 mr-2" />
          <span className="text-xl font-bold">ENERGYM⚡️</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-900">หน้าหลัก</Link>
          <Link to="/workouts" className="text-gray-600 hover:text-gray-900">การออกกำลังกาย</Link>
          <Link to="/nutrition" className="text-gray-600 hover:text-gray-900">โภชนาการ</Link>
          <Link to="/community" className="text-gray-600 hover:text-gray-900">ชุมชน</Link>
        </nav>
        <div>
          <Link to="/login">
            <Button variant="ghost" className="mr-2">เข้าสู่ระบบ</Button>
          </Link>
          <Link to="/signup">
            <Button>สมัครสมาชิก</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;