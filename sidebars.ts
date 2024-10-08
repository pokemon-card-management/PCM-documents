import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: 'doc',
      id: 'intro'
    },
    {
      type: 'category',
      label: 'A.PokemonCardDatabase',
      link: {
        type: 'generated-index',
        title: 'A.PokemonCardDatabase',
        slug: '/A.pokemon-card-database',
      },
      items: [
        {
          /* 自動生成の指定 */
          type: 'autogenerated',
          dirName: 'A.pokemon-card-database',
        }
      ]
    },
  ],

  // But you can create a sidebar manually
  /**
  proposal: [
    {
      type: 'category',
      label: 'PokemonCardDatabase',
      items: ['pokemon-card-database/test'],
    },
  ],
  specification: [
    'test',
    'hello',
  ],
  */
};

export default sidebars;
