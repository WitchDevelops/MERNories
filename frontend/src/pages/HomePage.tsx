const HomePage = () => {
  return (
    <div data-theme="dracula">
      <h1 className="text-3xl font-bold text-blue-600 bg-blue-200 p-4">
        home page
      </h1>
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>
    </div>
  );
};

export default HomePage;
