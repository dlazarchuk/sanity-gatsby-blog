export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e3c1f30fd13fd490111da91',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-nhny4jm2',
                  apiId: '15bb70e3-851e-4fd9-ad36-db9216cbe4a2'
                },
                {
                  buildHookId: '5e3c1f31b7cc83812ff31369',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-m2423ucq',
                  apiId: '774524a3-b5f0-4ae6-a7e4-53c6505d19cb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dlazarchuk/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-m2423ucq.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
