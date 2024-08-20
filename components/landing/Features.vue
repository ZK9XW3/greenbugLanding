<script setup>
const features = [
  {
    title: "Maintenabilité facilitée",
    description:
      "Un projet pensé pour pouvoir créer rapidement des sites simples tout en limitant le temps passé sur la maintenance.",
    icon: "mdi:cog",
  },
  {
    title: "Prêt à fonctionner",
    description:
      "Des fonctionnalités prêtes à l'emploi (Galerie, Blog, Discographie, Agenda...)",
    icon: "mdi:check-circle",
  },
  {
    title: "Evolutivé",
    description:
      "Une application multi-site qui permet à tous les utilisateurs de bénéficier de chaque nouvelle fonctionnalité développée.",
    icon: "mdi:application-brackets",
  },
  {
    title: "Multi-site mais indépendant",
    description:
      "Une instance front Nuxt par site. Chaque instance interroge l'API/CMS pour récupérer les données à afficher.",
    icon: "mdi:database",
  },
  {
    title: "Décentralisé et autonome",
    description:
      "Un projet self-hosted dans une optique de décentralisation et afin de ne pas dépendre de services tiers.",
    icon: "mdi:web",
  },
  {
    title: "Une pincée d'eco-conception",
    description:
      "Une approche minimaliste pour limiter l'impact écologique de l'application.",
    icon: "mdi:flower",
  },
];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Un CMS custom crée from scratch
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      Réalisé en Symfony/Nuxt Digital<span class="text-primaryColor">GreenBug</span> propose un outil simple et efficace pour gérer le contenu de votre site web.
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
