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
        loadFilter: function(data){
            if (data.d){
                return data.d;
            } else {
                return data;
            }
        },
        data: [{
            text: '功能树',
            children:[{
                text:'设备管理',
                state: 'closed',
                children: [{
                    text: '设备查询'
                },{
                    text: '操作记录'
                },{
                    text: '出货操作'
                },{
                    text: '退货操作'
                },{
                    text: '报废操作'
                }]
            },{
                text:'投诉管理',
                state: 'closed',
                children:[{
                    text:'投诉处理'
                }]
            },{
                text:'车辆管理',
                state: 'closed',
                children:[{
                    text:'轨迹查询'
                }]
            },{
                text:'权限管理',
                state: 'closed',
                children: [{
                    text: '组织管理'
                },{
                    text: '用户管理'
                },{
                    text: '角色管理'
                },{
                    text: '资源授权'
                }]
            }]

        }],
        onClick:function(node){

        }
    });
};


App.Navigation.init();
App.FunctionTree.init();