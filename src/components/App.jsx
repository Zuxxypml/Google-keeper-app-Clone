import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import useFetch from "../Hook/useFetch";

function App() {
  const {
    data: notes,
    isPending,
    error,
  } = useFetch("http://localhost:88/notes");
  return (
    <div>
      <Header />
      <CreateArea />
      {Error && error}
      {isPending && <div>Loading .....</div>}
      {notes &&
        notes.map((note) => {
          return (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
            />
          );
        })}

      <Footer />
    </div>
  );
}

export default App;
