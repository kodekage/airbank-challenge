<template>
  <div class="hello">
    <h1>{{ title }}</h1>

    <div class="dateFilter">
      Start Date <input v-model="startDate" type="date" name="startDate" value="startDate">

      End Date <input v-model="endDate" type="date" name="endDate" id="endDate">
    </div>

    <table>
      <thead>
        <th>id</th>
        <th>account</th>
        <th>description</th>
        <th>category</th>
        <th>reference</th>
        <th>currency</th>
        <th>amount</th>
        <th>status</th>
        <th>transactionDate</th>
        <th>createdAt</th>
        <th>updatedAt</th>
      </thead>

      <tbody v-for="transaction in transactions" :key="transaction.id">
        <TransactionRow :transaction="transaction" />
      </tbody>
    </table>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import TransactionRow from './TransactionRow.vue'


export default {
  name: 'Transactions',
  props: {
    title: String
  },
  components: {
    TransactionRow
  },
  data() {
    return {
      endDate: new Date(1624432198000),
      startDate: new Date(1611634711000),
    }
  },
  apollo: {
    transactions: {
      query: gql`query GetDate($startDate: Timestamp!, $endDate: Timestamp!) {
        transactions: getTransactionsRange(startDate: $startDate, endDate: $endDate){
          id,
          account,
          description,
          category,
          reference,
          currency,
          amount,
          status,
          transactionDate,
          createdAt,
          updatedAt,
        }
      }`,
      variables() { 
        return {
          startDate: this.startDate,
          endDate: this.endDate,
        }
      }
    }
  }
}
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  table {
    border: 1px solid #2c3e5046;
    margin: auto;
    padding: 0 2em;
    text-align: left;
    border-collapse: collapse;
    overflow-x: auto;
  }
  tr {
    cursor: pointer;
  }
  th {
      border-top: 1px solid #2c3e5046;
      border-left: 1px solid #2c3e5046;
      padding: 3px 3px;
  }
  .dateFilter {
    margin-bottom: 2em;
  }
</style>
