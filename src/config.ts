import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'AsOne的Blog',
  subtitle: '主页',
  lang: 'zh_CN',         // 'en', 'zh_CN', 'zh_TW', 'ja'
  themeColor: {
    hue: 250,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  },
  favicon: [    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'http://q2.qlogo.cn/headimg_dl?dst_uin=1103936078&spec=640',
  name: 'As_One',
  bio: '',
  links: [
    {
      name: 'BiliBili',
      icon: 'fa6-brands:bilibili',
      url: 'https://space.bilibili.com/259168987',
    },
    {
      name: 'Github',
      icon: 'fa6-brands:github',
      url: 'https://github.com/AsOne2020/',
    },
    {
      name: 'Gitee',
      icon: 'simple-icons:gitee',
      url: 'https://gitee.com/AsOne2048',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
