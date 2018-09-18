

export const core = (() => {

    const insertNewSpan = (box, content) => {
        const span = newSpan(content)
        box.appendChild(span)
    }

    const newSpan = (content) => {
        const span = document.createElement('span')
        span.textContent = content

        return span
    }

    const newButton = (label, afunction) => {
        const button = document.createElement('button')
        button.textContent = label
        button.onclick = afunction
        return button
    }

    const heloInConsole = () => {
        console.log("Salut le monde !")
    }

    const newHeader4 = (content) => {
        const header = document.createElement('h4')
        header.textContent = content

        return header
    }

    const newHeader5 = (content) => {
        const header = document.createElement('h5')
        header.textContent = content

        return header
    }

    const newHeader6 = (content) => {
        const header = document.createElement('h5')
        header.textContent = content

        return header
    }

    const newParagraph = (content) => {
        const paragraph = document.createElement('p')
        paragraph.textContent = content

        return paragraph
    }

    const loadJSON = (path, success, error) => {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    if (success)
                        success(JSON.parse(xhr.responseText));
                } else {
                    if (error)
                        error(xhr);
                }
            }
        };
        xhr.open("GET", path, true);
        xhr.send();
    }

    return {
        heloInConsole,
        newButton,
        insertNewSpan,
        newHeader4,
        newHeader5,
        newHeader6,
        newParagraph,
        loadJSON
    }

})()

export const heloInConsole = core.heloInConsole
export const newButton = core.newButton
export const insertNewSpan = core.insertNewSpan
export const newHeader4 = core.newHeader4
export const newHeader5 = core.newHeader5
export const newHeader6 = core.newHeader6
export const newParagraph = core.newParagraph
export const loadJSON = core.loadJSON