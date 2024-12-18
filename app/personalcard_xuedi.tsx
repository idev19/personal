import React from 'react';
import {
  BadgeCheck,
  MapPin,
  Briefcase,
  Award,
  Code,
  Book,
  Heart,
  Mail,
  Phone,
} from 'lucide-react';

const PersonalCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl">
        {/* Header Section */}
        <div className="p-6 border-b">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <div className="text-3xl font-bold text-white">汤</div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">汤学地</h1>
              <div className="flex items-center gap-2 text-gray-600 mt-1">
                <MapPin size={16} />
                <span>上海</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  .NET开发专家
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                  软件工程师
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                  全栈开发
                </span>
              </div>
              <div className="flex gap-4 mt-2 text-gray-600">
                <div className="flex items-center gap-1">
                  <Mail size={14} />
                  <span className="text-sm">18872069350@163.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone size={14} />
                  <span className="text-sm">WeChat: Tom5206</span>
                </div>
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
            专注于医疗设备自动化系统开发，负责克隆挑选仪器和荧光定量检测仪器的上位机软件开发与系统架构设计
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
              <span>6年.NET开发经验，主导多个大型项目开发</span>
            </li>
            <li className="flex items-start gap-2">
              <BadgeCheck className="text-green-500 mt-1" size={16} />
              <span>成功带领7人团队完成企业级SaaS系统开发与维护</span>
            </li>
            <li className="flex items-start gap-2">
              <BadgeCheck className="text-green-500 mt-1" size={16} />
              <span>服务科兴、浦发等大型企业客户，项目应用于多家医疗机构</span>
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
            <h3 className="font-semibold text-blue-700">软件架构设计</h3>
            <p className="mt-2 text-sm text-gray-600">
              精通.NET Core, WPF, MVVM架构模式，具备微服务设计经验
            </p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-700">系统集成</h3>
            <p className="mt-2 text-sm text-gray-600">
              擅长多系统集成，包括ERP、OA、支付系统等第三方平台对接
            </p>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-700">自动化开发</h3>
            <p className="mt-2 text-sm text-gray-600">
              专注医疗设备自动化控制系统开发，掌握多种通讯协议
            </p>
          </div>

          <div className="p-4 bg-orange-50 rounded-lg">
            <h3 className="font-semibold text-orange-700">团队管理</h3>
            <p className="mt-2 text-sm text-gray-600">
              具备团队管理经验，善于需求分析和任务分配
            </p>
          </div>
        </div>

        {/* Interests */}
        <div className="p-6 border-t">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="text-blue-600" size={20} />
            <h2 className="text-lg font-semibold">兴趣方向</h2>
          </div>
          <div className="flex gap-4 text-gray-600">
            <span>🔧 自动化系统</span>
            <span>🎯 技术创新</span>
            <span>📱 软件架构</span>
            <span>🤝 团队协作</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 rounded-b-xl">
          <div className="flex justify-between items-center">
            <p className="text-gray-600 italic">
              "稳重大方，开朗自信，以技术创新推动行业发展"
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
