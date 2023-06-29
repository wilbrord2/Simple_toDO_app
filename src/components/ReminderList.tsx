import React from "react";
import {Reminder} from "../models/reminder";
interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder:(id:number)=>void
}
function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          className="list-group-item d-flex justify-content-between"
          key={item.id}
        >
          {item.title}
          <button onClick={()=> onRemoveReminder(item.id)} className="btn btn-outline-danger mx-2">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
