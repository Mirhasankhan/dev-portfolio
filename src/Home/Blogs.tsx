import { useEffect, useState } from "react";

type TBlog = {
  _id: string;
  blogName: string;
  content: string;
  image: string;
};

const Blogs = () => {
  const [blogs, setBlogs] = useState<TBlog[]>([]);
  const [isExpanded] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<TBlog | null>(null);

  const renderContent = (content: string) => {
    if (content.length <= 100 || isExpanded) {
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }
    return (
      <div
        dangerouslySetInnerHTML={{ __html: content.substring(0, 100) + "..." }}
      />
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (blog: TBlog) => {
    setSelectedBlog(blog);
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
    modal?.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
    modal?.close();
  };

  useEffect(() => {
    fetch("https://portfolio-server-rosy-mu.vercel.app/api/v1/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-white pb-6 pt-12">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {blogs?.map((b: TBlog) => (
          <div
            className="flex flex-col items-start text-white border p-2 rounded-md"
            key={b._id}
          >
            <img className="w-full rounded-md h-48" src={b.image} alt="" />
            <h1 className="py-3 text-xl text-cyan-400">{b.blogName}</h1>
            {renderContent(b.content)}
            {b.content.length > 100 && !isExpanded && (
              <button
                className="text-cyan-500 mt-auto"
                onClick={() => openModal(b)}
              >
                Read Full Blog
              </button>
            )}
          </div>
        ))}

        <dialog id="my_modal_3" className="modal text-black">
          <div className="modal-box">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={closeModal}
              >
                ✕
              </button>
            </form>
            {selectedBlog && (
              <>
                <img
                  className="w-full rounded-md p-4 border-2"
                  src={selectedBlog.image}
                  alt=""
                />
                <h3 className="font-bold text-2xl pt-3">
                  {selectedBlog.blogName}
                </h3>
                <p
                  className="py-4"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                ></p>
              </>
            )}
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Blogs;
