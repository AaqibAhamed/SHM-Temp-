import {useState, useEffect} from "react";

export function ScreenSize({ children }) {
    const mediaMatch = window.matchMedia('(max-width: 800px)');
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addListener(handler);
        return () => mediaMatch.removeListener(handler);
    });

    return children(matches);
}

export default {
    getFeatures: (FeatureSource, id = null) => {
        let features;
        if (id === null) {
            features = FeatureSource;
        } else {
            features = [];
            FeatureSource.forEach((value, ) => {
                if (value.id === id) {
                    features.push(value)
                }
            })
        }
        return features;
    }
}