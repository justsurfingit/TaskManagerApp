import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
//  import { library } from "@fortawesome/fontawesome-svg-core";
//  import { fab } from "@fortawesome/free-brands-svg-icons";

//   library.add(faListUl, faCoffee);
const getLocalItems = () => {
  let l = localStorage.getItem("lists");
  if (l) {
    return JSON.parse(localStorage.getItem("lists"));
  } else return [];
};
function Listiter() {
  const arr = [];

  //   const [idx,setidx]=useState(-1);
  // this will store every thing in the local storage
  const [mult, setmult] = useState(true);
  const el = document.querySelector(".el");

  const [list, setlist] = useState(getLocalItems());
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(list));
  }, [list]);
  function removeone(idx) {
    // console.log('this is running');
    let neoarr = [];
    if (idx != -1) {
      // const neoarr=list.filter((el))
      for (let i = 0; i < list.length; i++) {
        if (i == idx) continue;
        neoarr.push(list[i]);
      }
      setlist(neoarr);
      // setidx(-1);
    }
  }
  const [toadd, settoadd] = useState(false);
  function addmore() {
    settoadd(true);
    // console.log("was clicked");
    const neolist = [...list, In];
    setlist(neolist);
    //her also it is set
    setIn("");
    // ele.val = "";
  }
  //   const showin()
  // useEffect(() => {

  // }, [toadd])

  const [In, setIn] = useState("");
  return (
    <>
      <h1 class="head-main">The Tasks to be Completed Today</h1>
      <div className="All-items">
        {list.map((something, index) => (
          <div className="task-card" style={{ margin: "2rem" }}>
            <h2 className="sub-head" style={{}}>
              {something}
            </h2>
            <button
              className="arun"
              style={{
                border: "2px solid rgb(45, 132, 166)",
                // width: '40%',
                padding: "1rem",
                fontSize: "1rem",
              }}
              onClick={() => {
                // setidx(index);
                removeone(index);
              }}
            >
              Completed
            </button>
          </div>
        ))}
      </div>
      <button
        style={{ marginBottom: "2rem" }}
        className="c-btn"
        onClick={() => {
          setlist([]);
        }}
      >
        Remove All
      </button>
      <hr />

      <div className="addmore">
        <div className="flex-btm">
          <input
            type="text"
            class="add-input"
            placeholder="Task to be done"
            value={In}
            onChange={(e) => {
              setIn(e.target.value);

              // console.log(In);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") addmore();
            }}
          />
        </div>
        <button
          type="submit"
          className="c-btn el"
          onClick={() => {
            if (In) addmore();
          }}
        >
          Add Task
        </button>
      </div>
    </>
  );
}

export default Listiter;
