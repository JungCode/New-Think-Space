// const events = [
//   {
//     name: "Event 1",
//     date: "2023-11-01",
//     description: "Description for event 1.",
//   },
//   {
//     name: "Event 2",
//     date: "2023-11-15",
//     description: "Description for event 2.",
//   },
//   {
//     name: "Event 3",
//     date: "2023-12-01",
//     description: "Description for event 3.",
//   },
// ];

const UpcomingEvents = () => {
  return (
    <div className="rounded-lg overflow-hidden">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=956e9f63a01a6610e6b3fe9b772be62b807de1613b0b7df7623ce6a5d84aa2af%40group.calendar.google.com&ctz=Asia%2FHo_Chi_Minh"
        className="w-full min-h-[800px]"
      ></iframe>
    </div>
  );
};

export default UpcomingEvents;
