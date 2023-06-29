import React, { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import reminderService from "./services/reminder";
import NewReminder from "./components/NewReminder";
import { Reminder } from "./models/reminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const removeReminder = (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const addReminder = async (title: string) => {
    const newAddedReminder = await reminderService.addReminder(title);
    console.log(newAddedReminder);
    if (newAddedReminder) {
      setReminders([newAddedReminder, ...reminders]);
    }
  };

  const loadReminders = async () => {
    const reminderList = await reminderService.getReminders();
    if (reminderList) {
      setReminders(reminderList);
    }
  };

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
