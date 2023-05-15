/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
   let stack = [];
   let result;

   while(head) {
       stack.push(head.val);
       head = head.next;
   }

   while (stack.length) {
       let s = stack.pop();
       
       n--;

       if (n !== 0) {
           result = result ? new ListNode(s, result) : new ListNode(s);
       }
   }

   if (!result) {
       result = new ListNode();

       return result.next;
   }

   return result;
};
