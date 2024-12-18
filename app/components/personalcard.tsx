import React from 'react';
import {
  BadgeCheck,
  MapPin,
  Briefcase,
  Award,
  Code,
  Book,
  Heart,
  User,
} from 'lucide-react';

const PersonalCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl">
        {/* Header Section */}
        <div className="p-6 border-b">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <User size={48} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">张诚</h1>
              <div className="flex items-center gap-2 text-gray-600 mt-1">
                <MapPin size={16} />
                <span>上海</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  全栈开发
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                  后端工程师
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                  技术专家
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Focus Section */}
        <div className="p-6 bg-blue-50">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="text-blue-600" size={20} />
            <h2 className="text-lg font-semibold">近期关键投入</h2>
          </div>
          <p className="text-gray-700">
            专注于企业级 SaaS 系统开发，负责福建水务营收系统的后端架构与开发
          </p>
        </div>

        {/* Career Highlights */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Award className="text-blue-600" size={20} />
            <h2 className="text-lg font-semibold">履历亮点</h2>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <BadgeCheck className="text-green-500 mt-1" size={16} />
              <span>4年企业级应用开发经验，深耕.NET技术栈</span>
            </li>
            <li className="flex items-start gap-2">
              <BadgeCheck className="text-green-500 mt-1" size={16} />
              <span>精通微服务架构，具备完整的企业应用开发能力</span>
            </li>
            <li className="flex items-start gap-2">
              <BadgeCheck className="text-green-500 mt-1" size={16} />
              <span>全栈开发能力，擅长前后端技术整合与架构设计</span>
            </li>
          </ul>
        </div>

        {/* Expertise Areas */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2 mb-3 col-span-full">
            <Code className="text-blue-600" size={20} />
            <h2 className="text-lg font-semibold">擅长领域</h2>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-700">后端开发</h3>
            <p className="mt-2 text-sm text-gray-600">
              精通 ASP.NET Core，具备微服务架构设计与实现能力
            </p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-700">数据库开发</h3>
            <p className="mt-2 text-sm text-gray-600">
              熟练使用 SQL Server、Redis，具备高性能数据处理经验
            </p>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-700">DevOps</h3>
            <p className="mt-2 text-sm text-gray-600">
              熟悉 Docker、Jenkins，具备完整的 CI/CD 实践经验
            </p>
          </div>

          <div className="p-4 bg-orange-50 rounded-lg">
            <h3 className="font-semibold text-orange-700">前端开发</h3>
            <p className="mt-2 text-sm text-gray-600">
              熟练使用 Vue.js，具备完整的前端工程化实践经验
            </p>
          </div>
        </div>

        {/* Interests */}
        <div className="p-6 border-t">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="text-blue-600" size={20} />
            <h2 className="text-lg font-semibold">兴趣爱好</h2>
          </div>
          <div className="flex gap-4 text-gray-600">
            <span>📚 技术钻研</span>
            <span>💻 开源贡献</span>
            <span>🎮 游戏开发</span>
            <span>🌱 持续学习</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 rounded-b-xl">
          <div className="flex justify-between items-center">
            <p className="text-gray-600 italic">
              "思路清晰，热爱技术，永远保持学习的激情"
            </p>
            <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
              <Book className="text-gray-400" size={32} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;
