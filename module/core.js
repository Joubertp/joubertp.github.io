

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

    const newHeader2 = (content) => {
        const headerBox = document.createElement('div')
        headerBox.className = "head_title"
        const header = document.createElement('h2')
        header.className = "text-uppercase"
        header.style = "font-weight:bold"
        header.textContent = content

        headerBox.appendChild(header)
        headerBox.header = header

        return headerBox
    }

    const newHeader3 = (content) => {
        const header = document.createElement('h5')
        header.textContent = content
        header.className = "text-uppercase"
        header.style.cssText = "text-decoration: underline; font-weight:bold;"

        return header
    }

    const newHeader4 = (content) => {
        const header = document.createElement('h6')
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

    const foldableButton = () => {
        const button = document.createElement('img')

    }

    return {
        heloInConsole,
        newButton,
        insertNewSpan,
        newHeader2,
        newHeader3,
        newHeader4,
        newParagraph,
        loadJSON
    }

})()

export const heloInConsole = core.heloInConsole
export const newButton = core.newButton
export const insertNewSpan = core.insertNewSpan
export const newHeader2 = core.newHeader2
export const newHeader3 = core.newHeader3
export const newHeader4 = core.newHeader4
export const newParagraph = core.newParagraph
export const loadJSON = core.loadJSON