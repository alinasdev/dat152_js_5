Babel.registerPreset("env-module", {
    presets: [[Babel.availablePresets["env"], { "modules": false }]]
});

/* Below does not work with Babel standalone */
Babel.registerPreset("env-decorator", {
    presets: [[Babel.availablePresets["env-module"]]],
    "plugins": [
        [
            Babel.availablePlugins["proposal-decorators"],
            { decoratorsBeforeExport: false, "version": "2021-12"}
        ]
    ]
});
