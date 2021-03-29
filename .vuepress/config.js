module.exports={
    title: "Curso de VueJs desde cero",
    description : "Bienvenido al curso de VueJs desde cero, aprenderas a realizar SPA, programación modular",
    author : "daecoders",
    
    themeConfig : {
        logo : "/assets/img/CursoVueJs.png",
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
            "/content/", "/introduccion/", "/content/"
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
};

function getSidebarElements(){
    return [
        {
            "title" : "Menú externo creado con una funcion",
            "collapsable" : false,
            "children" : [
                {"title" : "submenú 1 creado con función", "link" : "/introduccion/"},
                "contenido"
            ]
        }
    ]
}