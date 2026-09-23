const Loading = () => {
  return (
    <>
      <div className="mt-15 grid grid-cols-1 md:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="card bg-base-100 shadow-sm">
            <div className="card-body space-y-4">
              <div className="skeleton h-6 w-3/4"></div>
              <div className="skeleton h-4 w-1/2"></div>
              <div className="skeleton h-4 w-1/3"></div>
              <div className="skeleton h-10 w-28 ml-auto"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Loading;
