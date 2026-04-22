import React, { useState } from 'react';

interface RegisterProps {
  onRegister: (email: string, password: string, username: string) => void;
  onSwitchToLogin: () => void;
  isDarkMode: boolean;
}

const Register: React.FC<RegisterProps> = ({ onRegister, onSwitchToLogin, isDarkMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword || !username) {
      setError('请填写所有字段');
      return;
    }
    if (password !== confirmPassword) {
      setError('两次输入的密码不一致');
      return;
    }
    onRegister(email, password, username);
  };

  return (
    <div className={`container mx-auto max-w-md p-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      <h1 className="text-3xl font-bold mb-6 text-center">注册</h1>
      {error && <div className={`p-2 rounded mb-4 ${isDarkMode ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-900'}`}>{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">用户名</label>
          <input 
            type="text" 
            className={`w-full p-2 rounded ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`} 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            placeholder="请输入用户名"
          />
        </div>
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
        <div>
          <label className="block text-sm font-medium mb-1">确认密码</label>
          <input 
            type="password" 
            className={`w-full p-2 rounded ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`} 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="请再次输入密码"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">
          注册
        </button>
      </form>
      <div className="mt-4 text-center">
        <p>已有账户？ <button onClick={onSwitchToLogin} className="text-blue-400 hover:underline">立即登录</button></p>
      </div>
    </div>
  );
};

export default Register;