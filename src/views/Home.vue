<template>
  <div class="home">
    <h1>Todo List</h1>
    <!-- create -->
    <div v-if="!isEditing">
      <input
        class="mr-1 markCompleted"
        type="text"
        v-model="newTodo"
        placeholder="What needs to be done?"
      />
      <button @click="addTodo">
        <i class="fa fa-angle-right"></i>
      </button>
    </div>
    <!-- update -->
    <div v-if="isEditing" class="mt-1 updateBox">
      <input
        type="text"
        :placeholder="editingTodo.name"
        v-model="editTodo"
        class="mr-1 "
      />
      <button class="mr-1 updateBtn button" @click="onUpdate">
        <i class="fa fa-check" aria-hidden="true"></i>
      </button>
      <button class="cancelBtn button" @click="cancelUpdate">
        <i class="fa fa-close"></i>
      </button>
    </div>
    <!-- read  & delete -->
    <listTodo
      @my-todo-delete="onDelete"
      @my-todo-update="onEdit"
      @my-todo-complete="completedTodo"
      v-for="(item, index) in list"
      :key="'item-' + index"
      :item="item"
    />
  </div>
</template>

<script>
import { ListTodo } from "@/components/uncommon/Home";
import { mapState, mapMutations } from "vuex";
import { rootMutations } from "../constants/vuex/";
export default {
  name: "Home",
  components: {
    ListTodo
  },
  data() {
    return {
      newTodo: "",
      editTodo: ""
    };
  },
  methods: {
    ...mapMutations([
      rootMutations.ADD.TODO,
      rootMutations.TOGGLE.EDIT_STATE,
      rootMutations.TOGGLE.COMPLETE_STATE,
      rootMutations.SET.EDITING,
      rootMutations.REMOVE.TODO,
      rootMutations.UPDATE.TODO
    ]),
    addTodo() {
      this.ADD_TODO({
        name: this.newTodo
      });
      this.newTodo = "";
    },
    onEdit(item) {
      this.TOGGLE_EDIT_STATE();
      this.SET_EDITING(item);
      this.editTodo = item.name;
    },
    onUpdate() {
      this.UPDATE_TODO({
        name: this.editTodo
      });
      this.TOGGLE_EDIT_STATE();
    },
    onDelete(item) {
      this.REMOVE_TODO(item);
    },
    completedTodo(item) {
      this.TOGGLE_COMPLETE_STATE(item);
    },
    cancelUpdate() {
      this.TOGGLE_EDIT_STATE();
    }
  },
  computed: {
    ...mapState({
      list: state => state.list,
      isEditing: state => state.isEditing,
      editingTodo: state => state.editingTodo
    })
  }
};
</script>
<style scoped>
h1 {
  font-family: "Concert One", cursive;
}
.home {
  width: 50%;
  padding: 30px 30px 60px 30px;
  border: 2px solid rgb(12, 56, 7);
  margin: auto;
  border-radius: 5px;
}
.mr-1 {
  margin-right: 10px;
}
.mt-1 {
  margin-top: 10px;
}
input {
  width: 60%;
  height: 40px;
  text-align: left;
  display: inline-block;
  font-size: 18px;
  border: none;
  border-bottom: 2px solid rgb(37, 197, 136);
  outline: none;
  transition: 0.3s ease-in-out;
}
input:focus {
  border-bottom: 2px solid rgb(32, 163, 113);
}
.markCompleted:checked {
  background: rgb(32, 163, 113);
}
button {
  width: 40px;
  height: 40px;
  border: none;
  text-align: center;
  display: inline-block;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  color: rgb(32, 163, 113);
  transition: 0.2s ease-in-out;
}
button:hover {
  color: aliceblue;
  background: rgb(32, 163, 113);
}

.updateBtn:hover {
  color: white;
  background: rgb(32, 163, 113);
}
.cancelBtn:hover {
  color: white;
  background: rgb(231, 49, 49);
}
</style>
