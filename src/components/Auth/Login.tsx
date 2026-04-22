import React, { useState } from 'react';

interface LoginProps {
  onLogin: (email: string, password: string) => void;
  onSwitchToRegister: () => void;
  isDarkMode: boolean;
}

const Login: React.FC<LoginProps> = ({ onLogin, onSwitchToRegister, isDarkMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('请填写所有字段');
      return;
    }
    onLogin(email, password);
  };

  return (
    <div className={`container mx-auto max-w-md p-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      <h1 className="text-3xl font-bold mb-6 text-center">登录</h1>
      {error && <div className={`p-2 rounded mb-4 ${isDarkMode ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-900'}`}>{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">邮箱</label>
          <input 
            type="email" 
            className={`w-full p-2 rounded ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`} 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="请输入邮箱"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">密码</label>
          <input 
            type="password" 
            className={`w-full p-2 rounded ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`} 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="请输入密码"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm">记住我</label>
          </div>
          <a href="#" className="text-sm text-blue-400 hover:underline">忘记密码?</a>
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded text-white">
          登录
        </button>
        <div className="text-center">
          <span>还没有账户?</span>
          <button 
            type="button" 
            onClick={onSwitchToRegister} 
            className="text-blue-400 hover:underline ml-1"
          >
            注册
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;