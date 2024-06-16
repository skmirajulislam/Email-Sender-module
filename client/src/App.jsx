//importing the usestate and useffect from react to get the value of input fields and display the values in buttons and other componenets
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

//the main export componenet
function App() {
  //using use state to set the value of input fields and initial values of some componenet and also get values dinamically
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [numOfDoc, setNumOfDoc] = useState(0); // State to store the number of documents

  //this use effect will be fetching the number of users
  useEffect(() => {
    // Fetch the number of documents when the component mounts
    getDoc();
  }, []);

  //this async function will be responsible for getting the response data that will be sent from the server which is ofc the number of users saved in the environmental variable
  const getDoc = async () => {
    try {
      //sending the get request to the server
      const response = await axios.get("https://journeysupportapi-production.up.railway.app");
      setNumOfDoc(response.data); // Set the number of documents in state
    } catch (error) {
      //basic error handling
      console.log(error);
    }
  };

  //submit handling function of the email's subject and body
  const handleEmailSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    alert(`Email has been sent to ${numOfDoc} users.`);

    // basic validation check to ensure both subject and text fields are filled
    if (!subject || !text) {
      alert("All fields must be filled.");
      return;
    }

    //if the input vields are filled try this
    try {
      const response = await axios.post("https://journeysupportapi-production.up.railway.app", {
        subject,
        text
      });
      console.log(response.data);
      alert("Email sent successfully!");
      //basic error handling
    } catch (error) {
      console.log("Signup failed:", error);
    }
  };

  //rendering of the ui
  return (
    //used bootstrap classes
    <div className="card m-4" style={{ maxWidth: "50rem", width: "90%" }}>
  <div className="card-body">
    <h2>Journey Cuisine Support</h2>
    <hr />
    <textarea
      className="form-control ml-2"
      placeholder="Enter subject here"
      aria-label="Subject input"
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
    />
    <textarea
      className="form-control form-control-lg ml-2"
      id={"bodytextarea"}
      placeholder="Enter body here"
      aria-label="Body input"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <button onClick={handleEmailSubmit} className="btn btn-success mt-4">
      Send Email to {numOfDoc} Admins
    </button>
  </div>
</div>

  );
}

//exporting the functional component to be used in the main.jsx where we manipulate the dom
export default App;
