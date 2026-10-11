# Favourite Student List 🎓

A React functional web application demonstrating **React Router**, **Global State Management with `useContext`**, and **Conditional Rendering**.

---

## 🎯 Objective

Create a Favourite Student List application using React JS that demonstrates:
- Routing between multiple pages without page reload.
- Global state management using React Context API (`createContext` & `useContext`).
- Dynamic rendering of student lists using `.map()`.
- Duplicate prevention when adding favourite students.
- Removing students from favourites and handling empty state with conditional rendering.

---

## ✅ Requirements Fulfilled

| Requirement | Implementation Detail |
| :--- | :--- |
| **Functional Application** | Built using React functional components with React Hooks (`useState`, `useContext`). |
| **React Router** | Configured routes for **Student List Page** (`/`) and **Favourite Students Page** (`/favourites`). |
| **Navigation with `<Link>`** | Used React Router `<Link>` components in the Navbar for seamless, instant page transitions without reloading. |
| **Context API (`createContext`)** | Created `StudentContext` with `StudentProvider` in `src/context/StudentContext.jsx` to manage favourites globally. |
| **State Access (`useContext`)** | Used `useContext(StudentContext)` across both pages to read and update favourite students without prop drilling. |
| **Array of Student Objects** | Student data is stored with `id`, `name`, and `rollNo` in an array of objects. |
| **Dynamic Rendering (`.map()`)** | Used `.map()` to dynamically render student cards in both All Students and Favourite Students views. |
| **Add to Favourite Button** | Each student card features an "Add to Favourite" button. |
| **Duplicate Prevention** | Checked using `favourites.some()`. Added students automatically show `"Added to Favourite"` and the button is disabled. |
| **Remove from Favourites** | A "Remove" button removes the student by `id` using array `.filter()`. |
| **Empty State Handling** | If favourites list is empty, displays the message: **`“No favourite students added yet.”`** |
| **Clean Styling** | Styled with clean, responsive, beginner-friendly CSS in `App.css`. |

---

## 📁 Project Structure

```text
Proj9-Fav-stdList/
├── public/
│   └── favicon.svg              # App favicon
├── src/
│   ├── components/
│   │   └── Navbar.jsx           # Navigation header with <Link> and active counter
│   ├── context/
│   │   └── StudentContext.jsx   # createContext and StudentProvider for global state
│   ├── pages/
│   │   ├── StudentList.jsx      # Displays all students with Add to Favourite buttons
│   │   └── FavouriteStudents.jsx# Displays favourites, Remove button & empty state
│   ├── App.css                  # Simple and clean UI styles
│   ├── App.jsx                  # Main component with Router and Routes
│   ├── index.css                # Base CSS reset
│   └── main.jsx                 # Application entry point
├── index.html                   # HTML template with page title
├── package.json                 # Project dependencies & scripts
├── README.md                    # Project documentation
└── vite.config.js               # Vite configuration
```

---

## 💡 How It Works

1. **Global State (`StudentContext.jsx`)**:
   - `students`: Array containing all initial student details (Name, Roll No, ID).
   - `favourites`: State array storing student objects added to favourites.
   - `addToFavourites(student)`: Checks if `student.id` is already in `favourites`. If not, adds the student.
   - `removeFromFavourites(id)`: Filters out the student matching the provided `id`.

2. **Student List Page (`StudentList.jsx`)**:
   - Renders each student with name and roll number.
   - Disables the button and displays `"Added to Favourite"` if the student is already in the favourites list.

3. **Favourite Students Page (`FavouriteStudents.jsx`)**:
   - Uses conditional rendering:
     - If `favourites.length === 0`: Shows `"No favourite students added yet."` with a link to browse students.
     - If students exist: Displays them with a `"Remove"` button that immediately updates state.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

### 3. Open in Browser
Visit the local server URL shown in your terminal (typically `http://localhost:5173/` or `http://localhost:5174/`).

---

## 📋 Expected Outcome Checklist

- [x] Clicking **Add to Favourite** adds the selected student to the favourite list.
- [x] Favourite students are accessible across pages using `useContext`.
- [x] Navigation between pages happens smoothly without page reload.
- [x] UI updates instantly when students are added or removed.
- [x] If no favourite students are added, displays **“No favourite students added yet.”**.
