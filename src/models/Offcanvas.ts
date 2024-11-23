export class Offcanvas {
    title: string
    icon:string
    bgColor: string
    color: string
    size: string
    links: { link: string; url: string }[]
    
    constructor(title: string,icon:string,
                bgColor:string,  color: string,
                size:string, links: { link: string; url: string }[]
               ){
        this.title = title
        this.icon = icon
        this.bgColor = bgColor
        this.color = color
        this.size = size
        this.links = links   
    }
}