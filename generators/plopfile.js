module.exports = (plop) => {
  // Components
  plop.setGenerator('Component Simple', {
    description: 'applies simple component structure',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/components/simple/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'plop-templates/components/simple/styles.ts.hbs',
      },
    ],
  });
  // Section
  plop.setGenerator('Section Simple', {
    description: 'applies simple sections structure',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the section?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/sections/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/sections/simple/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/sections/{{pascalCase name}}/styles.ts',
        templateFile: 'plop-templates/sections/simple/styles.ts.hbs',
      },
    ],
  });

  // Pages
  plop.setGenerator('Page Simple', {
    description: 'applies simple page structure',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the page?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{lowerCase name}}.tsx',
        templateFile: 'plop-templates/pages/simple/index.tsx.hbs',
      },
    ],
  });

  // API
  plop.setGenerator('Router Simple', {
    description: 'applies simple router structure',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the router?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/api/{{pascalCase name}}.ts',
        templateFile: 'plop-templates/routers/simple/index.ts.hbs',
      },
    ],
  });
};
