const DownloadResume = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href =
      "https://drive.google.com/file/d/11RmMFHUQVidKZbAqCFgpM2qxJzf9hUhb/view?usp=sharing";
    downloadLink.download = "MirHasanresume.pdf";

    downloadLink.click();
  };

  return (
    <button className="custom-button" onClick={handleDownload}>
      WATCH RESUME
    </button>
  );
};

export default DownloadResume;
