import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaCalendar, FaClipboardList, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="pt-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-primary">Bem-vindo(a), Paciente</h1>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-red-600 hover:text-red-700"
              >
                <FaSignOutAlt />
                <span>Sair</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <FaCalendar className="text-primary text-2xl" />
                <h2 className="text-xl font-semibold">Próxima Consulta</h2>
              </div>
              <p className="text-gray-600">15 de Agosto, 2023</p>
              <p className="text-gray-600">14:30</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <FaClipboardList className="text-primary text-2xl" />
                <h2 className="text-xl font-semibold">Histórico</h2>
              </div>
              <p className="text-gray-600">Últimas consultas: 3</p>
              <button className="text-primary hover:underline mt-2">Ver detalhes</button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <FaUserCircle className="text-primary text-2xl" />
                <h2 className="text-xl font-semibold">Perfil</h2>
              </div>
              <button className="text-primary hover:underline">Editar informações</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
