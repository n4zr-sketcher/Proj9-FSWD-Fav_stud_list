import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const StudentList = () => {
  // Access data and functions from StudentContext using useContext hook
  const { students, favourites, addToFavourites } = useContext(StudentContext);

  return (
    <div className="page-box">
      <div className="page-header">
        <h2>All Students</h2>
        <p className="subtitle">Click "Add to Favourite" to add students to your favourites list.</p>
      </div>

      <div className="list-wrapper">
        {students.map((student, index) => {
          // Check if the current student is already added to favourites
          const isFavourite = favourites.some((fav) => fav.id === student.id);

          return (
            <div key={student.id} className="student-item">
              <div className="student-details">
                <span className="index-badge">{index + 1}</span>
                <div>
                  <h3 className="name-text">{student.name}</h3>
                  <span className="roll-text">Roll No: {student.rollNo}</span>
                </div>
              </div>

              {/* Add to Favourite button - disabled if already added to avoid duplicates */}
              <button
                className={`btn ${isFavourite ? "btn-disabled" : "btn-add"}`}
                onClick={() => addToFavourites(student)}
                disabled={isFavourite}
              >
                {isFavourite ? "Added to Favourite" : "Add to Favourite"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentList;
