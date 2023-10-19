export const Message = () => {
  const name = "Redeemer";
  const heading = "A Message";
  const padding = "px-4 mb-0";
  const flex = "d-flex align-items-center";

  if (name)
    return (
      <>
        <div className={flex}>
          <h1>{heading}</h1>
          <p className={padding}>Hello {name}</p>
        </div>
      </>
    );
  return (
    <>
      <div className={flex}>
        <h1>{heading}</h1>
        <p className={padding}>Hello world</p>
      </div>
    </>
  );
};

export default Message;
