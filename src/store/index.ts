import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        list: [
            {
                name: "Do homework ( Vue X )",
                completed: false,
            },
            {
                name: "Learn some CSS Trick",
                completed: false,
            },
            {
                name: "Do homework ( English Task 8 )",
                completed: false,
            },
        ],
        isEditing: false,
        editingTodo: {}
    },
    mutations: {
        ADD_TODO(state, item) {
            state.list.push(item);
        },
        UPDATE_TODO(state, newTodo) {
            const todoId = state.list.findIndex((item) => {
                return item == state.editingTodo;
            });
            state.list[todoId] = newTodo;
        },
        SET_EDITING(state, editing) {
            state.editingTodo = editing;
        },
        TOGGLE_EDIT_STATE(state) {
            state.isEditing = !state.isEditing;
        },
        TOGGLE_COMPLETE_STATE(state, item) {
            const completedId = state.list.findIndex((completedTodo) => {
                return completedTodo == item;
            });
            state.list[completedId].completed = !state.list[completedId]
                .completed;
        },
        REMOVE_TODO(state, item) {
            state.list = state.list.filter((todo) => {
                return todo !== item;
            });
        }
    },
    actions: {},
    modules: {},
});
