import {
    newHeader4,
    newHeader5,
    newHeader6,
    newParagraph} from './core.js'


export const cv = (() => {

    const newMainTextBox = (contentList,mother) =>{
        const box = document.createElement('div')
        for(let i = 0; i <= contentList.length-1 ; i++){
            const content = newTopicBox(contentList[i])
            box.appendChild(content)
        }        
        mother.appendChild(box)
    }


    const newTopicBox = (content) =>{
        const box = document.createElement('div')        
        const header = newHeader4(content.title)
        box.appendChild(header)
        for(let i = 0; i <= content.content.length-1 ; i++){
            const subtopicBox = newSubtopicBox(content.content[i])
            box.appendChild(subtopicBox)
        }       
        return box
    }

    const newSubtopicBox = (content) =>{
        const box = document.createElement('div')        
        const header = newHeader5(content.title)
        box.appendChild(header)
        for(let i = 0; i <= content.content.length-1 ; i++){
            const descBox = newDescBox(content.content[i])
            box.appendChild(descBox)
        }
        return box
    }

    const newDescBox = (content) =>{
        const box = document.createElement('div')        
        const header = newHeader6(content.title)
        box.appendChild(header)
        if(content.date){
           const date = newParagraph(content.date)
           box.appendChild(date)
        }
        const body = newParagraph(content.content)
        box.appendChild(body)
        return box
    }

    return {
        newMainTextBox
    }

})()