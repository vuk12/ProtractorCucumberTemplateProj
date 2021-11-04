import {Config} from "protractor"

export let config:Config= {
    // set to "custom" instead of cucumber.
    directConnect:true,
    framework: 'custom',
  
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    // require feature files
    specs: [
      '../features/homeB92.feature' // accepts a glob
    ],
  
    cucumberOpts: {
      // require step definitions
      require: [
        './stepDefinitions/*js' // accepts a glob
      ]
    }
  };