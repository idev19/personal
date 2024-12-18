import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="space-y-8 text-center">
        <h1 className="text-4xl font-bold">欢迎访问我的个人网站</h1>
        <div className="space-x-4">
          <Link 
            href="/card" 
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            个人名片
          </Link>
          <Link 
            href="/resume" 
            className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            个人简历
          </Link>
        </div>
      </div>
    </main>
  )
}
