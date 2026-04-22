import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

interface AuthProps {
  onLoginSuccess: (user: any) => void;
  isDarkMode: boolean;
}

const Auth: React.FC<AuthProps> = ({ onLoginSuccess, isDarkMode }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (email: string, password: string) => {
    // 模拟登录成功
    const user = {
      id: 1,
      email,
      username: email.split('@')[0],
    };
    onLoginSuccess(user);
  };

  const handleRegister = (email: string, password: string, username: string) => {
    // 模拟注册成功
    const user = {
      id: 2,
      email,
      username,
    };
    onLoginSuccess(user);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {isLogin ? (
        <Login 
          onLogin={handleLogin} 
          onSwitchToRegister={() => setIsLogin(false)} 
          isDarkMode={isDarkMode}
        />
      ) : (
        <Register 
          onRegister={handleRegister} 
          onSwitchToLogin={() => setIsLogin(true)} 
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
};

export default Auth;