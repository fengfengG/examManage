(window["webpackJsonpexam-back"]=window["webpackJsonpexam-back"]||[]).push([[14],{915:function(e,t,a){},991:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p});var n=a(47),c=a(48),r=a(50),o=a(49),i=a(51),l=(a(902),a(901)),s=a(1),u=a.n(s),d=(a(915),a(114)),m=l.a.Column,p=function(e){function t(){var e,a;Object(n.a)(this,t);for(var c=arguments.length,i=new Array(c),l=0;l<c;l++)i[l]=arguments[l];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={data:[],visible:!1},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"correct",value:function(e){console.log(e),this.props.history.push("/main/read/detailRead/id="+e.exam_id)}},{key:"componentDidMount",value:function(){var e=this;Object(d.E)().then(function(t){console.log(t),e.setState({data:t.result.map(function(e,t){return e.key=t,e})})})}},{key:"render",value:function(){var e=this,t=this.state,a=(t.columns,t.data);return u.a.createElement("div",{className:"rea"},u.a.createElement(l.a,{dataSource:a},u.a.createElement(m,{title:"\u8bd5\u5377\u540d\u79f0",dataIndex:"exam_name",key:"exam_name"}),u.a.createElement(m,{title:"\u79d1\u76ee",dataIndex:"classType",key:"classType"}),u.a.createElement(m,{title:"\u64cd\u4f5c",key:"action",render:function(t,a){return u.a.createElement("span",null,u.a.createElement("a",{onClick:e.correct.bind(e,a)},"\u9605\u5377"))}})))}}]),t}(s.Component)}}]);
//# sourceMappingURL=14.df4fe219.chunk.js.map