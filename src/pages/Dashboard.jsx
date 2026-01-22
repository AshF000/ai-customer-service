import Sidebar from "@/components/Sidebar";
import {
  BotMessageSquare,
  MessagesSquare,
  Ticket,
  TicketPlus,
} from "lucide-react";
import React from "react";

const Dashboard = () => {
  const cardDetails = [
    {
      head: "Total Chats Today",
      icon: <MessagesSquare size={18} />,
      data: 78,
    },
    {
      head: "New Tickets",
      icon: <TicketPlus size={18} />,
      data: 54,
    },
    {
      head: "Running Tickets",
      icon: <Ticket size={18} />,
      data: 9,
    },
    {
      head: "Auto Replies",
      icon: <BotMessageSquare size={18} />,
      data: 295,
    },
    {
      head: "Auto Replies",
      icon: <BotMessageSquare size={18} />,
      data: 295,
    },
    {
      head: "Auto Replies",
      icon: <BotMessageSquare size={18} />,
      data: 295,
    },
    {
      head: "Auto Replies",
      icon: <BotMessageSquare size={18} />,
      data: 295,
    },
    {
      head: "Auto Replies",
      icon: <BotMessageSquare size={18} />,
      data: 295,
    },
  ];

  const cards = cardDetails.map((c, ind) => (
    <div
      key={ind}
      className="flex flex-col justify-between bg-white dark:bg-slate-600  grow basis-40 max-w-75 p-3 rounded-md shadow-(--shadow-card) hover:shadow-(--shadow-card-hover) dark:hover:shadow-slate-50 dark:shadow-sm transition ease-linear duration-200"
    >
      <div className="flex gap-2 text-slate-400 dark:text-slate-300 items-start">
        <span className="mt-1">{c.icon}</span>
        <h2>{c.head}</h2>
      </div>
      <span className="mt-2 text-3xl text-slate-700 dark:text-slate-200 font-medium">
        {c.data}
      </span>
    </div>
  ));

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="p-4 bg-slate-200 dark:bg-slate-900 flex-1 overflow-auto">
        <div className=" bg-white dark:bg-slate-500 p-4 rounded-lg">
          <h2 className="mb-4 text-2xl dark:text-slate-50 font-medium">
            Quick Stats
          </h2>
          <div className="flex flex-wrap gap-4 justify-start">{cards}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
