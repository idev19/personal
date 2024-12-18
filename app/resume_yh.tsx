import React from 'react';
import {
  User,
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
  Mail,
  Phone,
  Calendar,
} from 'lucide-react';

const Resume = () => {
  return (
    <div className="bg-white max-w-4xl mx-auto p-8 shadow-2xl rounded-xl font-sans">
      {/* 头部个人信息 */}
      <div className="flex items-center mb-8 border-b pb-4">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full mr-6"></div>
        <div>
          <h1 className="text-3xl font-bold text-blue-800">杨会</h1>
          <div className="flex items-center text-gray-600 space-x-4 mt-2">
            <div className="flex items-center">
              <MapPin className="mr-2 text-blue-500" size={20} />
              <span>广东</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 text-blue-500" size={20} />
              <span>1255422334@qq.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 text-blue-500" size={20} />
              <span>18286303794</span>
            </div>
          </div>
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full inline-block mt-2">
            求职意向：Layout工程师
          </div>
        </div>
      </div>

      {/* 个人描述 */}
      <section className="mb-6">
        <h2 className="flex items-center text-xl font-semibold text-blue-700 mb-4">
          <User className="mr-2 text-blue-500" /> 个人描述
        </h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <ul className="list-disc list-inside text-gray-700">
            <li>较强的组织能力，有较好的团队协作精神，具备较强学习能力</li>
            <li>
              熟练使用Office办公套件，熟练Cadence
              Allegro软件，有较强的工作处理能力
            </li>
            <li>待人真诚、自信乐观、谦虚稳重、做事认真负责</li>
          </ul>
        </div>
      </section>

      {/* 专业技能 */}
      <section className="mb-6">
        <h2 className="flex items-center text-xl font-semibold text-blue-700 mb-4">
          <Award className="mr-2 text-blue-500" /> 技能证书
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">英语能力</h3>
            <p>大学生英语四级（CET4）</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">办公能力</h3>
            <p>计算机二级，熟练PPT/WORD/EXCEL，熟悉Cadence Allegro、CAD</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-semibold text-orange-800 mb-2">语言能力</h3>
            <p>普通话资格考试二级乙等</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">荣誉证书</h3>
            <p>全国电子竞赛优秀奖</p>
          </div>
        </div>
      </section>

      {/* 工作经历 */}
      <section className="mb-6">
        <h2 className="flex items-center text-xl font-semibold text-blue-700 mb-4">
          <Briefcase className="mr-2 text-blue-500" /> 工作经历
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-800">
              三赢科技（深圳）有限公司/信扬科技（佛山）有限公司 - LE工程师
            </h3>
            <p className="text-gray-600">2022.3 - 至今</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>使用CAD画电路板机构图或使用Orcad制作电路原理图</li>
              <li>使用Candence Pad Designer制作焊盘</li>
              <li>使用Candence Allegro进行Layout封装的建立和电路板的制作</li>
              <li>使用CAM350进行Gerber可行性查看</li>
              <li>Layout元件封装库管理和维护，生产资料整理</li>
              <li>负责与板厂沟通，针对电路板进行DFM</li>
              <li>处理并审核需要上传到系统的电子料资料</li>
            </ul>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-gray-800">
              贵州华旭光电有限公司 - 行政专员
            </h3>
            <p className="text-gray-600">2021.8 - 2022.2</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>根据公司需求进行招聘员工</li>
              <li>办理入职人员的入职手续，分宿舍以及工衣</li>
              <li>负责员工考勤的核查与监督，整合员工每月加班时数</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 教育背景 */}
      <section>
        <h2 className="flex items-center text-xl font-semibold text-blue-700 mb-4">
          <GraduationCap className="mr-2 text-blue-500" /> 教育背景
        </h2>
        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-800">
            兴义民族师范学院 - 电子科学与技术
          </h3>
          <p className="text-gray-600 mb-2">2017 - 2021</p>
          <div>
            <strong className="text-gray-700">主修课程：</strong>
            <p className="text-gray-700">
              模拟电子技术、电路分析、单片机原理与应用、集成电路设计、数字电子技术、
              C语言程序设计、信号与系统、高频电子线路、测量与控制应用、VHDL语言
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
