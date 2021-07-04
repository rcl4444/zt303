module.exports = {
    lintOnSave: false,
    pluginOptions: {
        electronBuilder: {
            preload: 'preload.js',
            builderOptions: {
                appId: "ZT303",
                // icon: "zt128.ico",
                extraResources: [
                    {
                        from: "nativeResources/",
                        to: "../nativeResources/"
                    },
                    {
                        from: "dll.js"
                    }
                ]
            },
            externals: ['ffi-napi', 'ref-napi', 'ref-struct-napi'],
            linux: {
                target: "7z",
            }
        }
    }
}