import {ToDoList} from './components/ToDoList'
import './App.css';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <ToDoList />
    </RecoilRoot>
  );
}

export default App;
