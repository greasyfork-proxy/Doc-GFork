// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Document of Greasy Fork Proxy',
  tagline: 'Speedup for service',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://doc.greasyfork.org.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // ===== AdSense 配置 (仅保留一个位置) =====
  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3758644447684310',
      async: true,
      crossorigin: 'anonymous'
    }
    // 在这里可以添加其他全局脚本
  ],
  // =========================================

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Greasy Fork Proxy',
        logo: {
          alt: 'My Site Logo',
          src: 'img/docusaurus.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'GFork Blog', position: 'left'},
          {to: '/docs/Code-of-Conduct', label: 'Code of Conduct', position: 'left'},
          {
            href: 'https://github.com/greasyfork-proxy',
            label: 'GitHub Account',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Issues',
                href: 'https://github.com/greasyfork-proxy/GreasyFork-Mirror/issues',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GFork Blog',
                to: '/blog',
              },
              {
                label: 'Code of Conduct',
                to: 'docs/Code-of-Conduct',
              },
              {
                label: 'GitHub Account',
                href: 'https://github.com/greasyfork-proxy',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} GFork. Built with Docusaurus and Deployed by Netlify. <a href="https://www.netlify.com">This site is powered by Netlify!</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;