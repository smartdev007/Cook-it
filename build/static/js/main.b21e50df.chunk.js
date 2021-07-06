(this["webpackJsonpcook-it"]=this["webpackJsonpcook-it"]||[]).push([[0],{347:function(e,t,n){},348:function(e,t,n){},365:function(e,t,n){},366:function(e,t,n){},369:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(25),i=n.n(s),r=(n(347),n(348),n(443)),o=n(74),l=n(45),j=n(5),d=function(){return Object(j.jsx)("div",{className:"home-background-container",children:Object(j.jsx)("div",{className:"home-background"})})},b=n(30),u=n(420),m=n(435),O=n(47),p=n(291),x={user:null};if(localStorage.getItem("jwtToken")){var g=Object(p.a)(localStorage.getItem("jwtToken"));1e3*g.exp<Date.now()?localStorage.removeItem("jwtToken"):x.user=g}var h=Object(a.createContext)({user:null,login:function(e){},logout:function(){}});function f(e,t){switch(t.type){case"LOGIN":return Object(O.a)(Object(O.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(O.a)(Object(O.a)({},e),{},{user:null});default:return e}}function y(e){var t=Object(a.useReducer)(f,x),n=Object(b.a)(t,2),c=n[0],s=n[1];return Object(j.jsx)(h.Provider,Object(O.a)({value:{user:c.user,login:function(e){console.log(e),localStorage.setItem("jwtToken",e.token),s({type:"LOGIN",payload:e})},logout:function(){localStorage.removeItem("jwtToken"),s({type:"LOGOUT"})}}},e))}var v=n(431),w=n(444),C=n(447),I=n(175),k=n(181),S=n.n(k),N=n(61),P=n(63),$=n.n(P),A=n(436);var T,L,D=function(e){var t=e.content,n=e.children;return Object(j.jsx)(A.a,{inverted:!0,content:t,trigger:n})},M=$()(T||(T=Object(N.a)(["\n query GetPosts($category : String, $search_str : String) {\n    getPosts(category : $category, search_str : $search_str){\n        id\n        title\n        content\n        image\n        youtube\n        createdAt\n        createdAt\n        catagory\n        username\n        commentCount\n        comments{\n          id\n          createdAt\n          username\n          body\n        }\n        likes{\n          id\n           createdAt\n          username\n        }\n        likeCount\n      }\n  }\n"])));var R,U,E=$()(L||(L=Object(N.a)(["\n  mutation likePost($postId: ID!) {\n    likePost(postId: $postId) {\n      id\n      likes {\n        id\n        username\n      }\n      likeCount\n    }\n  }\n"]))),F=function(e){var t=e.user,n=e.post,c=n.id,s=n.likeCount,i=n.likes,r=Object(a.useState)(!1),l=Object(b.a)(r,2),d=l[0],m=l[1];Object(a.useEffect)((function(){t&&i.find((function(e){return e.username===t.username}))?m(!0):m(!1)}),[t,i]);var O=Object(u.useMutation)(E,{refetchQueries:[{query:M}]}),p=Object(b.a)(O,1)[0],x=t?d?Object(j.jsx)(I.a,{name:"heart",color:"red"}):Object(j.jsx)(I.a,{name:"heart",color:"green"}):Object(j.jsx)(o.b,{to:"/login",children:Object(j.jsx)(I.a,{name:"heart",color:"green"})});return Object(j.jsxs)(C.a,{as:"div",labelPosition:"right",onClick:function(){p({variables:{postId:c}})},children:[Object(j.jsx)(D,{content:d?"Unlike":"Like",children:x}),Object(j.jsx)("span",{children:s})]})},G=n(442);var z=$()(R||(R=Object(N.a)(["\n  mutation deletePost($postId: ID!) {\n    deletePost(postId: $postId)\n  }\n"]))),B=$()(U||(U=Object(N.a)(["\n  mutation deleteComment($postId: ID!, $commentId: ID!) {\n    deleteComment(postId: $postId, commentId: $commentId) {\n      id\n      comments {\n        id\n        username\n        createdAt\n        body\n      }\n      commentCount\n    }\n  }\n"]))),H=function(e){var t=e.postId,n=e.commentId,c=e.callback,s=Object(a.useState)(!1),i=Object(b.a)(s,2),r=i[0],o=i[1],l=n?B:z,d=Object(u.useMutation)(l,{update:function(e){if(o(!1),!n){var a=e.readQuery({query:M});a.getPosts=a.getPosts.filter((function(e){return e.id!==t})),e.writeQuery({query:M,data:a})}c&&c()},variables:{postId:t,commentId:n}}),m=Object(b.a)(d,1)[0];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(D,{content:n?"Delete comment":"Delete post",children:Object(j.jsx)(I.a,{color:"red",onClick:function(){return o(!0)},name:"trash",style:{margin:0,cursor:"pointer"}})}),Object(j.jsx)(G.a,{open:r,onCancel:function(){return o(!1)},onConfirm:m})]})};var Q,q=function(e){var t=e.post,n=t.title,c=(t.content,t.catagory),s=t.image,i=t.createdAt,r=t.id,l=t.username,d=t.likeCount,b=t.commentCount,u=t.likes,m=Object(a.useContext)(h).user;return Object(j.jsxs)("div",{className:"postcard-container",children:[Object(j.jsxs)(w.a.Content,{style:{padding:"0px"},as:o.b,to:"/recipes/".concat(r),children:[Object(j.jsx)("img",{src:s,width:"100%",alt:"no image",style:{margin:"0",minHeight:"200px"}}),Object(j.jsx)(w.a.Description,{align:"left",style:{marginTop:"5px"},children:Object(j.jsx)("h4",{children:n})}),Object(j.jsx)(w.a.Meta,{style:{textAlign:"left"},children:Object(j.jsxs)("p",{children:[S()(i).fromNow(!0)," ago by @",l]})})]}),Object(j.jsxs)(w.a.Content,{extra:!0,children:[Object(j.jsx)("span",{style:{float:"left"},children:c}),Object(j.jsxs)("div",{style:{float:"right"},children:[Object(j.jsx)(F,{user:m,post:{id:r,likes:u,likeCount:d}}),Object(j.jsx)(C.a,{as:"div",labelPosition:"right",children:Object(j.jsx)(D,{content:"Comment on post",children:Object(j.jsxs)("span",{children:[Object(j.jsx)(I.a,{name:"comments",color:"blue"}),Object(j.jsx)("span",{children:b})]})})}),m&&m.username===l&&Object(j.jsx)(H,{postId:r})]})]})]})},_=n(438),V=n(121),K=n(430),W=n(259),J=(n(363),W.a.initializeApp({apiKey:"AIzaSyCAfy_6tVkGat9sBRKMLBgOqyP5rIFZVpU",authDomain:"niii-fba77.firebaseapp.com",projectId:"niii-fba77",storageBucket:"niii-fba77.appspot.com",messagingSenderId:"143969709978",appId:"1:143969709978:web:57ae8d66bbe389dfe59423",measurementId:"G-XC2WEP2ELW"}),W.a.storage()),X=n(440),Y=n(445),Z=n(451),ee=n(319),te=n(421),ne=n(449),ae=n(426),ce=n(427),se=n(428),ie=n(429),re=c.a.forwardRef((function(e,t){return Object(j.jsx)(te.a,Object(O.a)({direction:"up",ref:t},e))})),oe=function(e){var t=e.errMsg,n=e.setErrorMsg;return Object(j.jsxs)(ne.a,{open:t.open,TransitionComponent:re,keepMounted:!0,onClose:function(){return n({msg:"",open:!1})},"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(j.jsxs)(ae.a,{id:"alert-dialog-slide-title",variant:"contained",color:"primary",children:[Object(j.jsx)(ee.a,{})," Warning"]}),Object(j.jsx)(ce.a,{children:Object(j.jsx)(se.a,{id:"alert-dialog-slide-description",style:{color:"red"},children:t.msg})}),Object(j.jsx)(ie.a,{children:Object(j.jsx)(K.a,{onClick:function(){return n({msg:"",open:!1})},variant:"contained",color:"secondary",children:"OK"})})]})},le=n(432),je=n(433),de=n(452),be=n(320),ue=n(242),me=Object(v.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));var Oe=$()(Q||(Q=Object(N.a)(["\n  mutation createPost($title: String!,$content: String!, $image: String!,$youtube : String!, $catagory: String!) {\n    createPost(title: $title,content: $content, image: $image, youtube : $youtube, catagory: $catagory) {\n      id\n      title\n      content\n      image\n      youtube\n      createdAt\n      username\n      likes {\n        id\n        username\n        createdAt\n      }\n      likeCount\n      comments {\n        id\n        body\n        username\n        createdAt\n      }\n      commentCount\n    }\n  }\n"]))),pe=function(e){var t=e.setToggle,n=me(),c=Object(a.useState)({msg:"",open:!1}),s=Object(b.a)(c,2),i=s[0],r=s[1],o=Object(a.useState)(null),l=Object(b.a)(o,2),d=l[0],m=l[1],p=Object(a.useState)(""),x=Object(b.a)(p,2),g=x[0],h=x[1],f=Object(a.useState)(""),y=Object(b.a)(f,2),v=y[0],w=y[1],C=Object(a.useState)({title:"",content:""}),I=Object(b.a)(C,2),k=I[0],S=I[1],N=Object(a.useState)(""),P=Object(b.a)(N,2),$=P[0],A=P[1],T=X.a.Option,L=Object(u.useMutation)(Oe,{refetchQueries:[{query:M}]}),D=Object(b.a)(L,2),R=D[0],U=(D[1].data,function(e){S(Object(O.a)(Object(O.a)({},k),{},Object(V.a)({},e.target.name,e.target.value)))});return""!==g&&(R({variables:{title:k.title,content:k.content,image:g,youtube:v,catagory:$}}),h(""),w(""),k.title="",k.content="",t(!1)),Object(j.jsxs)("div",{style:{borderRadius:"15px",width:"60%",margin:"auto",marginTop:"80px",border:"1px solid gray",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"},children:[Object(j.jsx)("h1",{children:"New Recipe"}),Object(j.jsxs)("form",{className:n.root,noValidate:!0,autoComplete:"off",children:[Object(j.jsxs)(Y.a,{style:{width:"100%"},children:[Object(j.jsx)(Z.a,{span:12,children:Object(j.jsxs)(X.a,{onChange:function(e){return A(e)},defaultValue:"Select Catagory",style:{width:"70%",marginTop:"18px"},children:[Object(j.jsx)(T,{value:"Spicy",children:"Spicy"}),Object(j.jsx)(T,{value:"Desert",children:"Desert"}),Object(j.jsx)(T,{value:"Chinese",children:"Chinese"}),Object(j.jsx)(T,{value:"Italian",children:"Italian"})]})}),Object(j.jsx)(Z.a,{span:12,children:Object(j.jsx)(_.a,{style:{width:"70%"},onChange:U,value:k.title,name:"title",id:"standard-basic",label:"Title"})})]}),Object(j.jsx)(le.a,{rowsMax:200,style:{width:"80%",marginTop:"30px",height:"180px",fontSize:"17px"},onChange:U,value:k.content,name:"content",id:"standard-basic",label:"Content"}),Object(j.jsxs)(Y.a,{style:{marginTop:"30px"},children:[Object(j.jsx)(Z.a,{span:2}),Object(j.jsxs)(Z.a,{span:10,align:"left",children:[Object(j.jsxs)("div",{onClick:function(){return document.getElementById("selFile").click()},style:{cursor:"pointer"},children:[Object(j.jsx)(de.a,{style:{fontSize:"28px",marginLeft:"-10px"}}),Object(j.jsxs)("span",{style:{marginLeft:"4px"},children:["Upload  ",Object(j.jsx)("i",{style:{color:"#44f"},children:d?d.name:""})]})]}),Object(j.jsx)("input",{id:"selFile",type:"file",onChange:function(e){m(e.target.files[0])},hidden:!0})]}),Object(j.jsx)(Z.a,{span:11,children:Object(j.jsx)(_.a,{onChange:function(e){w(e.target.value)},placeholder:"rokGy0huYEA",style:{width:"100%"},InputProps:{startAdornment:Object(j.jsx)(je.a,{position:"start",children:Object(j.jsx)("span",{children:"https://www.youtube.com/embed/"})})}})}),Object(j.jsx)(Z.a,{span:1})]}),Object(j.jsxs)(Y.a,{style:{width:"100%",marginTop:"30px"},children:[Object(j.jsx)(Z.a,{span:12,children:Object(j.jsxs)(K.a,{style:{width:"60%"},onClick:function(){$?k.title?k.content?d?J.ref("/images/".concat(d.name)).put(d).on("state_changed",console.log,console.error,(function(){J.ref("images").child(d.name).getDownloadURL().then((function(e){m(null),h(e)}))})):r({msg:"Select the image..",open:!0}):r({msg:"Input the content..",open:!0}):r({msg:"Input a title..",open:!0}):r({msg:"Select a category..",open:!0})},variant:"contained",color:"primary",children:[Object(j.jsx)(be.a,{style:{fontSize:"16px"}}),Object(j.jsx)("span",{style:{marginLeft:"4px"},children:"Submit"})]})}),Object(j.jsx)(Z.a,{span:12,children:Object(j.jsxs)(K.a,{style:{width:"60%"},onClick:function(){t(!1)},variant:"contained",color:"secondary",children:[Object(j.jsx)(ue.a,{style:{fontSize:"16px"}}),Object(j.jsx)("span",{style:{marginLeft:"4px"},children:"Cancel"})]})})]})]}),i.open&&Object(j.jsx)(oe,{errMsg:i,setErrorMsg:r})]})},xe=n(434),ge=n(453),he=n(241),fe=n(454),ye=n(189),ve=Object(v.a)((function(e){return{root:{flexGrow:2,background:"#fff",borderRight:"3px solid green"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var we,Ce,Ie=function(){var e,t=ve(),n=X.a.Option,c=Object(a.useState)(!1),s=Object(b.a)(c,2),i=s[0],r=s[1],o=Object(a.useState)(""),l=Object(b.a)(o,2),d=l[0],O=l[1],p=Object(a.useState)(""),x=Object(b.a)(p,2),g=x[0],h=x[1],f=Object(u.useQuery)(M,{variables:{category:d,search_str:g}}),y=f.loading,v=f.data,w=f.refetch;return Object(a.useEffect)((function(){w()})),Object(j.jsxs)("div",{style:{minHeight:window.screen.availHeight-150+"px"},children:[i&&Object(j.jsx)(pe,{setToggle:r}),!1===i&&Object(j.jsxs)(Y.a,{children:[Object(j.jsxs)(Z.a,{span:6,className:"controlDiv",style:{minHeight:window.screen.availHeight-150+"px"},align:"center",children:[Object(j.jsx)(xe.a,{orientation:"center",children:Object(j.jsxs)("i",{children:[Object(j.jsx)(ge.a,{})," filters"]})}),Object(j.jsxs)("div",{className:"filter-container",children:[Object(j.jsx)(_.a,{onChange:function(e){h(e.target.value)},placeholder:"Advanced Search",style:{width:"80%"},InputProps:{startAdornment:Object(j.jsx)(je.a,{position:"start",children:Object(j.jsx)(he.a,{})})}}),Object(j.jsxs)("div",{style:{marginTop:"30px"},children:[Object(j.jsx)(xe.a,{orientation:"left",style:{margin:"5px"},children:"category"}),Object(j.jsxs)(X.a,{onChange:function(e){return O(e)},defaultValue:"Select the Category",style:{width:"80%"},children:[Object(j.jsx)(n,{value:"Any",children:"Any"}),Object(j.jsx)(n,{value:"Spicy",children:"Spicy"}),Object(j.jsx)(n,{value:"Desert",children:"Desert"}),Object(j.jsx)(n,{value:"Chinese",children:"Chinese"}),Object(j.jsx)(n,{value:"Italian",children:"Italian"})]})]})]}),Object(j.jsx)(xe.a,{orientation:"left",style:{marginTop:"20px"}}),Object(j.jsxs)(K.a,{style:{marginTop:"30px"},onClick:function(){r(!0)},variant:"contained",color:"primary",children:[Object(j.jsx)(fe.a,{}),Object(j.jsx)("span",{style:{marginLeft:"4px"},children:"Create Post"})]})]}),y?Object(j.jsxs)("h1",{children:[" ",Object(j.jsx)(ye.a,{})]}):Object(j.jsx)(Z.a,{span:18,className:t.root,children:Object(j.jsx)(m.a,{container:!0,spacing:3,style:{width:"100%",margin:"auto"},children:v&&(null===v||void 0===v||null===(e=v.getPosts)||void 0===e?void 0:e.map((function(e){return Object(j.jsx)(m.a,{item:!0,xs:12,sm:6,lg:3,children:Object(j.jsx)("div",{style:{marginBottom:20},children:Object(j.jsx)(q,{post:e})},e.id)})})))})})]})]})},ke=n(441),Se=n(456),Ne=n(439),Pe=n(313),$e=n(455),Ae=n(457),Te=n(321),Le=(n(365),function(e){return Object(j.jsx)(Pe.a,{type:"button",className:"Submit-btn btn-text",onClick:e.onClick,children:e.name})}),De=$()(we||(we=Object(N.a)(["\nmutation(\n    $username: String!\n    $password: String!\n){\n    login(\n        username:$username\n        password:$password\n        ){\n      id\n      email\n      token\n      username\n      createdAt\n    }\n  }\n"]))),Me=function(){var e=Object(a.useState)({username:"",password:""}),t=Object(b.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)({}),i=Object(b.a)(s,2),r=i[0],l=i[1],d=Object(a.useContext)(h),m=Object(u.useMutation)(De,{update:function(e,t){var n=t.data.login;d.login(n)},onError:function(e){console.log("here",e),l(e.graphQLErrors[0].extensions.exception.errors)},variables:n}),p=Object(b.a)(m,2),x=p[0],g=p[1].loading;var f=function(e){c(Object(O.a)(Object(O.a)({},n),{},Object(V.a)({},e.target.name,e.target.value)))};return console.log(g),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"singin-main-container",style:{marginTop:"0px"},children:[Object(j.jsxs)("div",{className:"signin-left-container",children:[Object(j.jsx)("div",{className:"logo-conatainer",children:Object(j.jsx)("h1",{className:"left-logo",children:"App"})}),Object(j.jsxs)("div",{className:"signin-input",children:[Object(j.jsx)("h3",{style:{textAlign:"left"},className:"sigin-name",children:"Login"}),Object(j.jsx)(ke.a,{className:"input",name:"username",onChange:function(e){return f(e)},suffix:Object(j.jsx)($e.a,{style:{color:"light-gray !important"}}),placeholder:"Username"}),Object(j.jsx)(Se.b,{direction:"vertical",children:Object(j.jsx)(ke.a.Password,{className:"input",name:"password",onChange:function(e){return f(e)},placeholder:"Password",iconRender:function(e){return e?Object(j.jsx)(Ae.a,{}):Object(j.jsx)(Te.a,{})}})}),Object(j.jsx)("div",{className:"checkbox-align"}),Object(j.jsx)(Le,{onClick:function(){x()},className:"SignUp-btn",name:"Log in"}),r.username&&Object(j.jsx)(Ne.a,{style:{marginTop:"10px"},message:r.username,type:"warning",showIcon:!0,closable:!0}),r.password&&Object(j.jsx)(Ne.a,{style:{marginTop:"10px"},message:r.password,type:"warning",showIcon:!0,closable:!0}),r.general&&Object(j.jsx)(Ne.a,{style:{marginTop:"10px"},message:r.general,type:"warning",showIcon:!0,closable:!0})]})]}),Object(j.jsxs)("div",{className:"signin-right-container",children:[Object(j.jsx)("div",{className:"newUser-container",children:Object(j.jsx)("h1",{children:"New User?"})}),Object(j.jsx)("p",{className:"newUser-para",children:"Click on get started to create an account with us. It will only take a few minutes"}),Object(j.jsx)("div",{className:"btn-container",children:Object(j.jsx)(Pe.a,{className:"btn-started",type:"button",children:Object(j.jsx)(o.b,{to:"/signup",children:"Get Started"})})})]})]})})},Re=$()(Ce||(Ce=Object(N.a)(["\nmutation(\n    $username: String!,\n    $password: String!,\n    $confirmPassword: String!,\n    $email:String!,\n){\n    register(registerInput:{\n      username:$username\n      password:$password\n      confirmPassword:$confirmPassword\n      email:$email\n    }){\n      email\n      token\n    }\n  }\n"]))),Ue=function(){var e=Object(a.useState)({username:"",password:"",confirmPassword:"",email:""}),t=Object(b.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)({}),i=Object(b.a)(s,2),r=i[0],o=i[1],l=Object(a.useContext)(h),d=Object(u.useMutation)(Re,{update:function(e,t){var n=t.data.register;l.login(n)},onError:function(e){o(e.graphQLErrors[0].extensions.exception.errors)},variables:n}),m=Object(b.a)(d,2),p=m[0],x=m[1].loading;console.log(x);var g=function(e){c(Object(O.a)(Object(O.a)({},n),{},Object(V.a)({},e.target.name,e.target.value)))};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"singin-main-container",style:{marginTop:"0px"},children:[Object(j.jsxs)("div",{className:"signin-left-container",children:[Object(j.jsx)("div",{className:"logo-conatainer",children:Object(j.jsx)("h1",{className:"left-logo",children:"App"})}),Object(j.jsxs)("div",{className:"signin-input",children:[Object(j.jsx)("h3",{style:{textAlign:"left"},className:"sigin-name",children:"Signup"}),Object(j.jsx)(ke.a,{className:"input",name:"username",onChange:function(e){return g(e)},suffix:Object(j.jsx)($e.a,{style:{color:"light-gray !important"}}),placeholder:"Username"}),Object(j.jsx)(ke.a,{className:"input",placeholder:"Email Address",name:"email",onChange:function(e){return g(e)}}),Object(j.jsx)(Se.b,{direction:"vertical",children:Object(j.jsx)(ke.a.Password,{className:"input",name:"password",onChange:function(e){return g(e)},placeholder:"Password",iconRender:function(e){return e?Object(j.jsx)(Ae.a,{}):Object(j.jsx)(Te.a,{})}})}),Object(j.jsx)(Se.b,{direction:"vertical",children:Object(j.jsx)(ke.a.Password,{className:"input",name:"confirmPassword",onChange:function(e){return g(e)},placeholder:"Confirm Password",iconRender:function(e){return e?Object(j.jsx)(Ae.a,{}):Object(j.jsx)(Te.a,{})}})}),Object(j.jsx)("div",{className:"checkbox-align"}),Object(j.jsx)(Le,{onClick:function(){p()},className:"SignUp-btn",name:"SignUp"}),r.username&&Object(j.jsx)(Ne.a,{style:{marginTop:"10px"},message:r.username,type:"warning",showIcon:!0,closable:!0}),r.password&&Object(j.jsx)(Ne.a,{style:{marginTop:"10px"},message:r.password,type:"warning",showIcon:!0,closable:!0}),r.general&&Object(j.jsx)(Ne.a,{style:{marginTop:"10px"},message:r.general,type:"warning",showIcon:!0,closable:!0})]})]}),Object(j.jsx)("div",{className:"signin-right-container",children:Object(j.jsx)("div",{className:"newUser-container",children:Object(j.jsx)("h1",{children:"SignUp"})})})]})})},Ee=n(318);var Fe,Ge,ze=function(e){var t=e.component,n=Object(Ee.a)(e,["component"]),c=Object(a.useContext)(h).user;return Object(j.jsx)(l.b,Object(O.a)(Object(O.a)({},n),{},{render:function(e){return c?Object(j.jsx)(l.a,{to:"/"}):Object(j.jsx)(t,Object(O.a)({},e))}}))},Be=n(450),He=n(314),Qe=n(437),qe=n(458),_e=n(459),Ve=(n(366),function(e){var t=e.embedId;return Object(j.jsx)("div",{className:"video-responsive",children:Object(j.jsx)("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})});var Ke=$()(Fe||(Fe=Object(N.a)(["\n  mutation($postId: String!, $body: String!) {\n    createComment(postId: $postId, body: $body) {\n      id\n      comments {\n        id\n        body\n        createdAt\n        username\n      }\n      commentCount\n    }\n  }\n"]))),We=$()(Ge||(Ge=Object(N.a)(["\n  query($postId: ID!) {\n    getPost(postId: $postId) {\n      id\n      title\n      content\n      image\n      youtube\n      createdAt\n      username\n      likeCount\n      likes {\n        username\n      }\n      commentCount\n      comments {\n        id\n        username\n        createdAt\n        body\n      }\n    }\n  }\n"]))),Je=function(e){var t=e.match.params.postId;console.log(t);var n,c=Object(a.useContext)(h).user,s=Object(a.useRef)(null),i=Object(a.useState)(""),r=Object(b.a)(i,2),o=r[0],l=r[1],d=Object(u.useQuery)(We,{variables:{postId:t}}).data,m=Object(u.useMutation)(Ke,{update:function(){l(""),s.current.blur()},variables:{postId:t,body:o}}),O=Object(b.a)(m,1)[0];if(void 0===(null===d||void 0===d?void 0:d.getPost))n=Object(j.jsx)("p",{children:"Loading post.."});else{var p,x,g,f=null===d||void 0===d?void 0:d.getPost,y=f.id,v=(f.body,f.createdAt),k=f.username,N=f.comments,P=f.likes,$=f.likeCount,A=f.commentCount;console.log(null===d||void 0===d?void 0:d.getPost),n=Object(j.jsx)(Be.a,{className:"postcard-container",style:{width:"90%",margin:"auto"},children:Object(j.jsxs)(Be.a.Row,{children:[Object(j.jsx)(Be.a.Column,{width:9,children:Object(j.jsxs)(w.a,{fluid:!0,children:[Object(j.jsxs)(w.a.Content,{style:{padding:"30px"},children:[Object(j.jsx)(w.a.Description,{align:"left",style:{marginLeft:"10px"},children:Object(j.jsx)("h3",{children:null===d||void 0===d||null===(p=d.getPost)||void 0===p?void 0:p.title})}),Object(j.jsx)("hr",{}),Object(j.jsx)(w.a.Description,{align:"left",style:{margin:"20px 0px 10px 30px"},children:Object(j.jsx)("div",{children:null===d||void 0===d||null===(x=d.getPost)||void 0===x?void 0:x.content.split("\n").map((function(e,t){return e?Object(j.jsxs)("div",{style:{padding:"5px"},children:[Object(j.jsx)(qe.a,{style:{marginRight:"8px"}}),e]}):""}))})}),Object(j.jsxs)(w.a.Meta,{style:{marginTop:"20px"},align:"right",children:[Object(j.jsx)(F,{user:c,post:{id:y,likeCount:$,likes:P}}),Object(j.jsx)(D,{content:"Comment on post",children:Object(j.jsxs)(C.a,{as:"div",labelPosition:"right",onClick:function(){return console.log("Comment on post")},children:[Object(j.jsx)(I.a,{name:"comments",color:"blue"}),Object(j.jsx)("span",{basic:!0,color:"blue",pointing:"left",children:A})]})}),c&&c.username===k&&Object(j.jsx)(H,{postId:y,callback:function(){e.history.push("/")}}),Object(j.jsxs)("span",{style:{marginLeft:"10px",textAlign:"right"},children:["created by @",k," ",S()(v).fromNow()]})]}),Object(j.jsx)("hr",{})]}),N.map((function(e){return Object(j.jsx)("div",{fluid:!0,style:{padding:"10px"},children:Object(j.jsxs)(w.a.Content,{children:[Object(j.jsx)(w.a.Header,{}),Object(j.jsxs)(w.a.Meta,{children:[Object(j.jsxs)("span",{style:{float:"left",marginLeft:"10px"},children:[Object(j.jsx)(_e.a,{style:{fontSize:"17px",color:"#33f"}})," @",e.username," "," "," ",S()(e.createdAt).fromNow()]}),c&&c.username===e.username&&Object(j.jsx)("span",{style:{float:"right",marginRight:"10px"},children:Object(j.jsx)(H,{postId:y,commentId:e.id})})]}),Object(j.jsx)("p",{style:{clear:"both"},children:e.body})]})},e.id)}))]})}),Object(j.jsxs)(Be.a.Column,{width:7,children:[Object(j.jsx)(He.a,{style:{width:"100%",margin:"auto"},src:null===d||void 0===d||null===(g=d.getPost)||void 0===g?void 0:g.image}),d.getPost.youtube&&Object(j.jsx)("div",{style:{marginTop:"20px"},children:Object(j.jsx)(Ve,{embedId:d.getPost.youtube})}),c&&Object(j.jsxs)(Qe.a,{style:{marginTop:"30px"},children:[Object(j.jsx)("p",{style:{float:"left",marginTop:"20px"},children:"Post a comment"}),Object(j.jsxs)("div",{style:{float:"left",marginLeft:"20px"},className:"ui action input fluid",children:[Object(j.jsx)("input",{type:"text",placeholder:"Comment..",name:"comment",value:o,onChange:function(e){return l(e.target.value)},ref:s}),Object(j.jsx)("button",{type:"submit",className:"ui button teal",disabled:""===o.trim(),onClick:O,children:"Submit"})]})]})]})]})})}return n};function Xe(){return Object(j.jsx)(r.a,{severity:"error",className:"alert error",children:"404: Resource Not Found"})}var Ye=function(){var e=Object(a.useContext)(h).user,t=Object(a.useContext)(h);return console.log(e),Object(j.jsx)(o.a,{children:Object(j.jsxs)("div",{className:"App",style:{height:window.screen.availHeight-50+"px"},children:[Object(j.jsx)("nav",{id:"navbar",className:"",children:Object(j.jsxs)("div",{className:"nav-wrapper",children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("a",{href:"#home",children:Object(j.jsx)("b",{children:"CookIt"})})}),Object(j.jsxs)("ul",{id:"menu",children:[null!==e&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/recipes",children:"Recipes"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/login",onClick:function(){return t.logout()},children:"Sign Out"})})]}),null===e&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/login",children:"Sign in"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/signup",children:"Sign up"})})]})]})]})}),Object(j.jsx)("div",{className:"App-body",children:Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{exact:!0,path:"/",component:d}),Object(j.jsx)(l.b,{exact:!0,path:"/recipes",component:Ie}),Object(j.jsx)(ze,{exact:!0,path:"/login",component:Me}),Object(j.jsx)(ze,{exact:!0,path:"/signup",component:Ue}),Object(j.jsx)(l.b,{exact:!0,path:"/recipes/:postId",component:Je}),Object(j.jsx)(l.b,{path:"*",component:Xe})]})})]})})},Ze=(n(367),n(307)),et=n(315),tt=n(317),nt=n(306),at=(n(368),Object(tt.a)({uri:"https://cook-it-sw.herokuapp.com/"})),ct=Object(nt.a)((function(){var e=localStorage.getItem("jwtToken");return{headers:{Authorization:e?"Bearer ".concat(e):""}}})),st=new Ze.a({link:ct.concat(at),cache:new et.a});i.a.render(Object(j.jsx)(u.ApolloProvider,{client:st,children:Object(j.jsx)(y,{children:Object(j.jsx)(Ye,{})})}),document.getElementById("root"))}},[[369,1,2]]]);
//# sourceMappingURL=main.b21e50df.chunk.js.map