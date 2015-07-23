/**
 * Created by Administrator on 2015/7/16.
 */

App = {};
App.Navigation = App.Navigation||{};
App.Navigation.init = function(){

};

App.FunctionTree = App.FunctionTree||{};
App.FunctionTree.init = function(){
    $('#tt').tree({
        url:'',
        method:'POST',
        lines:true,
        data: [{
            id:1,
            text: '功能树',
            "attributes":{
                "url":"/demo/book/abc",
                "price":100
            },
            children:[{
                id:2,
                text:'设备管理',
                state: 'closed',
                children: [{
                    id:3,
                    text: '设备查询'
                },{
                    id:4,
                    text: '操作记录'
                },{
                    id:5,
                    text: '出货操作'
                },{
                    id:6,
                    text: '退货操作'
                },{
                    id:7,
                    text: '报废操作'
                }]
            },{
                id:8,
                text:'投诉管理',
                state: 'closed',
                children:[{
                    id:9,
                    text:'投诉处理'
                }]
            },{
                id:10,
                text:'车辆管理',
                state: 'closed',
                children:[{
                    id:11,
                    text:'轨迹查询'
                }]
            },{
                id:12,
                text:'权限管理',
                state: 'closed',
                children: [{
                    id:13,
                    text: '组织管理'
                },{
                    id:14,
                    text: '用户管理'
                },{
                    id:15,
                    text: '角色管理'
                },{
                    id:16,
                    text: '资源授权'
                }]
            }]

        }],
        onClick:function(node){
            if(node.children){
                $('#tt').tree('expand',node);
                return false;
            }
            //var tabs = $("#tabs").tabs;
            if($("#tabs").tabs('exists',node.text)){
                $("#tabs").tabs('select',node.text);
            }else{
                $("#tabs").tabs('add', {
                    id: node.id,
                    title: node.text,
                    content: 'Tab Body',
                    closable: true,
                    selected:true,
                    onSelect:function(title){
                        alert(title+' is selected');
                    },
                    onClick:function(){
                        alert(111);
                    },
                    tools: [
                        {
                            iconCls: 'icon-mini-refresh',
                            handler: function () {
                                alert('refresh');
                            }
                        }
                    ]
                });
            }

        }
    });
};


App.Navigation.init();
App.FunctionTree.init();