module.exports={
    title: "Curso de VueJs desde cero",
    description : "Bienvenido al curso de VueJs desde cero, aprenderas a realizar SPA, programación modular",
    author : "daecoders",
    themeConfig : {
        nav : [
            {
                text : "Blog",
                link : "/content/"
            },
            {
                text : "¿Quién soy?",
                link : "/content/quiensoy.md"
            },
            {
                text : "Contacto",
                link : "/content/contacto.md"
            },
        ],
        sidebar : {
            "/" : ["",
            "contenido", "/introduccion/", "/content/"
            ]
        }
    },
    markdown: {
        lineNumbers: true
      },
      plugins: [
        '@vuepress/blog',
        {
            directories: [
                {
                  // Unique ID of current classification
                  id: 'post',
                  // Target directory
                  dirname: '_posts',
                  // Path of the `entry page` (or `list page`)
                  path: '/',
                  layout: 'MyIndexPost',
                  itemLayout: 'MyPost',
                },
              ],
        },
      ]
}