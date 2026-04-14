'use client'

import { useEffect, useRef } from 'react'
import { FcKindle } from 'react-icons/fc'
import { SiAnki } from 'react-icons/si'

const PROJECTS = [
  {
    name: 'Kindle Bookshelf',
    tagline: '読んだ本の記録',
    description:
    'Kindleで読んでいる本を一覧で管理・公開しているページです。年毎に読んだ本を整理しており、いつどれくらい読んだかを可視化しています',
    url: 'https://atsuyoshi-n.github.io/bookshelf',
    tags: ['GitHub Pages'],
    icon: <FcKindle size={44} />,
    accent: 'from-cyan-400 to-blue-500',
    glow: 'rgba(34,211,238,0.15)',
  },
  {
    name: 'anki-stats',
    tagline: 'Anki 学習統計の可視化',
    description:
      'Anki の学習データをグラフで可視化したダッシュボードです。日々の復習数やカードの習熟度などを一目で把握できます。2026年4月時点では、主にワインの勉強をしています',
    url: 'https://atsuyoshi-n.github.io/anki-stats',
    tags: ['GitHub Pages'],
    icon: <SiAnki size={40} className="text-[#0a6ebd]" />,
    accent: 'from-violet-400 to-purple-500',
    glow: 'rgba(167,139,250,0.15)',
  },
]

function AnimatedSection({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: 'translateY(24px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      {children}
    </div>
  )
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0f1e] text-slate-100 overflow-hidden flex flex-col">
      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="blob absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-600" />
        <div className="blob blob-2 absolute top-1/2 -right-48 w-[600px] h-[600px] bg-cyan-500" />
        <div className="blob blob-3 absolute -bottom-32 left-1/3 w-[400px] h-[400px] bg-purple-600" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8 flex-1 flex flex-col">
        {/* Hero */}
        <section className="flex flex-col mb-8">
          <div
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              animation: 'fadeInUp 0.8s ease 0.1s forwards',
            }}
          >
            <span className="inline-block text-cyan-400 text-sm font-mono tracking-widest uppercase mb-2">
              Hello, world.
            </span>
          </div>

          <div
            style={{
              opacity: 0,
              animation: 'fadeInUp 0.8s ease 0.25s forwards',
            }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3 leading-none">
              <span className="text-gradient">Atsuyoshi-N</span>
            </h1>
          </div>

          <div
            style={{
              opacity: 0,
              animation: 'fadeInUp 0.8s ease 0.4s forwards',
            }}
          >
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mb-5 leading-relaxed">
              ソフトウェアエンジニア。
              作ったものを GitHub で公開しています。
            </p>
          </div>

          <div
            style={{
              opacity: 0,
              animation: 'fadeInUp 0.8s ease 0.55s forwards',
            }}
          >
            <a
              href="https://github.com/Atsuyoshi-N"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-sm
                         bg-white text-slate-900 hover:bg-slate-200
                         transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
            >
              <GitHubIcon />
              GitHub を見る
            </a>
          </div>
        </section>

        {/* Projects */}
        <section>
          <AnimatedSection delay={0}>
            <h2 className="text-2xl font-bold mb-1">
              <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-slate-400 text-sm mb-5">GitHub Pages で公開しているプロジェクト</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4">
            {PROJECTS.map((project, i) => (
              <AnimatedSection key={project.name} delay={i * 150}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block glass rounded-2xl p-5 card-hover h-full"
                  style={{ '--glow-color': project.glow } as React.CSSProperties}
                >
                  {/* Icon */}
                  <div className="mb-3">{project.icon}</div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-1 group-hover:text-white transition-colors">
                    {project.name}
                  </h3>
                  <p className={`text-sm font-medium mb-2 bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}>
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className={`inline-flex items-center gap-1.5 text-sm font-semibold bg-gradient-to-r ${project.accent} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
                      開く <ExternalLinkIcon />
                    </span>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Footer */}
        <AnimatedSection delay={200} className="mt-auto pt-6 border-t border-white/5 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Atsuyoshi-N &nbsp;·&nbsp;
            <a
              href="https://github.com/Atsuyoshi-N"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              GitHub
            </a>
          </p>
        </AnimatedSection>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  )
}
