import * as React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filteredTodoListState } from "../selectors";
import { TodoItemCreator } from "./ToDoItemCreator";
import { TodoListItem } from "./ToDoListItem";
import { TodoListStats } from "./ToDoListStats";
import { TodoListFilters } from "./ToDoListFilters";
import { RecycleBinList } from "./RecycleBinList";
import { CreateDispatcher, Dispatcher } from "../dispatcher";
import { dispatcherState } from "../atoms";
import { Log } from "./Log";

export const ToDoList = () => {
    const todoList = useRecoilValue(filteredTodoListState);
    const setDispatcher = useSetRecoilState(dispatcherState);

    const dispatcherRef = React.useRef<Dispatcher>(CreateDispatcher());
    React.useEffect(() => {
      setDispatcher(dispatcherRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
          <TodoListStats />
          <TodoListFilters />
          <TodoItemCreator />
    
          {todoList.map((todoItem) => (
            <TodoListItem key={todoItem.id} item={todoItem} />
          ))}

          <hr/>
          <RecycleBinList />

          <hr/>
          <Log />
        </>
      );
};
