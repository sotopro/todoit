import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodosReducer: (state, action) => {
            state.todos = action.payload;
            console.warn(state.todos);
        },
        addtodosReducer: (state, action) => {
            state.todos.push(action.payload);
        },
        hideCompletedReducer: (state, action) => {
            state.todos = state.todos.filter(todo => !todo.completed);
        },
        updateTodosReducer: (state, action) => {
            state.todos = state.todos.map(todo => {
                if(todo.id === action.payload.id) {
                    todo.isCompleted = !todo.isCompleted;
                }
                return todo;
            });
        },
        deleteTodosReducer: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        }
    }
});

export const {
    setTodosReducer,
    addtodosReducer,
    hideCompletedReducer,
    updateTodosReducer,
    deleteTodosReducer
} = todosSlice.actions;

export default todosSlice.reducer;