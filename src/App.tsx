import React, { ChangeEvent, useState } from 'react';
import styles from './assets/style/home.module.css';
import { IData } from './interface';
import { data } from './constants';

const App = (): JSX.Element => {
  const [title, setTitle] = useState<string>('');
  const [arr, setArr] = useState<IData[]>(data)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const handleSubmit = (): void => {
    if (!title?.length) return
    const newData = {
      id: new Date().getTime(),
      title: title,
      desc: 'asds'
    }
    setArr([...arr, newData])
    setTitle('')
  }

  const handleDelete = (id: number):void => {
    const newData = arr.filter((item) => item.id != id);
    setArr(newData);
  }

  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>App Todo</h1>

      <input
        type="text"
        placeholder="Enter Todo"
        value={title}
        onChange={changeHandler}
        className={styles.input}
      />
      <button className={styles.button} onClick={handleSubmit}>
        Add Todo
      </button>
      <div className={styles.card}>
        {arr.map(c => (
          <div key={c.id} className={styles.cardItem}>
            <p>{c.title}</p>
            <div className={styles.delBtn}>
              <button onClick={() => handleDelete(c.id)}>Del</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
