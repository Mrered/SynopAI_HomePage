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
  - title: 信息收集
    icon: 🧩
    details: 这里填写我们的功能 A
    link: /使用场景/信息收集
  - title: 课业辅导
    icon: 🎯
    details: 这里填写我们的功能 B
    link: /使用场景/课业辅导
  - title: 情感陪伴
    icon: 💞
    details: 这里填写我们的功能 C
    link: /使用场景/情感陪伴
  - title: 生活辅助
    icon: 🐠
    details: 这里填写我们的功能 D
    link: /使用场景/生活辅助
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
