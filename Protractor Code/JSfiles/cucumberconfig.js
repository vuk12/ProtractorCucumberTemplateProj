"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        '../features/homeB92.feature'
    ],
    cucumberOpts: {
        require: [
            './stepDefinitions/*js'
        ]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFVyxRQUFBLE1BQU0sR0FBUztJQUV0QixhQUFhLEVBQUMsSUFBSTtJQUNsQixTQUFTLEVBQUUsUUFBUTtJQUduQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUcvRCxLQUFLLEVBQUU7UUFDTCw2QkFBNkI7S0FDOUI7SUFFRCxZQUFZLEVBQUU7UUFFWixPQUFPLEVBQUU7WUFDUCx1QkFBdUI7U0FDeEI7S0FDRjtDQUNGLENBQUMifQ==