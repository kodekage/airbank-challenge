<template>
  <div class="home">
    <Transactions title="Transaction Table"/>
  </div>
</template>

<script>
import Transactions from '../components/Transactions.vue';

export default {
  name: 'Home',
  components: {
    Transactions
  }
}
</script>
