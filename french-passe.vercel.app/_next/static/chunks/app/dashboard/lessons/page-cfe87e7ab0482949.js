(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[903],{9491:(e,s,t)=>{Promise.resolve().then(t.bind(t,134))},134:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>g});var r=t(5155),i=t(2115),a=t(4085),n=t(7364),o=t(9053),l=t(6989),d=t(1213),c=t(3681),u=t(8173),m=t.n(u);function p(){let{completedLessons:e}=(0,c.U)(),[s,t]=(0,i.useState)(0),u=[{id:"introduction",title:"Introduction to Pass\xe9 Compos\xe9",description:"Learn what Pass\xe9 Compos\xe9 is and when to use it",color:"bg-blue-500"},{id:"regular-verbs",title:"Regular Verbs",description:"Master -er, -ir, and -re verb conjugations",color:"bg-green-500"},{id:"irregular-verbs",title:"Irregular Verbs",description:"Learn common irregular verbs and their participles",color:"bg-purple-500"},{id:"auxiliary-verbs",title:"Avoir vs. \xcatre",description:"Understand which auxiliary verb to use",color:"bg-orange-500"},{id:"agreement-rules",title:"Agreement Rules",description:"Learn how \xeatre verbs change with gender/number",color:"bg-pink-500"},{id:"reflexive-verbs",title:"Reflexive Verbs",description:"Master conjugating pronominal verbs",color:"bg-yellow-500"},{id:"negation",title:"Negation",description:"How to form negative sentences in Pass\xe9 Compos\xe9",color:"bg-indigo-500"},{id:"questions",title:"Questions",description:"How to ask questions in Pass\xe9 Compos\xe9",color:"bg-green-500"},{id:"adverbs",title:"Adverbs",description:"Using and positioning adverbs in Pass\xe9 Compos\xe9",color:"bg-red-500"}],p=u.slice(6*s,6*s+6),g=(s+1)*6<u.length;return(0,r.jsxs)(l.P.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3},className:"space-y-8 p-6 md:p-8",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-3xl font-bold tracking-tight gradient-text",children:"Lessons"}),(0,r.jsx)("p",{className:"text-muted-foreground mt-2",children:"Step-by-step learning path for Pass\xe9 Compos\xe9"})]}),(0,r.jsx)("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:p.map(s=>(0,r.jsx)(m(),{href:"/dashboard/lessons/".concat(s.id),children:(0,r.jsx)(d.Z,{id:s.id,title:s.title,description:s.description,progress:(null==e?void 0:e.includes(s.id))?100:0,color:s.color,type:"lesson",completed:(null==e?void 0:e.includes(s.id))||!1})},s.id))}),(0,r.jsxs)("div",{className:"mt-8 flex justify-center space-x-4",children:[(0,r.jsxs)(a.$,{variant:"outline",onClick:()=>t(e=>Math.max(0,e-1)),disabled:0===s,className:"glass-card hover:bg-white/30 dark:hover:bg-gray-900/30",children:[(0,r.jsx)(n.A,{className:"mr-2 h-4 w-4"}),"Previous"]}),(0,r.jsxs)(a.$,{variant:"outline",onClick:()=>t(e=>e+1),disabled:!g,className:"glass-card hover:bg-white/30 dark:hover:bg-gray-900/30",children:["Next",(0,r.jsx)(o.A,{className:"ml-2 h-4 w-4"})]})]})]})}function g(){return(0,r.jsx)(p,{})}},3681:(e,s,t)=>{"use strict";t.d(s,{AppProvider:()=>n,U:()=>o});var r=t(5155),i=t(2115);let a=(0,i.createContext)(void 0);function n(e){let{children:s}=e,[t,n]=(0,i.useState)([]),[o,l]=(0,i.useState)({lessonsCompleted:0,totalLessons:7,quizzesPassed:0,totalQuizzes:6,daysStreak:1});return(0,i.useEffect)(()=>{let e=localStorage.getItem("completedLessons");if(e){let s=JSON.parse(e);n(s);let t=s.filter(e=>!e.startsWith("quiz-")).length,r=s.filter(e=>e.startsWith("quiz-")).length;l(e=>({...e,lessonsCompleted:t,quizzesPassed:r}))}},[]),(0,r.jsx)(a.Provider,{value:{completedLessons:t,completeLesson:e=>{if(!t.includes(e)){let s=[...t,e];n(s),localStorage.setItem("completedLessons",JSON.stringify(s)),e.startsWith("quiz-")?l(e=>({...e,quizzesPassed:e.quizzesPassed+1})):l(e=>({...e,lessonsCompleted:e.lessonsCompleted+1}))}},isLessonCompleted:e=>t.includes(e),userProgress:o},children:s})}function o(){let e=(0,i.useContext)(a);if(void 0===e)throw Error("useAppContext must be used within an AppProvider");return e}},1213:(e,s,t)=>{"use strict";t.d(s,{Z:()=>c});var r=t(5155),i=t(5007),a=t(7401);let n=(0,a.A)("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),o=(0,a.A)("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);var l=t(6989),d=t(2115);function c(e){let{id:s,title:t,description:a,progress:c,color:u,type:m,completed:p=!1,locked:g=!1}=e,[h,f]=(0,d.useState)(!1);return(0,r.jsx)(l.P.div,{whileHover:{y:-8,scale:1.02},whileTap:{scale:.98},onHoverStart:()=>f(!0),onHoverEnd:()=>f(!1),className:"relative cursor-pointer h-full",children:(0,r.jsxs)(i.Zp,{className:"group relative h-full overflow-hidden border-2 transition-all duration-300 hover:border-primary/30 glass-card",children:[(0,r.jsx)("div",{className:"absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20 ".concat(u)}),(0,r.jsx)("div",{className:"absolute inset-x-0 top-0 h-1 ".concat(u),style:{width:"".concat(c,"%"),transition:"width 1s cubic-bezier(0.4, 0, 0.2, 1)"}}),(0,r.jsx)(i.Wu,{className:"relative p-4 sm:p-6",children:(0,r.jsxs)("div",{className:"flex items-start justify-between gap-4",children:[(0,r.jsxs)("div",{className:"space-y-1",children:[(0,r.jsx)("h3",{className:"font-semibold tracking-tight text-base sm:text-lg",children:t}),(0,r.jsx)("p",{className:"text-xs sm:text-sm text-muted-foreground line-clamp-2",children:a})]}),p?(0,r.jsx)(l.P.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:400,damping:10},children:(0,r.jsx)(n,{className:"h-5 w-5 text-green-500"})}):g?(0,r.jsx)(o,{className:"h-5 w-5 text-muted-foreground"}):null]})}),(0,r.jsx)(i.wL,{className:"border-t p-4",children:(0,r.jsxs)("div",{className:"w-full space-y-2",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between text-xs",children:[(0,r.jsx)("span",{className:"text-muted-foreground",children:"lesson"===m?"Lesson":"game"===m?"Game":"Quiz"}),(0,r.jsxs)("span",{className:"font-medium",children:[c,"%"]})]}),(0,r.jsx)("div",{className:"relative h-1.5 w-full overflow-hidden rounded-full bg-muted/50",children:(0,r.jsx)(l.P.div,{className:"absolute left-0 top-0 h-full ".concat(u),initial:{width:0},animate:{width:"".concat(c,"%")},transition:{duration:.8,type:"spring",stiffness:50}})})]})})]})})}},4085:(e,s,t)=>{"use strict";t.d(s,{$:()=>d});var r=t(5155),i=t(2115),a=t(2317),n=t(1027),o=t(9602);let l=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=i.forwardRef((e,s)=>{let{className:t,variant:i,size:n,asChild:d=!1,...c}=e,u=d?a.DX:"button";return(0,r.jsx)(u,{className:(0,o.cn)(l({variant:i,size:n,className:t})),ref:s,...c})});d.displayName="Button"},5007:(e,s,t)=>{"use strict";t.d(s,{BT:()=>d,Wu:()=>c,ZB:()=>l,Zp:()=>n,aR:()=>o,wL:()=>u});var r=t(5155),i=t(2115),a=t(9602);let n=i.forwardRef((e,s)=>{let{className:t,...i}=e;return(0,r.jsx)("div",{ref:s,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...i})});n.displayName="Card";let o=i.forwardRef((e,s)=>{let{className:t,...i}=e;return(0,r.jsx)("div",{ref:s,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",t),...i})});o.displayName="CardHeader";let l=i.forwardRef((e,s)=>{let{className:t,...i}=e;return(0,r.jsx)("div",{ref:s,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",t),...i})});l.displayName="CardTitle";let d=i.forwardRef((e,s)=>{let{className:t,...i}=e;return(0,r.jsx)("div",{ref:s,className:(0,a.cn)("text-sm text-muted-foreground",t),...i})});d.displayName="CardDescription";let c=i.forwardRef((e,s)=>{let{className:t,...i}=e;return(0,r.jsx)("div",{ref:s,className:(0,a.cn)("p-6 pt-0",t),...i})});c.displayName="CardContent";let u=i.forwardRef((e,s)=>{let{className:t,...i}=e;return(0,r.jsx)("div",{ref:s,className:(0,a.cn)("flex items-center p-6 pt-0",t),...i})});u.displayName="CardFooter"},9602:(e,s,t)=>{"use strict";t.d(s,{cn:()=>a});var r=t(3463),i=t(9795);function a(){for(var e=arguments.length,s=Array(e),t=0;t<e;t++)s[t]=arguments[t];return(0,i.QP)((0,r.$)(s))}},7364:(e,s,t)=>{"use strict";t.d(s,{A:()=>r});let r=(0,t(7401).A)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},9053:(e,s,t)=>{"use strict";t.d(s,{A:()=>r});let r=(0,t(7401).A)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])}},e=>{var s=s=>e(e.s=s);e.O(0,[501,989,173,441,517,358],()=>s(9491)),_N_E=e.O()}]);