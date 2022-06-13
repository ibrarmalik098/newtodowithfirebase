import { ref } from "firebase/database";
import React from "react";
import { useState } from "react";
import { sendData } from "./firebase/firebasemethod";
import { getDatabase, set, onValue } from "firebase/database";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../src/App.css'
import Typography from "@mui/material/Typography";





const App = () => {


  const db = getDatabase();

  const [inpData, setinpData] = useState("");
  const [Items, setItems] = useState([]);

  const adData = () => {

    // send items===========

    if (!inpData) {
    } else {
      setItems([...Items, inpData]);
      setinpData("");
    }
    set(ref(db, "/todo"), Items);

    // send items===========
    // get Items ================
    let arrr = []
    const dbRef = ref(db, "/todo");
    onValue(
      dbRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();
          arrr.push(childData);
          console.log(arrr);
          return arrr

          // ...
        });
      },

      {
        onlyOnce: false,
      }
    );
    // get Items ================

  };
  const deleteItem = (id) => {
    console.log(id);
    const upItemssData = Items.filter((element, index) => {
      return index !== id;
    });
    setItems(upItemssData);
  };

  const removeData = () => {
    setItems([]);
  };

  return (
    <>
      <Box className="todoaling">
        <Box className="child">
          <Typography sx={{fontSize: '2.4rem',fontFamily: '-apple-system'}} > TODO APP</Typography>


          <Box>

            <TextField
              value={inpData}
              onChange={(e) => setinpData(e.target.value)}
              type="text"
              id="outlined-basic" label="Enter Your Data" variant="outlined" />

            <Box marginTop={2} >
              <Button sx={{marginRight:1}} onClick={adData} variant="contained" endIcon={<SendIcon />}>
                Submit Data
              </Button>
              <Button onClick={removeData} variant="outlined" color="error">
                Delete All Data
              </Button>
            </Box>
          </Box>
          <Box>
            <ol>
              {Items.map((element, index) => {
                return (
                  <>
                    <li className="nodeChild" key={index}>
                      {element}{" "}
                      <Button sx={{marginTop:1}} onClick={() => deleteItem(index)} variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                      </Button>
                    </li>
                  </>

                );
              })}
            </ol>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default App;
