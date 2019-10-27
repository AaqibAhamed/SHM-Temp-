import { Feature } from "../Models/Feature.tsx";

var logo = "/content/images/logo.png";

class DataProvider {
    static FeatureSource = (async() => (await fetch('/api/features.json').then(r => r.json()).catch(err => {
        console.log(err)
    })).map(featureData => {
        return Feature.mapJson(featureData);
    }))();
    static TeamSource = fetch('/api/team.json').then(r => r.json()).catch(err => {
        console.log(err)
    });
    static SEOSource = fetch('/api/seo.json').then(r => r.json()).catch(err => {
        console.log(err)
    });
    static NavMenu = [{
            "title": "Home",
            "link": "/",
            "hidden": true
        },
        {
            "title": "About Us",
            "link": "/about",
            "children": [{
                    "title": "History",
                    "href": "https://www.shmgroup.com/timeline.php",
                },
                {
                    "title": "Our Team",
                    "link": "/our-team",
                },
                {
                    "title": "Vision & Mission",
                    "href": "/about/#vision",
                },
            ]
        },
        {
            "title": "Services",
            "link": "/services",
            "children": (async() => {
                let serviceList = [];
                (await this.FeatureSource).forEach(({ id, title }, ) => {
                    serviceList.push({
                        "title": title,
                        "href": "/services/" + id,
                    })
                })
                return serviceList;
            })()
        },
        {
            "title": "Contact",
            "link": "/contact"
        }
    ];
    static Company = fetch('/api/company.json').then(r => r.json()).catch(err => {
        console.log(err)
    });
}

export const FeatureSource = DataProvider.FeatureSource;

export const TeamSource = DataProvider.TeamSource;

export const NavMenu = DataProvider.NavMenu;

export const Logo = logo;

export const Company = DataProvider.Company;

export const SEO = DataProvider.SEOSource;

export default {
    FeatureSource: FeatureSource,
    NavigationMenu: NavMenu,
    Company: Company,
    Team: TeamSource,
    Logo: Logo,
    SEO: SEO
}