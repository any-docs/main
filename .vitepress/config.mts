import {defineConfig, loadEnv} from 'vitepress'
import {items as HTMLSidebarItems} from "./sidebars/html";
import {items as CSSSidebarItems} from "./sidebars/css";

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
              link: '/javascript/index',
            },
            {
              text: 'HTML',
              link: '/html/index',
            },
            {
              text: 'PHP',
              link: '/php/introduction',
            },
            {
              text: 'Rust',
              link: '/rust'
            },
            {
              text: 'Zig',
              link: '/zig'
            }
          ]
        },
      ],

      sidebar: {
        '/css/': CSSSidebarItems,
        '/html/': HTMLSidebarItems,
        '/php/': [{
          text: 'PHP',
          items: [
            {text: 'Welcome to PHP', link: '/php/introduction'},
            {text: 'Installation', link: '/php/installation'},
            {text: 'Basic Syntax', link: '/php/basic-syntax'}
          ]
        }]
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/any-docs/anydocs' }
      ],
      footer: {
        copyright: 'Copyright © 2025'
      }
    },
    ignoreDeadLinks: true,
    vite: {
      server: {
        port: env.VITE_MAIN_PORT as unknown as number,
        strictPort: true
      }
    }
  })
}
