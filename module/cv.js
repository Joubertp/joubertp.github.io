import {
    loadJSON,
    newHeader2,
    newHeader3,
    newHeader4,
    newParagraph
} from './core.js'

import { skill } from './skill.js'

export const cv = (() => {


    const toWrite = (contentList, mother) => {
        const skillBox = document.createElement('div')
        skillBox.className = "col-md-2 col-md-offset-1 sm-m-top-50"

        loadJSON('../text/skill.json',
            (data) => { skill.creatBox(data, skillBox) },
            (xhr) => { console.error(xhr) }
        )

        for (let i = 0; i <= contentList.length - 1; i++) {
            const section = newSectionBox(contentList[i], i)
            if(i == 0){
                section.body.appendChild(skillBox)
                section.content.className += "col-md-8"
            }
            mother.appendChild(section)
            
        }
    }


    const newSectionBox = (content, secNumber) => {
        const box = document.createElement('section')
        box.id = "section_" + secNumber
        let bgSection = (secNumber % 2 == 0) ? "white" : "grey"
        box.className = "features bg-" + bgSection + " roomy-40"

        const headerBox = newHeader2(content.title)
        const container = document.createElement('div')
        container.className = "container"
        const row = document.createElement('div')
        row.className = "row"
        const main_features = document.createElement('div')
        main_features.className = "main_features fix roomy-70"
        const contentBox = document.createElement('div')

        box.appendChild(container)
        container.appendChild(headerBox)
        container.appendChild(row)
        row.appendChild(main_features)
        main_features.appendChild(contentBox)

        for (let i = 0; i <= content.content.length - 1; i++) {
            const subtopicBox = newSubtopicBox(content.content[i])
            contentBox.appendChild(subtopicBox)
        }
        
        box.body = main_features
        box.content = contentBox

        return box
    }



    const newSubtopicBox = (content) => {
        const box = document.createElement('div')
        const header = newHeader3(content.title)
        box.appendChild(header)
        for (let i = 0; i <= content.content.length - 1; i++) {
            const descBox = newDescBox(content.content[i])
            box.appendChild(descBox)
        }
        return box
    }

    const newDescBox = (content) => {
        const box = document.createElement('div')
        const header = newHeader4(content.title)
        box.appendChild(header)
        if (content.date) {
            const date = newParagraph(content.date)
            box.appendChild(date)
        }

        const body = newParagraph(content.content)
        body.innerHTML = body.innerHTML.replace(/\n\r?/g, '<br />');
        box.appendChild(body)
        box.appendChild(document.createElement('br'))
        return box
    }

    return {
        toWrite
    }

})()