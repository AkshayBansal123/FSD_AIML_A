const parent=document.getElementById("root");
const element=React.createElement("h1",{},"This is new heading");

      //root.render(element);
const ele2=React.createElement("h2",{},"Shopping cart");
const item1=React.createElement("li",{},"item-1");
const item2=React.createElement("li",{},"item-2");
const list=React.createElement("ul",{},item1,item2);
const root=ReactDOM.createRoot(parent);
const h1=<p>This is new paragraph</p>
      //root.render(element);
      //root.render(ele2);
      root.render([element,ele2,list,h1]);
