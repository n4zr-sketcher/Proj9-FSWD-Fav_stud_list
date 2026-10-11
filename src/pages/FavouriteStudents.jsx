import { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";

const FavouriteStudents = () => {
  // Access favourites array and remove function using useContext hook
  const { favourites, removeFromFavourites } = useContext(StudentContext);

  return (
    <div className="page-box">
      <div className="page-header">
        <h2>Favourite Students</h2>
        <p className="subtitle">Manage your selected favourite students here.</p>
      </div>

      {/* Conditional Rendering: Show message when list is empty, otherwise display students */}
      {favourites.length === 0 ? (
        <div className="empty-box">
          <p className="empty-message">No favourite students added yet.</p>
          <Link to="/" className="btn btn-secondary">
            Go to Student List
          </Link>
        </div>
      ) : (
        <div className="list-wrapper">
          {favourites.map((student, index) => (
            <div key={student.id} className="student-item fav-item">
              <div className="student-details">
                <span className="index-badge fav-badge">{index + 1}</span>
                <div>
                  <h3 className="name-text">{student.name}</h3>
                  <span className="roll-text">Roll No: {student.rollNo}</span>
                </div>
              </div>

              {/* Remove button to delete student from favourite list */}
              <button
                className="btn btn-remove"
                onClick={() => removeFromFavourites(student.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouriteStudents;
