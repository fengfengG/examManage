(window["webpackJsonpexam-back"]=window["webpackJsonpexam-back"]||[]).push([[25],{824:function(e,t,a){"use strict";a.r(t);a(742);var n=a(741),r=(a(158),a(78)),c=(a(347),a(68)),i=a(90),l=a(46),o=a(47),s=a(49),m=a(48),u=a(50),p=(a(740),a(739)),d=a(1),f=a.n(d),y=a(96);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var x=p.a.Option,h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={columns:[{title:"\u8bd5\u5377\u4fe1\u606f",dataIndex:"exam_name",key:"exam_id"},{title:"\u521b\u5efa\u4eba",dataIndex:"username",key:"username"},{title:"\u5f00\u59cb",key:"start_exam",dataIndex:"start_exam"},{title:"\u7ed3\u675f",key:"end_exam",dataIndex:"end_exam"},{title:"\u64cd\u4f5c",key:"",dataIndex:"exam_id",render:function(e,t){return f.a.createElement("span",null,f.a.createElement("a",{href:"/#/main/exam/examDetail/".concat(t.exam_id)},"\u8be6\u60c5"))}}],examType:[],course:[],examList:[]},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||(console.log("Received values of form: ",t),Object(y.w)(t).then(function(e){console.log(e),a.setState({examList:e.result})}))})},a.normFile=function(e){return Array.isArray(e)?e:e&&e.fileList},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getLocalTime",value:function(e){return new Date(parseInt(e)).toLocaleString().replace(/\u5e74|\u6708/g,"-").replace(/\u65e5/g," ")}},{key:"componentDidMount",value:function(){var e=this;Object(y.s)().then(function(t){e.setState({examType:t.msg})}),Object(y.p)().then(function(t){e.setState({course:t.msg})}),Object(y.q)().then(function(t){console.log(t);var a=t.result;e.setState({examList:a.map(function(t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach(function(t){Object(i.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},t,{start_exam:e.getLocalTime(t.start_exam),end_exam:e.getLocalTime(t.end_exam)})})})})}},{key:"render",value:function(){var e=this.state,t=e.columns,a=e.examList,i=this.props.form.getFieldDecorator;return f.a.createElement("div",null,f.a.createElement("div",{className:"top",style:{background:"#fff",padding:"20px"}},f.a.createElement(c.a,{onSubmit:this.handleSubmit,layout:"inline"},f.a.createElement(c.a.Item,{label:"\u8003\u8bd5\u7c7b\u578b",hasFeedback:!0},i("select",{rules:[{required:!0}]})(f.a.createElement(p.a,{class:"ant-select-selection--single",style:{width:140}},this.state.examType.map(function(e,t){return f.a.createElement(x,{value:e.timeType,key:e.timeId},e.timeType)})))),f.a.createElement(c.a.Item,{label:"\u8bfe\u7a0b"},i("select-multiple",{rules:[{required:!0}]})(f.a.createElement(p.a,{class:"ant-select-selection--single",style:{width:130}},this.state.course.length&&this.state.course.map(function(e,t){return f.a.createElement(x,{key:t},e.classType)})))),f.a.createElement(c.a.Item,{wrapperCol:{span:12,offset:6}},f.a.createElement(r.a,{type:"primary",htmlType:"submit"},"\u67e5\u8be2")))),f.a.createElement("div",{className:"bottom",style:{background:"#fff",padding:"20px"}},f.a.createElement(n.a,{columns:t,dataSource:a,size:"middle",rowKey:function(e){return e.exam_id}})))}}]),t}(f.a.Component),g=c.a.create({name:"validate_other"})(h);t.default=g}}]);
//# sourceMappingURL=25.b4709465.chunk.js.map