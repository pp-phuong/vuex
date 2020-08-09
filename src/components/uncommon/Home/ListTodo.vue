<template>
  <div class="item">
    <div>
      <div :class="{ completed: item.completed }">
        <input
          class="mr-1 "
          type="checkbox"
          :id="item.name"
          :value="item.name"
          @click="$emit('my-todo-complete', item)"
        />
        {{ item.name }}
      </div>
    </div>
    <div>
      <button @click="$emit('my-todo-update', item)" class="mr-1 updateBtn">
        <i class="fa fa-edit "></i>
      </button>
      <button @click="$emit('my-todo-delete', item)" class="mr-1 deleteBtn">
        <i class="fa fa-minus "></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped>
button {
  color: whitesmoke;
  width: 35px;
  height: 35px;
  border: none;
  text-align: center;
  display: inline-block;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  transition: 0.2s ease-in-out;
}
button > i:hover {
  font-size: 21px;
}
.item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: aliceblue;
  padding: 10px;
  margin: 25px auto;
  width: 80%;
  text-align: center;
  font-size: 20px;
  font-family: "Titillium Web", sans-serif;
}
.item > div {
  display: flex;
  flex-direction: row;
}
.completed {
  text-decoration: line-through;
}
.mr-1 {
  margin-right: 10px;
}
.deleteBtn {
  background: rgb(231, 49, 49);
}
.updateBtn {
  background: rgb(32, 163, 113);
}
</style>
