export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5dad031fba843d4e1a1d532b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-mgauxu39',
                  apiId: 'fd7787fe-3a31-4107-a78d-516a4234f932'
                },
                {
                  buildHookId: '5dad031fba843d247c1d5351',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zy49z4wz',
                  apiId: 'f77c65f8-5837-4cc8-a5ad-27471260dd6d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ysmilyanski/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-zy49z4wz.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
