<template>
  <div><px-assets-table v-bind:assets="assets" /></div>
</template>

<script>
import PxAssetsTable from "@/components/PxAssetsTable";
import api from "@/api";

export default {
  components: { PxAssetsTable },
  name: "Home",
  componets: [PxAssetsTable],

  data() {
    return {
      assets: [],
    };
  },

  created() {
    api.getAssets().then((assets) => (this.assets = assets));
  },
};
</script>
