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
  lang: 'zh_CN',
  themeHue: 250,
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',
  },
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
