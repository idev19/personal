import React from 'react';
import {
  MapPin,
  Briefcase,
  Award,
  Layout,
  Book,
  Coffee,
  Heart,
} from 'lucide-react';

export default function PersonalCard() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <div className="flex items-start gap-4">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-white">
              <Layout size={40} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">杨会</h1>
              <div className="flex items-center mt-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span>广东</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                  Layout工程师
                </span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                  PCB设计
                </span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                  电子工程师
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Focus */}
        <div className="p-6 bg-blue-50">
          <div className="flex items-center gap-2 text-blue-600 mb-2">
            <Briefcase className="w-5 h-5" />
            <h2 className="font-semibold">近期关键投入</h2>
          </div>
          <p className="text-gray-700">
            专注于电路板Layout设计与PCB工艺优化，致力于高质量电子产品的开发与创新
          </p>
        </div>

        {/* Highlights */}
        <div className="p-6 border-b">
          <div className="flex items-center gap-2 text-blue-600 mb-3">
            <Award className="w-5 h-5" />
            <h2 className="font-semibold">履历亮点</h2>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>
              • 精通Cadence Allegro等专业PCB设计工具，具备完整的PCB设计流程经验
            </li>
            <li>• 拥有电子竞赛获奖经历，具备良好的问题解决能力</li>
            <li>• 在PCB制造工艺和DFM优化方面有丰富经验</li>
          </ul>
        </div>

        {/* Expertise */}
        <div className="p-6 grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2 text-blue-600 mb-3">
              <Book className="w-5 h-5" />
              <h2 className="font-semibold">擅长领域</h2>
            </div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-700">PCB设计</h3>
            <p className="text-sm text-gray-600 mt-1">
              专业的Layout设计与优化能力
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-medium text-green-700">工艺管理</h3>
            <p className="text-sm text-gray-600 mt-1">
              深入理解PCB制造工艺要求
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-medium text-purple-700">文档管理</h3>
            <p className="text-sm text-gray-600 mt-1">规范的技术文档编制能力</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <h3 className="font-medium text-orange-700">团队协作</h3>
            <p className="text-sm text-gray-600 mt-1">出色的沟通与协调能力</p>
          </div>
        </div>

        {/* Interests */}
        <div className="p-6 bg-gray-50">
          <div className="flex items-center gap-2 text-blue-600 mb-3">
            <Heart className="w-5 h-5" />
            <h2 className="font-semibold">兴趣爱好</h2>
          </div>
          <div className="flex gap-4 text-gray-700">
            <span>💻 电子设计</span>
            <span>🎮 电子竞技</span>
            <span>📚 技术研究</span>
            <span>🤝 团队协作</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t">
          <p className="text-center text-gray-600 italic">
            "追求专业，持续创新，以工匠精神打造精品"
          </p>
        </div>
      </div>
    </div>
  );
}
