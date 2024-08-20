<template>
  <section class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">

    <div class="p-12 md:p-24 md:block">
      <img
        class="rounded-full transition-transform transform md:max-h-96 md:max-w-96 md:blur-sm hover:blur-none hover:scale-105"
        src="../../assets/img/profile-gh.jfif"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
        Qui suis-je ?
      </h2>
      <p class="mt-4 text-slate-500 max-w-xl">
        Passioné par le monde de la culture, régisseur son et musicien pendant plus de 10 ans, j'ai décidé de me reconvertir dans le développement web en 2021.
        A présent en poste depuis bientôt 3 ans en tant que développeur web fullstack j'ai eu l'envie de mener un projet personnel qui me tient à coeur.
      </p>
      <p class="mt-4 text-slate-500 max-w-xl">
        Le CMS répond à un besoin qu'on les structures associatives d'être visibles sur le web tout en ayant un budget parfois très limité.
        J'ai crée digitalgreenbug avec comme but de répondre à ce besoin tout en créant une application qui me reclamerait peu de temps de maintenance étant en poste à temps plein.
      </p>
      <p class="mt-4 text-slate-500 max-w-xl">
        Passionné par le developpement je partage également mon temps libre entre du temps de montée en compétences sur différents sujets (Software Craftsmanship, Design Pattern, Clean Archi, Hexagonal) et la création de projets personnels.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="https://www.linkedin.com/in/pa-dhery/"
          target="_blank"
          rel="noopener"
          >Mon Linkedin</LandingLink
        >
        <LandingLink
          size="lg"
          styleName="outline"
          rel="noopener"
          href="https://github.com/ZK9XW3"
          target="_blank"
          >Mes repo Github</LandingLink
        >
      </div>
    </div>
  </section>
</template>
<script setup>
</script>