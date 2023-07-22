<script setup>
import AppHeader from "~/Layouts/AppHeader.vue";
import Hero from "~/Components/Hero.vue";
import Footer from "~/Components/Footer.vue";
</script>
<template>
    <AppHeader/>
    <section class="bg-[url('/assets/bg/hero.png')] bg-cover md:bg-center bg-left h-screen">
        <Hero/>
    </section>
    <Footer/>
    
</template>
