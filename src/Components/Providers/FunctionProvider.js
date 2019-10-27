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