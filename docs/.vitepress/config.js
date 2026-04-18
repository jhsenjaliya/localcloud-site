import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "LocalCloud",
  description: "Official Documentation",
  base: '/localcloud-site/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is LocalCloud?', link: '/guide/' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/YOUR_USERNAME/localcloud-site' }
    ]
  }
})
