import React, { useState, useEffect } from "react";
import classes from "./MainPage.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import BookList from "../../components/BookList/BookList";

const MainPage = () => {
  const [bookList, setBookList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addBook = () => {
    setBookList((prevState) => [
      ...prevState,
      {
        id: bookList.length === 0 ? 1 : bookList[bookList.length - 1].id + 1,
        name: inputValue,
      },
    ]);
  };

  const changeBook = (event) => {
    setInputValue(event.target.value);
  };

  const deleteBook = (id) => {
    let updateList = bookList.filter((book) => {
      return book.id !== id;
    });
    setBookList([...updateList]);
  };

  useEffect(() => {
    const myLocalStorage = JSON.parse(localStorage.getItem('books'))
    if (myLocalStorage === null) {
      return localStorage.setItem("books", JSON.stringify(bookList))
    }
    if (myLocalStorage !== 0) {
      setBookList(myLocalStorage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(bookList))
  }, [bookList])

  return (
    <>
      <svg
        width="156"
        height="107"
        viewBox="0 0 156 107"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M149 -25.5818C181.5 12.8363 91.7285 107 36.5 107C-18.7285 107 -88 49.2285 -88 -6C-88 -61.2285 -43.2285 -106 12 -106C67.2285 -106 177 -84.1637 149 -25.5818Z"
          fill="#1D2CF3"
        />
      </svg>
      <div>
        <h1 className={classes.text}>Добавить книгу</h1>
        <div className={classes.input_wrapper}>
          <Input
            value={inputValue}
            onChange={changeBook}
            placeholder={"Введите название"}
          />
          <Button label={"Добавить"} onClick={addBook} />
        </div>
        <div>
          <BookList books={bookList} onDelete={deleteBook} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
