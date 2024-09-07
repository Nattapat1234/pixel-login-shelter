import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginForm = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <img src="/placeholder.svg" alt="Energym Logo" className="mx-auto w-16 h-16" />
        <h2 className="mt-4 text-2xl font-bold">เข้าสู่ระบบ</h2>
      </div>
      <form className="space-y-4">
        <div>
          <Input type="email" placeholder="Email" />
        </div>
        <div>
          <Input type="password" placeholder="Password" />
        </div>
        <Button className="w-full">ลงชื่อเข้าใช้งาน</Button>
      </form>
      <div className="text-center space-y-2">
        <a href="#" className="text-sm text-blue-600 hover:underline">สร้างบัญชีของคุณ</a>
        <br />
        <a href="#" className="text-sm text-blue-600 hover:underline">ลืมรหัสผ่าน?</a>
      </div>
    </div>
  );
};

export default LoginForm;