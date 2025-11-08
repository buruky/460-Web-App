export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-white">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-[1240px] mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Welcome to Your Next.js App
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            A modern web application built with Next.js, React, and Tailwind CSS.
            Experience professional design with glassmorphism effects and responsive layouts.
          </p>
          <button className="text-white border bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-md px-8 py-3 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-5xl font-bold text-gray-800 mb-4 text-center">
            Features
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 text-center">
            Built with modern technologies and best practices
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-xl p-10 transition-transform duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-extrabold text-gray-800 mb-4">
                Next.js
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Powerful React framework with server-side rendering and static generation for exceptional performance.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-xl p-10 transition-transform duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                </svg>
              </div>
              <h3 className="text-3xl font-extrabold text-gray-800 mb-4">
                React
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Build interactive user interfaces with component-based architecture and modern hooks.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-xl p-10 transition-transform duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-3xl font-extrabold text-gray-800 mb-4">
                Tailwind CSS
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Utility-first CSS framework for rapid development with beautiful, responsive designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-[1240px] mx-auto text-center">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-6">
            Professional Design System
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            This application follows a comprehensive design system with glassmorphism effects,
            smooth transitions, and accessible color palettes. Every element is crafted for
            both aesthetics and usability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg px-6 py-3 text-gray-700">
              Responsive Design
            </span>
            <span className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg px-6 py-3 text-gray-700">
              Accessibility First
            </span>
            <span className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg px-6 py-3 text-gray-700">
              Modern UI/UX
            </span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-slate-900 text-gray-300">
        <div className="max-w-[1240px] mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Ready to start your project?
          </p>
          <div className="space-y-2">
            <p className="text-lg">
              <span className="font-bold text-white">Email:</span>{' '}
              <span className="text-gray-300">contact@example.com</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
