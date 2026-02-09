module.exports = {
  default: {
    require: [
      'src/config/env.ts',
      'src/world/CustomWorld.ts',
      'src/hooks/*.ts',
      'src/steps/*.ts'
    ],
    requireModule: ['ts-node/register'],
    paths: ['features/*.feature'],
    format: [
      'progress',
      'allure-cucumberjs/reporter'
    ]
  }
};