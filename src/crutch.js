import React, {useState} from 'react'
import Monday from "./assets/db/Monday";
import Tuesday from "./assets/db/Tuesday";

const [monday, setMonday] = useState(Monday);
const [tuesday, setTuesday] = useState(Tuesday);
const mondayList = [...monday];
const tuesdayList = [...tuesday];


const changeMonday = (id) => {
    mondayList.forEach((todo) => {
      const current = todo.items.find((tId) => tId._id === id);
      current.isCompleted = !current.isCompleted;
    });
    setMonday(mondayList);
};

const changeTuesday = (id) => {
    tuesdayList.forEach((todo) => {
      const current = todo.items.find((tId) => tId._id === id);
      current.isCompleted = !current.isCompleted;
    });
    setMonday(mondayList);
  };

export default {changeTuesday, changeMonday}