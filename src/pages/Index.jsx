import React from 'react';
import LoginForm from '../components/LoginForm';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl">
        <div className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Gym"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-1/2 bg-white p-8">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Index;