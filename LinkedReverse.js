
    class Node{
        constructor(val){
            this.data=val;
            this.next=null;
        }
    }
    function reverse(node){
        var prev=null;
        var current=node;
        var next=null;
        while(current!=null){
            next=current.next;
            current.next=prev;
            prev=current;
            current=next;
        }
        node=prev;
        return node;
    }
    function print(node){
        while(node!=null){
            document.write(node.data+" ");
            node=node.next;
        }
    }
    head=new head(5);
    head.next=new head(10);
    head.next.next=new head(15);
    document.write("linkedlist is");
    print(head);
    head=reverse(head);
    document.write("after reverse");
    print(head);
