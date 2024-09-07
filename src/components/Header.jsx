import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/placeholder.svg" alt="Energym Logo" className="h-10 w-10 mr-2" />
          <span className="text-xl font-bold">ENERGYM⚡️</span>
        </div>
        <nav>
          <Button variant="ghost" className="mr-2">เข้าสู่ระบบ</Button>
          <Button>สมัครสมาชิก</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;