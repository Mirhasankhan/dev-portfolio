const FullPageScroll = ({ pageLInk }: { pageLInk: string }) => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="relative rounded-lg w-full h-full overflow-hidden">
        <iframe
          src={pageLInk}
          title="Embedded Page"
          className="absolute top-0 w-full h-full transition-transform duration-1000 ease-in-out hover:translate-y-[-100%]"
          style={{ height: "500%" }}
        ></iframe>
      </div>
    </div>
  );
};

export default FullPageScroll;
