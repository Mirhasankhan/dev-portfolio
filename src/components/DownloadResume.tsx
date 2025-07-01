const DownloadResume = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href =
      "https://drive.google.com/file/d/12eZbrdNq-z3frpoceNkHJaGB0lzzLPeD/view?usp=sharing";
    downloadLink.download = "MirHasanresume.pdf";

    downloadLink.click();
  };

  return (
    <button className="custom-button" onClick={handleDownload}>
      Download Resume
    </button>
  );
};

export default DownloadResume;
