import { TodoItem } from "@/types/TodoItem";

type AddAction = {
    type: 'add';
    payload: {
        text: string;
    }
}

type EditTextAction = {
    type: 'editText';
    payload: {
        id: number;
        newText: string;
    }
}

type ToggleDoneAction = {
    type: 'toggleDone';
    payload: {
        id: number;
    }
}

type RemoveAction = {
    type: 'remove';
    payload: {
        id: number;
    }
}

type ListActions = AddAction | EditTextAction | ToggleDoneAction | RemoveAction;

export const todoListReducer = (list: TodoItem[], action: ListActions): TodoItem[] => {
    switch (action.type) {
        case 'add':
            return [...list, {
                id: list.length,
                label: action.payload.text,
                checked: false
            }];

        case 'editText':
            return list.map(t => {
                if (t.id === action.payload.id) {
                    t.label = action.payload.newText;
                }
                return t;
            });

        case 'toggleDone':
            return list.map(t => {
                if (t.id === action.payload.id) {
                    t.checked = !t.checked;
                }
                return t;
            });

        case 'remove':
            return list.filter(t => t.id !== action.payload.id);
        default:
            return list;
    }
}