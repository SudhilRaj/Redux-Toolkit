import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
   decrementCounter,
   incrementCounter,
   increment10Counter,
   incrementValueCounter,
} from "./redux/CounterSlice";
import { useState } from "react";
import { fetchUsers } from "./redux/UsersSlice";

function App() {
   const [incrementValue, setIncrementValue] = useState(100);
   const [users, setUsers] = useState([]);
   const dispatch = useDispatch();
   const count = useSelector((state) => state.counter.count);

   const getUsers = () => {
      // dispatch(fetchUsers);
      dispatch(fetchUsers())
         .unwrap()
         .then((originalPromiseResult) => {
            setUsers(originalPromiseResult);
         })
         .catch((rejectedValueOrSerializedError) => {
            console.log(rejectedValueOrSerializedError);
         });
   };

   return (
      <div className="App container">
         <h2>Counter based on state from Redux Toolkit setup</h2>
         <h3>
            <span className="badge bg-primary">Count: {count}</span>
         </h3>
         <button
            className="me-2 btn btn-sm btn-success"
            onClick={() => dispatch(incrementCounter())}
         >
            Increment
         </button>
         <button
            className="me-2 btn btn-sm btn-warning"
            onClick={() => dispatch(decrementCounter())}
         >
            Decrement
         </button>
         <button
            className="me-2 btn btn-sm btn-danger"
            onClick={() => dispatch(increment10Counter())}
         >
            Increment by 10
         </button>
         <br /> <br />
         <div className="input-group w-50 m-auto">
            <input
               type="number"
               value={incrementValue}
               onChange={(e) => setIncrementValue(e.target.value)}
               className="form-control form-control-sm"
               placeholder="Enter increment number"
               aria-label="Increment by Number"
               aria-describedby="number"
            />

            <button
               className="btn btn-outline-secondary"
               type="button"
               id="number"
               onClick={() =>
                  dispatch(incrementValueCounter(parseInt(incrementValue)))
               }
            >
               Increment by {incrementValue}
            </button>
         </div>
         <br />
         <h2>Async request handled by Redux Toolkit</h2>
         <button
            className="me-2 mt-2 btn btn-sm btn-primary"
            onClick={getUsers}
         >
            Get Users
         </button>
         {users && users.length > 0 && (
            <div className="row mt-4">
               {users.map((user) => (
                  <div
                     className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-2"
                     key={user.id}
                  >
                     <div className="card">
                        <div className="card-header">{user.website}</div>
                        <div className="card-body">
                           <h5 className="card-title">{user.name}</h5>
                           <span className="card-text">{user.phone}</span>
                           <span className="card-text">{user.email}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
}

export default App;
