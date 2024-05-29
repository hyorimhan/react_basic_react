import { useState } from 'react';

function App() {
  const [todos, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const todoValue = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      todo: todos,
      id: new Date().getTime(),
      isDone: false,
    };
    if (todos === '') {
      alert('값을 입력해주세요');
    } else {
      setTodoList([...todoList, newTodo]);
      setTodo('');
    }
    console.log(newTodo);
  };

  const finBtn = (id) => {
    setTodoList(
      todoList.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  const delBtn = (id) => {
    const filtered = todoList.filter((item) => {
      return id !== item.id;
    });
    setTodoList(filtered);
  };

  return (
    <>
      <div>할 일 목록</div>
      <form onSubmit={onSubmit}>
        <input type="text" value={todos} onChange={todoValue} />
        <button type="submit">추가</button>
      </form>
      <div>
        <ul>
          {todoList.map((item) => {
            return (
              <li
                key={item.id}
                style={{
                  textDecoration: item.isDone ? 'line-through' : 'none',
                }}
              >
                {item.todo}
                <button onClick={() => finBtn(item.id)}>
                  {item.isDone ? '취소' : '완료'}
                </button>
                <button onClick={() => delBtn(item.id)}>삭제</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
