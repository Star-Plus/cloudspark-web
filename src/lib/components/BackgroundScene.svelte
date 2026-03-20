<script lang="ts">
  import GrainNoiseBackground from '$lib/components/GrainNoiseBackground.svelte';
  import OrbitCenterpiece from '$lib/components/OrbitCenterpiece.svelte';

</script>

<div class="bg">
  <GrainNoiseBackground />
  <OrbitCenterpiece />
</div>

<style>
  .bg {
    position: absolute;
    inset: 0;
    z-index: 10;
  }
</style>