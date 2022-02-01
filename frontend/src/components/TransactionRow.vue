<template>
  <tr v-on:click="redirect(transaction.id)">
    <td>{{ transaction.id }}</td>
    <td>{{ transaction.account }}</td>
    <td>{{ transaction.description }}</td>
    <td>{{ transaction.category }}</td>
    <td>{{ transaction.reference }}</td>
    <td>{{ transaction.currency }}</td>
    <td>{{ transaction.amount }}</td>
    <td>{{ transaction.status }}</td>
    <td>{{ transaction.transactionDate }}</td>
    <td>{{ transaction.createdAt }}</td>
    <td>{{ transaction.updatedAt }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    transaction: {
      id: '',
      account: '',
      description: '',
      category: '',
      reference: '',
      currency: '',
      amount: '',
      status: '',
      transactionDate: '',
      createdAt: '',
       updatedAt: '',
    }
  },
  methods: {
    redirect(id) {
      this.$router.push({ name: 'Transaction', params: { id }})
    }
  }
}
</script>

<style scoped>
  td {
    border-top: 1px solid #2c3e5046;
    border-left: 1px solid #2c3e5046;
    padding: 3px 3px;
  }
</style>
