type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
};

const Modal = ({ isOpen, onClose, title, content }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg w-1/2">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            &times;
          </button>
        </div>
        <div>
          <h2 className="text-xl mb-4">{title}</h2>
          <p className="mb-4">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
