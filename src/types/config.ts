import type Giscus from 'giscus'

export type SiteConfig = {
  title: string
  subtitle: string

  lang: string

  themeHue: number
  banner: {
    enable: boolean
    src: string
  }
}

export enum LinkPreset {
  Home = 0,
  Archive = 1,
  About = 2,
}

export type NavBarLink = {
  name: string
  url: string
  external?: boolean
}

export type NavBarConfig = {
  links: (NavBarLink | LinkPreset)[]
}

export type ProfileConfig = {
  avatar?: string
  name: string
  bio?: string
  links: {
    name: string
    url: string
    icon: string
  }[]
}

export type LicenseConfig = {
  enable: boolean
  name: string
  url: string
}

export type CommentConfig = {
  twikoo?: TwikooConfig
  disqus?: DisqusConfig
  giscus?: GiscusConfig
}

type TwikooConfig = {
  envId: string
  region?: string
  lang?: string
}

type DisqusConfig = {
  shortname: string
}

type GiscusConfig = {
  repo: Giscus.Repo
  repoId?: string
  category?: string
  categoryId?: string
  mapping?: Giscus.Mapping
  term?: string
  strict: Giscus.BooleanString
  reactionsEnabled: Giscus.BooleanString
  emitMetadata: Giscus.BooleanString
  inputPosition: Giscus.InputPosition
  theme: Giscus.Theme
  lang: Giscus.AvailableLanguage
  loading: Giscus.Loading
}
