<template>
    <div>
        <h1>Transaction Details</h1>

        <table>
            <tbody v-for="key in Object.keys(transaction)" :key="key">
                <tr>
                    <th scope="row">{{ key }}</th>
                    <td>{{ transaction[key] }}</td>
                </tr>
            </tbody>
        </table>

        <router-link to="/">View the Transactions Table</router-link>
    </div>
</template>

<script>
import gql from 'graphql-tag'


export default {
  name: 'Transaction',
  data() {
    return {
        transaction: {}
    }
  },
  apollo: {
    transaction: {
      query: gql`query GetTransaction($id: String!) {
        transaction: getTransaction(id: $id) {
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
            id: this.$route.params.id
        }
      }
    }
  }
}
</script>

<style scoped>
    table {
        border: 1px solid #2c3e5046;
        margin: 2em auto;
        padding: 0 2em;
        text-align: left;
        border-collapse: collapse;
        overflow-x: auto;
    }
    td, th {
        border-top: 1px solid #2c3e5046;
        border-left: 1px solid #2c3e5046;
        padding: 3px 10px;
    }
</style>
