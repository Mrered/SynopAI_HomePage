---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "SynopAI"
  text: "花小容AI留学助手"
  tagline: 一个专注服务留学生群体的私人助手
  image:
    src: /logo.png
    alt: SynopAI
  actions:
    - theme: brand
      text: 快速开始
      link: /get-started
    - theme: alt
      text: 更多内容
      link: /learn-more

features:
  - title: 信息收集
    icon: 🧩
    details: 留学前期全方位的信息收集工具，你能想到的信息我们（可能）应有尽有，同时为你提供专属的留学择校建议。
    link: /usage/information-gathering

  - title: 课业辅导
    icon: 🎯
    details: 留学过程中不论是课堂答疑还是课后的作业辅导，专业文档撰写以及文档内容总结等，统统都可以交给助手来帮你解决。
    link: /usage/academic-tutoring

  - title: 情感陪伴
    icon: 💞
    details: 基于大语言模型的微调及高度定制化的语音模型，你可以轻松的将你想要他/她/它变成你的虚拟数字人助手。可以极大地缓解你身处异国他乡的孤独情绪。
    link: /usage/emotional-companionship

  - title: 生活辅助
    icon: 🐠
    details: 助手可以在你需要的时候理解你屏幕上的元素，帮你识别朋友发来照片中（几乎）一切的内容。此外（可以基于你的课程表），为你定制专属旅行计划，规划路线等。
    link: /usage/life-assistance
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
