export function downloadFile(fileCreator: Blob | (() => Blob), fileName: string): void {
    const blob = (typeof fileCreator === "function") ? fileCreator() : fileCreator;
    const fileDownloadURL = URL.createObjectURL(blob);
    let tempLink = document.createElement("a")
    tempLink.href = fileDownloadURL;
    tempLink.setAttribute("download", fileName)
    tempLink.setAttribute("target", "_blank")
    tempLink.click()
    tempLink.remove()
}

export function uploadSingleFile(uploadHandler: (file: File, fr: FileReader) => void, acceptExts?: string[]): void {
    const fileSelector = document.createElement("input");
    fileSelector.setAttribute("type", "file")
    fileSelector.setAttribute("accept", acceptExts ? acceptExts.map(v => `.${v}`).join(",") : "")
    fileSelector.click()
    fileSelector.addEventListener("change", event => {
        if (fileSelector.files && fileSelector.files.length >= 1) {
            let file = fileSelector.files![0], fr = new FileReader();
            let fileExt = file.name.match(/\.([^.]+)$/)![1];
            let acceptFile = acceptExts ? acceptExts.includes(fileExt) : true;
            if (acceptFile)
                uploadHandler(file, fr)
        }
    })
}