---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "SynopAI"
  text: "花小容AI留学助手"
  tagline: ChatMate 是一个专注服务留学生群体的私人助手
  image:
    src: /logo.png
    alt: SynopAI
  actions:
    - theme: brand
      text: 快速开始
      link: /快速开始
    - theme: alt
      text: 更多内容
      link: /更多内容

features:
  - title: 功能 A
    icon: ⚙️
    details: 这里填写我们的功能 A
    link: /快速开始
  - title: 功能 B
    icon: 🚀
    details: 这里填写我们的功能 B
  - title: 功能 C
    icon: 📦
    details: 这里填写我们的功能 C
  - title: 功能 D
    icon: 🥵
    details: 这里填写我们的功能 D
---

<!-- markdownlint-disable MD033 MD041-->

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
