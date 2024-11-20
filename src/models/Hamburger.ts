export class Hamburger {
    title: string
    icon:string
    bgColor: string
    color: string
    size: string
    links: string[]
    
    constructor(title: string,icon:string,
                bgColor:string,  color: string,
                size:string, links: string[]
               ){
        this.title = title
        this.icon = icon
        this.bgColor = bgColor
        this.color = color
        this.size = size
        this.links = links   
    }
}