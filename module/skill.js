

export const skill = (()=>{

    const newSkillBox = (content) => {
        const box = document.createElement('div')
        box.className = "teamskillbar clearfix m-top-50 text-uppercase"
        //box.data.percent = content.width+"%;"
        const label = document.createElement('label')
        label.textContent = content.label
        const skillBar = document.createElement('div')
        skillBar.className = "teamskillbar-bar"
        skillBar.style = "width: "+content.width+"%;"

        box.appendChild(label)
        box.appendChild(skillBar)

        return box
    }

    const creatBox = (skillList,mother) => {

        for(let i=0; i <skillList.length; i++){
            const skillBox = newSkillBox(skillList[i])
            mother.appendChild(skillBox)
        }
    }

    return{
        creatBox
    }

})()



