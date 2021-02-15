<template>
  <div class="home">
    <h1 class="list-title">Set Your Team</h1>
    <div class="teams-wrapper">
      <div class="team team-a">Team A</div>
      <div class="team team-b">team B</div>
      <div class="team my-team">my team</div>
    </div>
    <order :ordersList="ordersList"></order>
  </div>
</template>
<script>
import Order from "./order";
import orderMixin from "../mixins/order";

export default {
  components: {
    Order
  },
  mixins: [orderMixin]
};
</script>
<style scoped>
.list-title {
  text-align: center;
  text-transform: uppercase;
}
.teams-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
}
.teams-wrapper .team {
  color: #000;
  background-color: #ccc;
  width: 45%;
  min-height: 300px;
  margin: 10px;
}
</style>
