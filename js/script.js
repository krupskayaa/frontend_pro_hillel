var user = [  
    {    
        name: 'Panda Vasya',    
        url: 'https://images.unsplash.com/photo-1527118732049-c88155f2107c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687',
        description: 'Несмотря на то, что панды относятся к отряду хищных, фактически они питаются почти исключительно (более чем на 99 %) бамбуком (любым из 25 видов, присутствующих в дикой среде обитания). В день взрослая панда съедает до 30 кг бамбука и побегов.'  
    },
    {    
        name: 'Panda Petya',
        url: 'https://images.unsplash.com/photo-1594231572357-212dafb85e9e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735',
        description: 'Несмотря на то, что панды относятся к отряду хищных, Для защиты от бамбуковых щепок пищевод и желудок выстланы толстым слоем упругой слизистой ткани. Если в каком-либо месте после цветения погибает весь бамбук, то живущим там пандам грозит смерть от голода' 
    },
    {    
        name: 'Panda Fedya',
        url: 'https://images.unsplash.com/photo-1625859043880-56acbcb6a6ac?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764',
        description: 'Несмотря на то, что панды относятся к отряду хищных, (подобные случаи отмечались в 1975 и 1983 годах). По мнению некоторых учёных, гиперзависимость медведей от бамбука могла развиться относительно недавно — около 5000 лет назад[11]. Изредка включают в свой рацион растения других видов. Кроме того, как и все медвежьи, панды всеядны: при доступности едят яйца, мелких птиц, зверьков, рыбу и некоторых насекомых, иногда — падаль'  
    }
];
var body = document.body;
var section = document.createElement('section');
body.append(section);
for (var i = 0; i < user.length; i++) {
    var div = document.createElement('div');
    section.append(div);
    var h2 = document.createElement('h2');
    h2.innerText = user[i].name;
    div.append(h2);
    var img = document.createElement('img');
    img.src = user[i].url;
    img.width = '300'
    div.append(img);
    var p = document.createElement('p');
    p.innerText = user[i].description;
    div.append(p);
}