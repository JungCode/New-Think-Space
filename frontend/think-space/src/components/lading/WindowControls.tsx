const WindowControls = () => (
  <div className="flex gap-1 pt-3 ps-3">
    {['bg-red-500', 'bg-yellow-500', 'bg-green-500'].map((color) => (
      <span key={color} className={`${color} h-3 w-3 rounded-full`}></span>
    ))}
  </div>
);

export default WindowControls;
