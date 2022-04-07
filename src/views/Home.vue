
<script setup>

</script>
<template>
<div class="bg-black relative min-h-screen">
    <section class="flex flex-col md:flex-row justify-center items-center pt-40 gap-6 px-8 max-w-[1400px] mx-auto">
      <div class="brand group">
        <img src="../assets/disney.png" layout="fill" objectFit="cover" />
             <video  loop autoplay playsInline class="hidden group-hover:inline rounded-lg object-cover absolute">
          <source src="../assets/disney.mp4" type="video/mp4" />
        </video>
      </div>

      <div class="brand group">
        <img src="../assets/pixar.png" layout="fill" objectFit="cover" />
        <video  loop autoplay playsInline class="hidden group-hover:inline rounded-lg object-cover absolute">
          <source src="../assets/pixar.mp4" type="video/mp4" />
        </video>
      </div>

      <div class="brand group">
        <img src="../assets/marvel.png" layout="fill" objectFit="cover" />
        <video
           loop autoplay playsInline
          class="hidden group-hover:inline rounded-lg object-cover absolute"
        >
          <source src="../assets/marvel.mp4" type="video/mp4" />
        </video>
      </div>

      <div class="brand group">
        <img src="../assets/starwars.png" layout="fill" objectFit="cover" />
        <video
           loop autoplay playsInline
          class="hidden group-hover:inline rounded-lg object-cover absolute"
        >
          <source src="../assets/star-wars.mp4" type="video/mp4" />
        </video>
      </div>

      <div class="brand group">
        <img
          src="../assets/national-geographic.png"
          layout="fill"
          objectFit="cover"
          class="absolute"
        />
        <video
           loop autoplay playsInline
          class="hidden group-hover:inline rounded-lg object-cover absolute"
        >
          <source src="../assets/national-geographic.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
</div>
</template>