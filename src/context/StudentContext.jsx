import { createContext, useState } from "react";

// 1. Create the Student Context
export const StudentContext = createContext();

// 2. Create the Context Provider Component
export const StudentProvider = ({ children }) => {
  // Array of student objects
  const [students] = useState([
    { id: 1, name: "Bharath", rollNo: "101" },
    { id: 2, name: "Praveen", rollNo: "102" },
    { id: 3, name: "Kumar", rollNo: "103" },
    { id: 4, name: "Ramya", rollNo: "104" },
    { id: 5, name: "Monica", rollNo: "105" },
    { id: 6, name: "Suresh", rollNo: "106" },
  ]);

  // State to store favourite students list globally
  const [favourites, setFavourites] = useState([]);

  // Function to add a student to favourites (prevents duplicate entries)
  const addToFavourites = (student) => {
    const isAlreadyPresent = favourites.some((item) => item.id === student.id);
    if (!isAlreadyPresent) {
      setFavourites([...favourites, student]);
    }
  };

  // Function to remove a student from favourites list by id
  const removeFromFavourites = (id) => {
    const updatedList = favourites.filter((student) => student.id !== id);
    setFavourites(updatedList);
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        favourites,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
