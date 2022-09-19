
export const downloadMarkdownFile = async (rawMarkdown: string, fileName: string) => {
    // convert zip file to url object (for anchor tag download)
    const blob = new Blob([rawMarkdown], {
        type: 'text/plain'
    });
    const url = window.URL || window.webkitURL;
    const link = url.createObjectURL(blob);
    // generate anchor tag, click it for download and then remove it again
    const a = document.createElement('a');
    a.setAttribute('download', `${fileName}.md`);
    a.setAttribute('href', link);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

export const showUploadDialog = (): Promise<File[]> => {
    return new Promise((resolve, reject) => {
        try {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.click();
            input.onchange = (e: Event) => {
                console.debug(e)
                if (input.files) {
                    const files = Array.from(input.files);
                    resolve(files);
                }
            };
        } catch (error) {
            reject(error)
        }
    })
}

export const parseFile = (files: File[]): Promise<string> => {
    const acceptedTypes = ['md', 'text']
    return new Promise((resolve, reject) => {
        try {
            files.forEach((file: File) => {
                const fr = new FileReader();
                const extension = file.name.split('.').at(-1);
                if (!extension || !acceptedTypes.includes(extension)) {
                    reject('Not a valid file type.')
                }
                fr.onload = function () {
                    const text = fr.result?.toString() as string;
                    resolve(text);
                };
                fr.readAsText(file);
            });
        } catch (error) {
            reject(error)
        }
    })

}

export const uploadFilehandler = async (): Promise<string> => {
    const files = await showUploadDialog();
    const textFromFile = parseFile(files);
    return textFromFile;
}