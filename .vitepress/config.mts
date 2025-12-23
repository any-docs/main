import {defineConfig, loadEnv} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default ({mode}) => {
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    srcDir: "content",

    title: "AnyDocs — Modern & Beautiful All-in-One Developer Documentation",
    description: "AnyDocs aggregates the world's most important developer documentation into one sleek, unified interface.",
    head: [
      ['link', {rel: 'icon', href: '/images/icon-512.png'}]
    ],
    themeConfig: {
      siteTitle: 'AnyDocs',
      logo: '/images/icon-512.png',
      search: {
        provider: 'local'
      },
      editLink: {
        pattern: 'https://github.com/any-docs/main/edit/main/content/:path',
        text: 'Edit this page on GitHub'
      },
      nav: [
        {
          text: 'Docs',
          items: [
            {
              text: 'CSS',
              link: env.VITE_CSS_URL,
            },
            {
              text: 'Javascript',
              link: env.VITE_JAVASCRIPT_URL,
            },
            {
              text: 'HTML',
              link: env.VITE_HTML_URL,
            },
            {
              text: 'PHP',
              link: env.VITE_PHP_URL,
            },
            {
              text: 'Rust',
              link: env.VITE_RUST_URL
            },
            {
              text: 'Zig',
              link: env.VITE_ZIG_URL
            }
          ]
        },
      ],
      socialLinks: [
        { icon: 'github', link: 'https://github.com/any-docs/anydocs' }
      ],
      footer: {
        copyright: 'Copyright © 2025'
      },
    },
    ignoreDeadLinks: true,
    vite: {
      server: {
        port: env.VITE_MAIN_PORT as unknown as number,
        strictPort: true
      }
    },
    transformPageData(pageData) {
      if (pageData.frontmatter.features) {
        pageData.frontmatter.features = pageData.frontmatter.features.map(feature => {
          let link = feature.link

          if (link === 'CSS_URL') {
            link = env.VITE_CSS_URL
          }

          if (link === 'JAVASCRIPT_URL') {
            link = env.VITE_JAVASCRIPT_URL
          }

          if (link === 'HTML_URL') {
            link = env.VITE_HTML_URL
          }

          if (link === 'PHP_URL') {
            link = env.VITE_PHP_URL
          }

          if (link === 'ZIG_URL') {
            link = env.VITE_ZIG_URL
          }

          if (link === 'RUST_URL') {
            link = env.VITE_RUST_URL
          }

          return {
            ...feature,
            link
          }
        })
      }
    }
  })
}
