import React from 'react';
import ContentSlider from "../Sections/ContentSlider";
import Content from "../Sections/Content";

export class Feature{
    id:string;
    icon:string;
    title:string;
    desc:string|null;
    img?:string;
    content?:FeatureContent[];

    constructor(
        id:string,
        icon:string,
        title:string,
        desc:string|null,
        content?:FeatureContent[],
        img?:string,
    ){
        this.id=id;
        this.icon=icon;
        this.title=title;
        this.desc = desc;
        this.img=img;
        this.content=content;
    }

    static mapJson = (featureData:any):Feature => {
        let img = featureData.img?featureData.img:undefined;
        let content = featureData.content?featureData.content.map((content:any)=>FeatureContent.mapJson(content)):undefined;
        return new Feature(
            featureData.id,
            featureData.icon,
            featureData.title,
            featureData.desc?featureData.desc:null,
            content,
            img
        );
    }
}

class FeatureContent{
    title:string;
    desc:string;
    type:ContentTypes;
    image?:string;
    slides?:FeatureContent[];

	constructor(
        title:string,
        desc:string,
        type:ContentTypes,
        image?:string,
        slides?:FeatureContent[]
    ) {
        this.title=title;
        this.desc=desc;
        this.type=type;
        this.type=type;
        this.image=image;
        this.slides=slides;
    }
    
    static mapJson = (featureData:any):FeatureContent => {
        if(featureData.image)
            return new FeatureContent(
                featureData.title,
                featureData.desc,
                ContentTypes.getType(featureData.type),
                featureData.image
            );
        else if(ContentTypes.getType(featureData.type)===ContentTypes.SLIDE)
            return new FeatureContent(
                "","",ContentTypes.SLIDE,"",
                featureData.slides.map((slide: any)=>FeatureContent.mapJson(slide))
            );
        else
            return new FeatureContent(
                featureData.title,
                featureData.desc,
                ContentTypes.getType(featureData.type)
            );
    }

    render(i:any){
        if(this.type===ContentTypes.SLIDE){
            return <ContentSlider key={i} content={this} />
        }

        return <Content key={i} content={this} />
    }
}

export class ContentTypes{
    type:number;

    private constructor(type:number) {
        this.type=type;
    }

    static getType(key:number):ContentTypes{
        switch (key) {
            case 1:
                return this.PRIMARY;
            case 2:
                return this.MEDIA;
            case 3:
                return this.SLIDE;
            default:
                return this.SIMPLE;
        }
    }

    static PRIMARY = new ContentTypes(0);
    static SIMPLE = new ContentTypes(1);
    static MEDIA = new ContentTypes(2);
    static SLIDE = new ContentTypes(3);
}