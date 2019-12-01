import MetaTags from "react-meta-tags";
import React, {Component} from "react";
import { SEO as source } from "../Providers/DataProvider";

var logo = "/content/images/logo.png";

export default class SEO extends Component{
    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            data: {}
        }
        this.load();
    }

    load = async () => {
        let seo = await source;
        this.setState({
            loaded: true,
            data: seo
        });
    }

    render(){
        
        let {title, desc, page} = this.props
        let sitename = 'SHM Sri Lanka';
        let seperator = '-';

        if(this.state.loaded){
            sitename = this.state.data.siteName;
            seperator = this.state.data.seperator;
        }
        
        title = sitename + ' ' + seperator + ' ' + title;

        return (
            <MetaTags>
                <title>{title}</title>
                <meta name="description" content={desc} />

                <meta itemProp="name" content={title}/>
                <meta itemProp="description" content={desc}/>
                <meta itemProp="image" content={logo} />

                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={desc}/>

                <meta name="twitter:image:src" content={logo}/>

                <meta property="og:title" content={title} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`http://www.shm-group.lk${page}`} />
                <meta property="og:image" content={logo} />
                <meta property="og:description" content={desc} />
                <meta property="og:site_name" content={sitename} />
            </MetaTags>
        );
    }
}