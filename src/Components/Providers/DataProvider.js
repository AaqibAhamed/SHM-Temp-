import { Feature } from "../Models/Feature.tsx";
import DBProvider from "./DBProvider";

var logo = "/content/images/logo.png";

var db = new DBProvider();

class DataProvider {
    static FeatureSource = (async() => (await new Promise((res, rej) => {
        db.getDB().ref(DBProvider.TABLE_FEATURES).on('value', snapshot => {
            let data = snapshot.val();
            try {
                let values = Object.values(data);
                res(values)
            } catch (_) {
                rej('err');
            }
        }, _ => {
            rej('err');
        })
    })).map(featureData => {
        return Feature.mapJson(featureData);
    }))();
    static TeamSource = new Promise((res, rej) => {
        db.getDB().ref(DBProvider.TABLE_TEAM).on('value', snapshot => {
            let data = snapshot.val();
            try {
                let values = Object.values(data);
                res(values)
            } catch (_) {
                rej('err');
            }
        }, _ => {
            rej('err');
        })
    })
    static SEOSource = new Promise((res, rej) => {
        db.getDB().ref(DBProvider.TABLE_SEO).on('value', snapshot => {
            let data = snapshot.val();
            try {
                let values = Object.values(data);
                let newData = values[0];
                res(newData)
            } catch (_) {
                rej('err');
            }
        }, _ => {
            rej('err');
        })
    });
    static NavMenu = [{
            "title": "Home",
            "link": "/",
            "hidden": false
        },
        {
            "title": "About Us",
            "link": "/about",
            "children": [{
                    "title": "Vision & Mission",
                    "href": "/about/#vision",
                },
                {
                    "title": "Our Team",
                    "link": "/our-team",
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
    static Company = new Promise((res, rej) => {
        db.getDB().ref(DBProvider.TABLE_COMPANY).on('value', snapshot => {
            let data = snapshot.val();
            try {
                let values = Object.values(data);
                let newData = values[0];
                res(newData)
            } catch (_) {
                rej('err');
            }
        }, _ => {
            rej('err');
        })
    })
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