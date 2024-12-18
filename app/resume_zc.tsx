import React from 'react';
import {
  User,
  Briefcase,
  GraduationCap,
  Code,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Star,
  Server,
  Layout,
} from 'lucide-react';

const Resume = () => {
  return (
    <div className="bg-white max-w-4xl mx-auto p-8 shadow-2xl rounded-xl font-sans">
      {/* 头部个人信息 */}
      <div className="flex items-center mb-8 border-b pb-4">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full mr-6"></div>
        <div>
          <h1 className="text-3xl font-bold text-blue-800">张诚</h1>
          <div className="flex items-center text-gray-600 space-x-4 mt-2">
            <div className="flex items-center">
              <MapPin className="mr-2 text-blue-500" size={20} />
              <span>意向城市：上海</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 text-blue-500" size={20} />
              <span>izc9494@163.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 text-blue-500" size={20} />
              <span>18772763719</span>
            </div>
          </div>
          <div className="flex space-x-4 mt-2">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
              年龄：26岁
            </div>
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              工作年限：4年
            </div>
            <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
              入职时间：一周内到岗
            </div>
          </div>
        </div>
      </div>

      {/* 个人描述 */}
      <section className="mb-6">
        <h2 className="flex items-center text-xl font-semibold text-blue-700 mb-4">
          <User className="mr-2 text-blue-500" /> 个人描述
        </h2>
        <div className="bg-blue-50 p-4 rounded-lg text-gray-700">
          <p className="italic mb-2">"我一直在努力成为更好的自己"</p>
          <ul className="list-disc list-inside">
            <li>思路清晰，具备良好的沟通能力和理解能力</li>
            <li>热爱技术，具备良好的自学能力</li>
            <li>责任感强，态度严谨，抗压能力强</li>
            <li>乐于助人，有很好的团队合作精神</li>
          </ul>
        </div>
      </section>

      {/* 技术技能 */}
      <section className="mb-6">
        <h2 className="flex items-center text-xl font-semibold text-blue-700 mb-4">
          <Code className="mr-2 text-blue-500" /> 技术技能
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">后端技术</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Asp.net Core Web Api/MVC</li>
              <li>Abp Vnext 框架</li>
              <li>Entity Framework Core</li>
              <li>Autofac IOC框架</li>
              <li>微服务组件（Consul, Ocelot, IdentityServer4）</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">
              前端与其他技术
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Vue.js</li>
              <li>HTML/CSS/JavaScript</li>
              <li>微信公众号/小程序开发</li>
              <li>Git/TFS 版本管理</li>
              <li>Docker, Linux, Jenkins CI/CD</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">数据库与中间件</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>SqlServer</li>
              <li>Redis</li>
              <li>RabbitMq</li>
              <li>存储过程与T-SQL</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-semibold text-orange-800 mb-2">开发工具</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Visual Studio 2019/2017</li>
              <li>Windows 10</li>
              <li>Linux 基础操作</li>
              <li>LNMP 环境</li>
            </ul>
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
              上海沄远科技有限公司 - 程序员
            </h3>
            <p className="text-gray-600">2021.07 - 至今</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>项目需求评估与解决方案设计</li>
              <li>测试环境搭建、数据库设计、接口开发</li>
              <li>项目发布与监控</li>
              <li>框架组件更新与迭代</li>
            </ul>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-gray-800">
              上海加谷网络科技有限公司 - 程序员
            </h3>
            <p className="text-gray-600">2018.09 - 2021.06</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>软件开发与维护</li>
              <li>参与项目需求分析</li>
              <li>协助项目测试与优化</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 项目经历 */}
      <section className="mb-6">
        <h2 className="flex items-center text-xl font-semibold text-blue-700 mb-4">
          <Server className="mr-2 text-blue-500" /> 项目经历
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800">
              福建水务营收SASS系统 | 2021.07 - 至今
            </h3>
            <p className="text-gray-700 mb-2">
              基于微服务架构的水务营收管理系统，通过模块化设计实现灵活、高效的业务处理和数据管理。
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>采用Abp Vnext框架搭建微服务架构，实现服务解耦和独立部署</li>
              <li>
                使用Consul和Ocelot完成服务注册、发现和网关路由，提升系统可扩展性
              </li>
              <li>集成RabbitMq实现服务间异步通信，优化系统性能和响应速度</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800">
              上海贮聚实业有限公司电商网站 | 2020.03 - 2021.06
            </h3>
            <p className="text-gray-700 mb-2">
              开发面向中小企业的电商平台，提供全面的电子商务解决方案，包括用户、商品和订单管理。
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>设计并实现前后端分离的电商系统，使用Vue.js和.NET Core构建</li>
              <li>开发包括用户注册、购物车、订单管理等核心电商功能模块</li>
              <li>搭建后台管理系统，提供商品、用户、订单等多维度管理功能</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800">
              微信小程序商城 | 2019.09 - 2020.02
            </h3>
            <p className="text-gray-700 mb-2">
              基于微信生态开发的轻量级电商小程序，提供便捷的移动端购物体验和高效的商品展示。
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>使用原生微信小程序开发，完成商品展示、用户认证和支付流程</li>
              <li>接入微信支付API，实现安全、快速的在线支付功能</li>
              <li>优化小程序性能，提升用户加载速度和交互体验</li>
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
            湖北工业职业技术学院 - 计算机应用技术
          </h3>
          <p className="text-gray-600 mb-2">2015.09 - 2018.06</p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
