import React from "react";
import classes from "./BookList.module.css";

const BookList = ({ books, onDelete }) => {
  return (
    <div>
      <div className={classes.text_block}>
      <h2 className={classes.text}>Название</h2>  
      </div>
      
        <ul className={classes.list_item}>
          {books.map((item) => (
            <div className={classes.wrapper} key={item.id}> 
              <li className={classes.list}>
                {item.name}
              </li>
                <button
                  className={classes.btns}
                  onClick={() => onDelete(item.id)}
                >
                  Удалить
                </button>
            </div>
          ))}
        </ul>
    </div>
  );
};

export default BookList;
