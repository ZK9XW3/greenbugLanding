<script setup>
const features = [
  {
    title: "Simplicité et Efficacité",
    description:
      "Un CMS custom crée from scratch et réalisé en Symfony/Twig.",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Maintenabilité facilitée",
    description:
      "Un projet pensé pour pouvoir créer rapidement des sites simples tout en limitant le temps passé sur la maintenance.",
    icon: "bx:bxs-bot",
  },
  {
    title: "Prêt à fonctionner",
    description:
      "Des fonctionnalités prêtes à l'emploi (Galerie, Blog, Discographie, Agenda...)",
    icon: "bx:bxs-user",
  },
  {
    title: "Evolutivé",
    description:
      "Une application multi-site qui permet à tous les utilisateurs de bénéficier de chaque nouvelle fonctionnalité développée.",
    icon: "bx:bxs-window-alt",
  },
  {
    title: "Décentralisé et autonome",
    description:
      "Un projet self-hosted dans une optique de décentralisation et afin de ne pas dépendre de services tiers.",
    icon: "bx:bxs-file-find",
  },
  {
    title: "Multi-site mais indépendant",
    description:
      "Une instance front Nuxt par site. Chaque instance interroge l'API/CMS pour récupérer les données à afficher.",
    icon: "bx:bxs-data",
  },
];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Everything you need to start a website
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      Nuxt comes batteries included. It takes the best parts of state-of-the-art
      tools and adds its own innovations.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
