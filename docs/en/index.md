---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "SynopAI"
  text: "Chat Study Abroad Mate Assistant"
  tagline: ChatMate is a personal assistant dedicated to serving the international student community.
  image:
    src: /logo.png
    alt: SynopAI
  actions:
    - theme: brand
      text: Get Started
      link: /get-started
    - theme: alt
      text: Learn More
      link: /learn-more

features:
  - title: Information Gathering
    icon: 🧩
    details: A comprehensive tool for information gathering in the early stages of studying abroad. We (possibly) have all the information you can think of, and we provide you with exclusive school selection advice.
    link: /use-cases/information-gathering

  - title: Academic Tutoring
    icon: 🎯
    details: Whether it's classroom Q&A or homework tutoring during your study abroad, professional document writing, and content summarization, you can leave it all to the assistant to help you solve.
    link: /use-cases/academic-tutoring

  - title: Emotional Companion
    icon: 💞
    details: Based on fine-tuning of large language models and highly customized voice models, you can easily turn him/her/it into your virtual digital assistant. It can greatly alleviate your loneliness when you are in a foreign country.
    link: /use-cases/emotional-companion

  - title: Life Assistance
    icon: 🐠
    details: The assistant can understand the elements on your screen when you need it, helping you identify (almost) everything in photos sent by friends. Additionally (based on your class schedule), it can customize travel plans, plan routes, and more for you.
    link: /use-cases/life-assistance
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